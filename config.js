/**
 * MajiHesabu - Configuration File
 * Updated with new API endpoint - August 2026
 */

if (typeof CONFIG === 'undefined') {
  const CONFIG = {
    // ✅ NEW API ENDPOINT - UPDATED
    API_ENDPOINT: "https://script.google.com/macros/s/AKfycbz7CC5O-txelyU2cQr7AdOykcACmBMckzwgIeffnBw-xpJ17A4dbRnahrBNy_atxtzG/exec",
    
    // COMPANY INFO
    COMPANY_NAME: "Joy Water Supplies",
    COMPANY_PHONE: "+254768789382",
    COMPANY_EMAIL: "joywatersupplies@gmail.com",
    COMPANY_LOCATION: "Mlolongo, Kenya",
    
    // PAYMENT INFO
    MPESA_TILL: "4984254",
    MPESA_BUSINESS_NAME: "Joy Water Supplies",
    
    // WHATSAPP
    WHATSAPP_PHONE: "+254768789382",
    WHATSAPP_BUSINESS_NAME: "Joy Water Supplies",
    
    // BILLING
    WATER_RATE: 100,
    PAYMENT_DEADLINE_DAYS: 15,
    CURRENCY: "KES",
    CURRENCY_SYMBOL: "KES",
    
    // ADMIN
    ADMIN_KEY: "MajiAdmin2026",
    
    // COLORS
    PRIMARY_COLOR: "#1976D2",
    SECONDARY_COLOR: "#1565C0",
    SUCCESS_COLOR: "#4CAF50",
    DANGER_COLOR: "#f44336",
    WARNING_COLOR: "#ff9800",
    
    // HELPERS
    formatCurrency: function(amount) {
      return this.CURRENCY_SYMBOL + " " + Number(amount).toLocaleString();
    },
    
    normalizePhone: function(phone) {
      if (!phone) return "";
      const clean = String(phone).replace(/[^0-9]/g, "");
      if (clean.startsWith("254")) return "+" + clean;
      if (clean.startsWith("0")) return "+254" + clean.substring(1);
      return "+" + clean;
    }
  };
}
