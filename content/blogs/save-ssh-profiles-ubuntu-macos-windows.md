---
id: "16"
slug: "how-to-save-ssh-profiles"
title: "How to Save SSH Profiles on Ubuntu, macOS, and Windows (Git Bash)"
excerpt: "Learn how to save and manage SSH profiles using the SSH config file on Ubuntu, macOS, and Windows (Git Bash) to connect to servers quickly with short commands."
publishDate: "2025-01-22"
lastModified: "2025-01-22"
category: "DevOps"
tags:
  - SSH Configuration
  - Linux SSH
  - macOS SSH
  - Windows Git Bash
  - Server Management
  - DevOps Tools
  - SSH Key Authentication
  - Remote Server Access
image: "/how-to-save-ssh-profiles.webp"
featured: false
views: 0
readTime: 7
status: "published"
href: "/blog/how-to-save-ssh-profiles"
relatedPosts:
  - "9"
  - "8"

author:
  name: "Ctas Development Team"
  bio: "DevOps and cloud experts specializing in secure server access, automation, and scalable infrastructure."
  avatar: "/ctas-logo-footer.webp"
  social:
    twitter: "@ctasdev"
    linkedin: "ctas-solutions"
    github: "ctas-dev"

seo:
  metaTitle: "Save SSH Profiles on Ubuntu, macOS & Windows | SSH Config Guide"
  metaDescription: "Step-by-step guide to saving SSH profiles using the SSH config file on Ubuntu, macOS, and Windows Git Bash for faster and safer server connections."
  keywords:
    - save SSH profiles
    - SSH config file
    - SSH config Ubuntu
    - SSH config macOS
    - SSH Git Bash Windows
    - SSH profile management
    - SSH key setup
    - DevOps SSH guide
---

# How to Save SSH Profiles on Ubuntu, macOS, and Windows (Git Bash)

If you often connect to servers via SSH — whether on Ubuntu, macOS, or Windows — typing full commands every time can be tedious:

```bash
ssh -i /path/to/key.pem user@your-server-ip -p 22
```

Instead, you can create SSH profiles and connect instantly with a short command like:

```bash
ssh myserver
```

## Why Use SSH Profiles?

SSH profiles let you store connection details such as:

- Host name or IP address
- Username
- Port number
- SSH key path

This makes managing multiple servers (production, staging, development, etc.) much easier and more organized.

## Step 1: Locate or Create the SSH Config File

The SSH configuration file is stored in your home directory under `.ssh/config`.

| Operating System | File Path |
|-----------------|-----------|
| Ubuntu / macOS | `~/.ssh/config` |
| Windows (Git Bash) | `~/.ssh/config` or `C:\Users\<YourUsername>\.ssh\config` |

If the folder does not exist, create it:

```bash
mkdir -p ~/.ssh
```

## Step 2: Create or Edit the Config File

Open the file in a terminal text editor such as Nano:

```bash
nano ~/.ssh/config
```

Add your SSH profile configuration:

```bash
# Basic SSH profile
Host myserver
    HostName your.server.ip
    User username
    Port 22
    IdentityFile ~/.ssh/private_key_file
```

Each `Host` block represents a profile. You can name it anything you like.

## Step 3: Secure the File Permissions

On Ubuntu or macOS, run the following commands to set correct permissions:

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/config
chmod 600 ~/.ssh/*
```

> **Note:** On Windows, Git Bash may ignore these permissions, but it's good practice to set them for consistency.

## Step 4: Connect Using Your Profile

After saving the file, connect using your profile name:

```bash
ssh myserver
```

SSH will automatically use the settings from your configuration file.

## Step 5: Add Multiple Servers (Optional)

You can store multiple profiles in the same config file:

```bash
# Staging server
Host staging
    HostName staging.server.ip
    User ubuntu
    IdentityFile ~/.ssh/staging.pem

# Production server
Host production
    HostName production.server.ip
    User ec2-user
    Port 2222
    IdentityFile ~/.ssh/production.pem
```

Now you can connect easily:

```bash
ssh staging
# or
ssh production
```

## Alternative: Use an Alias

If you prefer not to use an SSH config file, you can define a simple alias.

### For Ubuntu/macOS:

Add this line to your `~/.bashrc` or `~/.zshrc` file:

```bash
alias myssh='ssh -i ~/.ssh/private_key_file user@your.server.ip -p 22'
```

Reload your shell:

```bash
source ~/.bashrc  # or source ~/.zshrc
```

### For Windows (Git Bash):

Add the same alias to your `~/.bashrc` file and reload it.

## Summary


| Platform            | SSH Config Path                     | Connect Command    |
|--------------------|------------------------------------|------------------|
| Ubuntu             | `~/.ssh/config`                    | `ssh myserver`   |
| macOS              | `~/.ssh/config`                    | `ssh myserver`   |
| Windows (Git Bash) | `~/.ssh/config` or `C:\Users\<YourUsername>\.ssh\config` | `ssh myserver` |


- **File name**: `config`
- **Extension**: none
- **Location**: `.ssh` folder in your home directory
- **Purpose**: Store multiple SSH profiles for quick connections

## Final Thoughts

Setting up SSH profiles saves time and reduces mistakes when connecting ACto servers. Whether you're managing cloud servers, staging environments, or local VMs, this method provides a clean and efficient way to handle SSH connections.

Once configured, you can simply run:

```bash
ssh myserver
```

and connect instantly on any operating system.

---

**Pro Tip**: For even faster access, consider setting up SSH key-based authentication to eliminate password prompts. Combine this with SSH agent forwarding for a seamless experience across multiple servers.

