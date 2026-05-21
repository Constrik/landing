export const PROD_TWEAKS = {
  showPricing: true,
  showLogin: false,
  bookingUrl: "https://calendar.app.google/yNRy3F8fUua9oNsK7",
  loginUrl: "https://app.constrik.com/login",
} as const;

export type Tweaks = typeof PROD_TWEAKS;
