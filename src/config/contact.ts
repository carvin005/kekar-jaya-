export const WHATSAPP_NUMBER = '6281267597586';
export const WHATSAPP_DISPLAY = '+62 812-6759-7586';
export const PHONE_DISPLAY = WHATSAPP_DISPLAY;

export const getSiteUrl = () => {
  const configuredSiteUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.trim();

  if (configuredSiteUrl && configuredSiteUrl.length > 0) {
    return configuredSiteUrl.replace(/\/$/, '');
  }

  if (typeof window !== 'undefined') {
    return window.location.origin;
  }

  return '';
};

export const getPublicAssetUrl = (assetPath: string) => {
  const normalizedAssetPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  return `${getSiteUrl()}${normalizedAssetPath}`;
};

export const createWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
