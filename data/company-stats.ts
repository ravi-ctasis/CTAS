/** Canonical company metrics — use these values everywhere on the site. */
export const COMPANY_STATS = {
  projectsDelivered: "200+",
  happyClients: "200+",
  certifiedDevelopers: "20+",
  teamMembers: "20+",
  marketplaces: "35+",
  yearsOfExcellence: "16+",
  countries: "20+",
  ordersSynced: "1.5M+",
  inventoryManaged: "28M+",
} as const;

export const COMPANY_STAT_COPY = {
  projectsDelivered: `${COMPANY_STATS.projectsDelivered} Projects Delivered`,
  happyClients: `${COMPANY_STATS.happyClients} Happy Clients`,
  certifiedDevelopers: `${COMPANY_STATS.certifiedDevelopers} Certified Developers`,
  teamMembers: `${COMPANY_STATS.teamMembers} Team Members`,
  marketplaces: `${COMPANY_STATS.marketplaces} Marketplaces`,
  yearsOfExcellence: `${COMPANY_STATS.yearsOfExcellence} Years of Excellence`,
  countries: `${COMPANY_STATS.countries} Countries`,
  globalReach: `${COMPANY_STATS.countries} Countries`,
  ordersSynced: `${COMPANY_STATS.ordersSynced} Orders Synced`,
  inventoryManaged: `${COMPANY_STATS.inventoryManaged} Inventory Managed`,
} as const;
