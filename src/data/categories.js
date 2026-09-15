export const categoryGroups = [
  {
    id: "women-girls",
    title: "Girls & Women",
    subtitle: "Ethnic Elegance, Contemporary Co-ords & Festive Ensembles",
    accent: "burgundy",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    categories: [
      { id: "kurtis", name: "Designer Kurtis & Tunics", count: "48+ Styles", badge: "Hot Seller" },
      { id: "kurta-sets", name: "Kurta Sets & Dupattas", count: "35+ Styles", badge: "Festive" },
      { id: "co-ords", name: "Chic Co-ord Sets", count: "24+ Styles", badge: "Trending" },
      { id: "women-dresses", name: "Party & Western Dresses", count: "30+ Styles", badge: "New" },
      { id: "girls-festive", name: "Girls Festive & Ethnic", count: "28+ Styles", badge: "Kids Special" }
    ]
  },
  {
    id: "men-boys",
    title: "Boys & Men",
    subtitle: "Classic Tailoring, Casual Staples & Regal Ethnic Attire",
    accent: "charcoal",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    categories: [
      { id: "men-shirts", name: "Linen & Premium Cotton Shirts", count: "42+ Styles", badge: "Bestseller" },
      { id: "men-kurta", name: "Ethnic Kurta Pajama Sets", count: "30+ Styles", badge: "Festive Pick" },
      { id: "t-shirts", name: "Casual Polos & T-Shirts", count: "50+ Styles", badge: "Everyday" },
      { id: "lowers", name: "Trousers, Chinos & Lowers", count: "25+ Styles", badge: "Comfort Fit" },
      { id: "boys-wear", name: "Boys Party & Ethnic Wear", count: "20+ Styles", badge: "Kids Special" }
    ]
  }
];

export const quickCategories = [
  { id: "all", label: "All Collections" },
  { id: "women", label: "Women & Girls", group: "women-girls" },
  { id: "men", label: "Men & Boys", group: "men-boys" },
  { id: "kurtis", label: "Kurtis & Tunics", group: "women-girls" },
  { id: "kurta-sets", label: "Kurta Sets", group: "women-girls" },
  { id: "co-ords", label: "Co-ord Sets", group: "women-girls" },
  { id: "men-shirts", label: "Men Shirts", group: "men-boys" },
  { id: "men-kurta", label: "Men Kurta Sets", group: "men-boys" },
  { id: "t-shirts", label: "T-Shirts & Polos", group: "men-boys" },
  { id: "lowers", label: "Lowers & Pants", group: "men-boys" },
  { id: "girls-festive", label: "Girls Festive", group: "women-girls" },
  { id: "boys-wear", label: "Boys Special", group: "men-boys" }
];
