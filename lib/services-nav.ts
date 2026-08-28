export interface ServiceNavItem {
  label: string;
  href: string;
}

export interface ServiceNavColumn {
  heading: string;
  viewAllLabel: string;
  href: string;
  items: ServiceNavItem[];
}

export const servicesNav: { buying: ServiceNavColumn; selling: ServiceNavColumn } = {
  buying: {
    heading: "Buying",
    viewAllLabel: "View All Buying",
    href: "/services/buying",
    items: [
      { label: "Buying a Home", href: "/services/buying" },
      { label: "First-Time Home Buyers", href: "/blog/austin-first-time-homebuyer-guide" },
      { label: "Home Buying Guide", href: "/blog/austin-home-buying-process-search-to-close" },
      { label: "Getting Pre-Approved", href: "/services/buying#pre-approved" },
      { label: "Finding the Right Home", href: "/blog/austin-buyer-mistakes-when-finding-a-home" },
      { label: "Making an Offer", href: "/services/buying#making-an-offer" },
      { label: "Home Inspections", href: "/services/buying#inspections" },
      { label: "Closing Costs", href: "/blog/austin-closing-costs-explained-guide" },
      { label: "Closing Day", href: "/services/buying#closing-day" },
      { label: "New Construction", href: "/blog/austin-new-construction-vs-resale-homes" },
      { label: "Luxury Home Buying", href: "/services/buying#luxury-buying" },
    ],
  },
  selling: {
    heading: "Selling",
    viewAllLabel: "View All Selling",
    href: "/services/selling",
    items: [
      { label: "Selling a Home", href: "/services/selling" },
      { label: "Home Selling Guide", href: "/blog/austin-home-selling-strategy-timing-guide" },
      { label: "What's My Home Worth?", href: "/services/selling#home-value" },
      { label: "Preparing Your Home for Sale", href: "/blog/how-to-prepare-your-home-for-sale-in-austin" },
      { label: "Home Staging", href: "/blog/austin-home-seller-advisory-services" },
      { label: "Pricing Your Home", href: "/services/selling#pricing" },
      { label: "Marketing Your Home", href: "/services/selling#marketing" },
      { label: "Understanding Offers", href: "/services/selling#understanding-offers" },
      { label: "Negotiating Offers", href: "/services/selling#negotiating-offers" },
      { label: "Home Inspections", href: "/services/selling#inspections" },
      { label: "Closing the Sale", href: "/services/selling#closing-the-sale" },
      { label: "Luxury Home Selling", href: "/services/selling#luxury-selling" },
    ],
  },
};
