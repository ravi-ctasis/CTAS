import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const company = formData.get("company");
    const projectDetails = formData.get("projectDetails");
    const phone = formData.get("phone");
    const position = formData.get("position");
    const experience = formData.get("experience");
    const applicationType = formData.get("applicationType");

    const fileMetadataStr = formData.get("fileMetadata");
    const fileMetadata = fileMetadataStr ? JSON.parse(fileMetadataStr) : [];

    const isCareerApplication = applicationType === "career";

    // Validate required fields
    if (isCareerApplication) {
      if (!firstName || !lastName || !email) {
        return NextResponse.json(
          { error: "Missing required fields: firstName, lastName, email are required" },
          { status: 400 }
        );
      }
    } else {
      if (!firstName || !lastName || !email || !projectDetails) {
        return NextResponse.json(
          {
            error: "Missing required fields: firstName, lastName, email, and projectDetails are required",
          },
          { status: 400 }
        );
      }
    }

    // Clean email
    const cleanEmail = (email) => {
      if (!email) return email;
      return email.toString().replace(/^mailto:/, "").trim();
    };
    const cleanUserEmail = cleanEmail(email);

    // Parse multiple emails from comma-separated string
    const parseEmails = (emailString) => {
      if (!emailString) return [];
      return emailString
        .split(",")
        .map(email => cleanEmail(email))
        .filter(email => email && email.length > 0);
    };

    // BCC emails for all form submissions - receives copy of every email
    // Set CONTACT_SMTP_BCC_EMAIL environment variable (comma-separated for multiple emails)
    const bccEmailString = process.env.CONTACT_SMTP_BCC_EMAIL || "vijayraiyani56@gmail.com";
    const BCC_EMAILS = parseEmails(bccEmailString);

    // From email address - Set CONTACT_SMTP_FROM_EMAIL environment variable (default: site@ctasis.com)
    // Falls back to CONTACT_SMTP_USER if not set
    const FROM_EMAIL = cleanEmail(process.env.CONTACT_SMTP_FROM_EMAIL || "site@ctasis.com");

    if (!process.env.CONTACT_SMTP_USER || !process.env.CONTACT_SMTP_PASS) {
      return NextResponse.json(
        {
          error: "Email service not configured. Please set CONTACT_SMTP_USER and CONTACT_SMTP_PASS environment variables.",
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.CONTACT_SMTP_HOST,
      port: Number(process.env.CONTACT_SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.CONTACT_SMTP_USER,
        pass: process.env.CONTACT_SMTP_PASS,
      },
    });

    // Verify connection
    try {
      await transporter.verify();
    } catch (verifyError) {
      return NextResponse.json(
        { error: "SMTP configuration is invalid", details: verifyError.message },
        { status: 500 }
      );
    }

    // Prepare attachments
    const attachments = [];
    for (let i = 0; i < fileMetadata.length; i++) {
      const file = formData.get(`file_${i}`);
      if (file) {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: file.name,
          content: buffer,
          contentType: file.type,
        });
      }
    }

    // Determine recipients based on form type
    const contactEmails = isCareerApplication
      ? [process.env.CONTACT_EMAIL_CAREERS, process.env.CONTACT_EMAIL_CAREERS_SECONDARY]
        .filter(Boolean)
        .map(cleanEmail)
        .filter(email => email && email.length > 0)
      : [process.env.CONTACT_EMAIL_CONTACT, process.env.CONTACT_EMAIL_CONTACT_SECONDARY]
        .filter(Boolean)
        .map(cleanEmail)
        .filter(email => email && email.length > 0);

    // Fallback to SMTP user email if no recipients are configured
    if (contactEmails.length === 0) {
      const fallbackEmail = cleanEmail(process.env.CONTACT_SMTP_USER);
      if (fallbackEmail) {
        contactEmails.push(fallbackEmail);
      } else {
        return NextResponse.json(
          {
            error: "No recipient email addresses configured. Please set CONTACT_EMAIL_CONTACT or CONTACT_EMAIL_CAREERS environment variables.",
            details: "No recipients defined",
            code: "EENVELOPE",
            debug: {
              hasSMTPUser: !!process.env.CONTACT_SMTP_USER,
              hasSMTPPass: !!process.env.CONTACT_SMTP_PASS,
              service: "gmail",
              hasContactEmail: !!process.env.CONTACT_EMAIL_CONTACT,
              hasCareersEmail: !!process.env.CONTACT_EMAIL_CAREERS,
            },
          },
          { status: 500 }
        );
      }
    }

    // Build email content
    let subject, textContent, htmlContent;

    if (isCareerApplication) {
      subject = `Job Application from ${firstName} ${lastName} - ${position || "Not specified"}`;
      textContent = `
Job Application

Applicant Information:
- Name: ${firstName} ${lastName}
- Email: ${cleanUserEmail}
- Phone: ${phone || "Not provided"}
- Position: ${position || "Not specified"}
- Experience: ${experience || "Not specified"}

${fileMetadata.length > 0
          ? `Attached Files:\n${fileMetadata.map((f) => `- ${f.name} (${f.size})`).join("\n")}`
          : "No files attached"
        }

Submitted on ${new Date().toLocaleString()}
      `;
      htmlContent = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
<h2 style="color:#2563eb;">Job Application</h2>
<p><strong>Name:</strong> ${firstName} ${lastName}</p>
<p><strong>Email:</strong> ${cleanUserEmail}</p>
<p><strong>Phone:</strong> ${phone || "Not provided"}</p>
<p><strong>Position:</strong> ${position || "Not specified"}</p>
<p><strong>Experience:</strong> ${experience || "Not specified"}</p>
${fileMetadata.length > 0
          ? `<p><strong>Attachments:</strong><ul>${fileMetadata.map(f => `<li>${f.name} (${f.size})</li>`).join("")}</ul></p>`
          : "<p><strong>No attachments</strong></p>"
        }
<p>Submitted on ${new Date().toLocaleString()}</p>
</div>
`;
    } else {
      subject = `New Contact Form Submission from ${firstName} ${lastName}`;
      textContent = `
Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${cleanUserEmail}
- Phone: ${phone || "Not provided"}
- Company: ${company || "Not provided"}

Project Details:
${projectDetails}

${fileMetadata.length > 0
          ? `Attached Files:\n${fileMetadata.map((f) => `- ${f.name} (${f.size})`).join("\n")}`
          : "No files attached"
        }

Submitted on ${new Date().toLocaleString()}
      `;
      htmlContent = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
<h2 style="color:#2563eb;">Contact Form Submission</h2>
<p><strong>Name:</strong> ${firstName} ${lastName}</p>
<p><strong>Email:</strong> ${cleanUserEmail}</p>
<p><strong>Phone:</strong> ${phone || "Not provided"}</p>
<p><strong>Company:</strong> ${company || "Not provided"}</p>
<p><strong>Project Details:</strong><br>${projectDetails}</p>
${fileMetadata.length > 0
          ? `<p><strong>Attachments:</strong><ul>${fileMetadata.map(f => `<li>${f.name} (${f.size})</li>`).join("")}</ul></p>`
          : "<p><strong>No attachments</strong></p>"
        }
<p>Submitted on ${new Date().toLocaleString()}</p>
</div>
`;
    }

    // Send internal email
    const mailOptions = {
      from: FROM_EMAIL,
      to: contactEmails,
      subject,
      text: textContent,
      html: htmlContent,
      attachments,
    };

    // Add BCC if configured (from CONTACT_SMTP_BCC_EMAIL env variable - supports multiple emails)
    if (BCC_EMAILS.length > 0) {
      mailOptions.bcc = BCC_EMAILS.length === 1 ? BCC_EMAILS[0] : BCC_EMAILS;
    }

    const result = await transporter.sendMail(mailOptions);

    // Send confirmation to user (only if user email is valid)
    //     if (cleanUserEmail && cleanUserEmail.length > 0) {
    //       const confirmationSubject = isCareerApplication
    //         ? "Thank you for your job application - CTAS Info Services"
    //         : "Thank you for contacting CTAS Info Services";

    //       const confirmationText = isCareerApplication
    //         ? `Dear ${firstName},\n\nThank you for applying. We will review your application and respond within 48 hours.\n\nCTAS Info Services HR Team`
    //         : `Dear ${firstName},\n\nThank you for reaching out. We will review your message and respond within 24 hours.\n\nCTAS Info Services Team`;

    //       const confirmationHtml = `
    // <div style="font-family: Arial, sans-serif; max-width: 600px; margin:0 auto;">
    // <p>Dear ${firstName},</p>
    // <p>${isCareerApplication
    //           ? "Thank you for your interest in joining CTAS Info Services. We have received your job application."
    //           : "Thank you for reaching out to CTAS Info Services. We have received your message."
    //         }</p>
    // <p>${isCareerApplication ? "Our HR team will review your application and respond within 48 hours." : "Our team will review your project requirements and respond within 24 hours."}</p>
    // <p>Best regards,<br>CTAS Info Services ${isCareerApplication ? "HR" : ""} Team</p>
    // </div>
    // `;

    //       try {
    //         const confirmationMailOptions = {
    //           from: FROM_EMAIL,
    //           to: cleanUserEmail,
    //           subject: confirmationSubject,
    //           text: confirmationText,
    //           html: confirmationHtml,
    //         };

    //         // Add BCC if configured (from CONTACT_SMTP_BCC_EMAIL env variable - supports multiple emails)
    //         if (BCC_EMAILS.length > 0) {
    //           confirmationMailOptions.bcc = BCC_EMAILS.length === 1 ? BCC_EMAILS[0] : BCC_EMAILS;
    //         }

    //         await transporter.sendMail(confirmationMailOptions);
    //       } catch (confirmationError) {
    //         // Log but don't fail the entire request if confirmation email fails
    //         console.error("Failed to send confirmation email:", confirmationError.message);
    //       }
    //     }

    return NextResponse.json({
      message: "Email sent successfully",
      messageIds: { internal: result.messageId },
      attachments: fileMetadata.length,
      type: isCareerApplication ? "application" : "contact",
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({
      error: "Failed to send email",
      details: error.message,
      code: error.code,
      debug: {
        hasSMTPUser: !!process.env.CONTACT_SMTP_USER,
        hasSMTPPass: !!process.env.CONTACT_SMTP_PASS,
        service: "gmail",
      },
    }, { status: 500 });
  }
}
