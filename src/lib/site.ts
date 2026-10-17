export const site = {
  name: "Estora Realty",
  domain: "https://estorarealty.com", // no trailing slash
  description:
    "Curating exceptional residences, timeless mid-century estates, and modern waterfront sanctuaries for discerning collectors and individuals worldwide.",
  phone: "+1-310-892-4410",
  email: "concierge@estorarealty.com",
  address: {
    street: "9454 Wilshire Boulevard, Suite PH-B",
    city: "Beverly Hills",
    region: "CA",
    postalCode: "90212",
    country: "US",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Properties", href: "/properties/" },
    { label: "Contact", href: "/contact/" },
  ],
} as const;
