// Store Information & Contact Details (Placeholder data as per requirements)
export const storeInfo = {
  name: "Vanshika Garments",
  tagline: "Timeless Elegance & Contemporary Fashion for the Entire Family",
  phone: "+91 98765 43210",
  phoneDisplay: "+91 98765 43210",
  whatsappNumber: "919876543210", // Clean number for WhatsApp wa.me links
  email: "hello@vanshikagarments.example.com",
  address: {
    line1: "Shop No. 18-21, Royal Fashion Arcade",
    line2: "Main Market Road, Near City Clock Tower",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110001",
    country: "India",
    landmark: "Opposite Grand Heritage Plaza"
  },
  timings: {
    weekdays: "Monday - Saturday: 10:30 AM - 9:00 PM",
    sunday: "Sunday: 11:00 AM - 8:30 PM",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/919876543210",
    youtube: "https://youtube.com"
  }
};

export const getWhatsAppLink = (message = "") => {
  const encodedMsg = encodeURIComponent(message || "Hello Vanshika Garments! I would like to inquire about your clothing collection.");
  return `https://wa.me/${storeInfo.whatsappNumber}?text=${encodedMsg}`;
};

export const getProductWhatsAppLink = (product, selectedSize = "", selectedColor = "") => {
  const sizeText = selectedSize ? ` (Size: ${selectedSize})` : "";
  const colorText = selectedColor ? ` [Color: ${selectedColor}]` : "";
  const msg = `Hello Vanshika Garments, I'm interested in buying/inquiring about:
*${product.name}* (Product Code: ${product.code})
Price: ₹${product.price}${sizeText}${colorText}
Could you please confirm availability and provide details?`;
  return `https://wa.me/${storeInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`;
};
