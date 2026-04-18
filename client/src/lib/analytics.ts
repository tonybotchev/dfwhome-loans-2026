// Analytics helper — fires GA4 + Meta Pixel events
// Placeholders (GTM-XXXXXXX, G-XXXXXXXXXX, PIXEL_ID_HERE) will be replaced by Tony

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function trackLeadFormSubmit(formName: string = 'pre_qualification') {
  window.gtag?.('event', 'generate_lead', {
    event_category: 'form',
    event_label: formName,
  });
  window.fbq?.('track', 'Lead');
}

export function trackPhoneClick() {
  window.gtag?.('event', 'contact', { method: 'phone' });
  window.fbq?.('track', 'Contact');
}

export function trackWhatsAppClick() {
  window.gtag?.('event', 'contact', { method: 'whatsapp' });
  window.fbq?.('track', 'Contact');
}

export function trackChatOpen() {
  window.gtag?.('event', 'contact', { method: 'chat' });
}
