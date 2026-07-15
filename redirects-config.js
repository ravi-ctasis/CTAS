// Next.js Redirects Configuration
// Official documentation: https://nextjs.org/docs/pages/api-reference/config/next-config-js/redirects
// 
// This configuration handles URL redirects from the old ctasis.com website structure
// to the new Next.js website structure. All redirects are permanent (308 status code)
// to preserve SEO value and inform search engines of the permanent move.

const redirects = [
  // Direct page mappings
  {
    source: '/career',
    destination: '/careers',
    permanent: true,
  },
  {
    source: '/case-study',
    destination: '/case-studies',
    permanent: true,
  },
  {
    source: '/contact',
    destination: '/contact-us',
    permanent: true,
  },
  {
    source: '/portfolio',
    destination: '/portfolios',
    permanent: true,
  },
  {
    source: '/our-team',
    destination: '/team',
    permanent: true,
  },
  
  // Service pages mappings
  {
    source: '/amazon-seller-service',
    destination: '/services/amazon-services',
    permanent: true,
  },
  {
    source: '/cloud-service',
    destination: '/services/cloud-solutions',
    permanent: true,
  },
  {
    source: '/mobile-app-development',
    destination: '/services/mobile-apps',
    permanent: true,
  },
  {
    source: '/web-application',
    destination: '/services/web-development',
    permanent: true,
  },
  {
    source: '/web-design',
    destination: '/services/web-design',
    permanent: true,
  },
  {
    source: '/web-development',
    destination: '/services/web-development',
    permanent: true,
  },
  
  // Technology/development service mappings
  {
    source: '/agile-development',
    destination: '/services/web-development',
    permanent: true,
  },
  {
    source: '/cms-ecommerce-development',
    destination: '/services/e-commerce-solutions',
    permanent: true,
  },
  {
    source: '/content-management-system',
    destination: '/services/web-development',
    permanent: true,
  },
  {
    source: '/javascript-development-company',
    destination: '/services/web-development',
    permanent: true,
  },
  {
    source: '/lamp',
    destination: '/services/web-development',
    permanent: true,
  },
  {
    source: '/react-js',
    destination: '/services/web-development',
    permanent: true,
  },
  {
    source: '/server-management',
    destination: '/services/devops',
    permanent: true,
  },
  {
    source: '/wordpress',
    destination: '/services/web-development',
    permanent: true,
  },
  
  // Industry/company pages
  {
    source: '/enterprise-solution',
    destination: '/industries/enterprise',
    permanent: true,
  },
  
  // Infrastructure and company info
  {
    source: '/our-infrastructure',
    destination: '/how-we-work',
    permanent: true,
  },
  {
    source: '/technologies',
    destination: '/services',
    permanent: true,
  },
  
  // Blog and content related
  {
    source: '/author/ctas',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/category/ctasis',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/vijay-raiyani',
    destination: '/team',
    permanent: true,
  },
  
  // Case study specific mappings
  {
    source: '/case-study/application-for-abroad-study',
    destination: '/case-studies/custom-elearning-platform',
    permanent: true,
  },
  {
    source: '/case-study/nursing-home-management',
    destination: '/case-studies/custom-elearning-platform',
    permanent: true,
  },
  {
    source: '/case-study/production-management',
    destination: '/case-studies/production-stock-tracking',
    permanent: true,
  },
  
  // RSS feeds
  {
    source: '/comments/feed',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/feed',
    destination: '/blog',
    permanent: true,
  },
  
  // Broken blog redirects for SEO remediation
  {
    source: '/blog/amazon-fba-grade-resell-updates-2025',
    destination: '/blog/amazon-fba-grade-resell-updates',
    permanent: true,
  },
  {
    source: '/blog/how-to-fix-amazon-sp-api-error-md5',
    destination: '/blog/amazon-sp-api-integration-playbook',
    permanent: true,
  },
  {
    source: '/blog/amazon-sp-api-pricing-calculator',
    destination: '/product/ctas-repricer',
    permanent: true,
  },
  {
    source: '/blog/sellerbuz-launch-multi-channel',
    destination: '/product/sellerbuz',
    permanent: true,
  },
  {
    source: '/blog/postbell-ai-social-automation',
    destination: '/product/postbell',
    permanent: true,
  },
];

// Export for use in next.config.js/ts
module.exports = redirects;

// Usage in next.config.js:
// const redirects = require('./redirects-config.js');
// 
// module.exports = {
//   async redirects() {
//     return redirects;
//   },
// };

// Usage in next.config.ts:
// import redirects from './redirects-config.js';
// 
// export default {
//   async redirects() {
//     return redirects;
//   },
// };
