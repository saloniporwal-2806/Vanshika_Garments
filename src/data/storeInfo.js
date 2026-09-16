// Store Information & Contact Details - Central Source of Truth
export const storeInfo = {
  name: "Vanshika Garments",
  tagline: "Timeless Elegance & Contemporary Fashion for the Entire Family",
  phone: "+91 7011186927",
  phoneDisplay: "+91 70111 86927",
  whatsappNumber: "917011186927", // Clean number for WhatsApp wa.me links
  email: "vanshikagarments416@gmail.com",
  address: "Treasure Fantasy cat road",
  mapsUrl: "",
  instagram: "",
  facebook: "",
  businessHours: "",
};

// Default message as per requirements:
// "Hello Vanshika Garments, I would like to know more about your clothing collection."
export const getWhatsAppLink = (message = "") => {
  const defaultMsg = "Hello Vanshika Garments, I would like to know more about your clothing collection.";
  const encodedMsg = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${storeInfo.whatsappNumber}?text=${encodedMsg}`;
};

// Product enquiry dynamic message as per requirements:
// "Hello Vanshika Garments, I am interested in [PRODUCT NAME]. Please share more details."
export const getProductWhatsAppLink = (product) => {
  const productName = product?.name || "this item";
  const msg = `Hello Vanshika Garments, I am interested in ${productName}. Please share more details.`;
  return `https://wa.me/${storeInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`;
};
