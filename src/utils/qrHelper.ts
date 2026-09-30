/**
 * Generates an absolute, bulletproof verification URL that works on ALL mobile devices,
 * tablets, desktops, and across subpath hosting (such as GitHub Pages).
 */
export function getVerificationUrl(credentialId: string): string {
  if (typeof window === 'undefined') return '';
  
  // Strips existing query parameters and hashes so we don't duplicate ?verify=
  const cleanBase = window.location.href.split('?')[0].split('#')[0];
  return `${cleanBase}?verify=${encodeURIComponent(credentialId)}`;
}
