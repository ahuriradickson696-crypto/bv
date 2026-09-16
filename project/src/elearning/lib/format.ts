export function formatPrice(price: number): string {
  const usd = Number(price);
  const ugxRate = 3800; // approximate USD to UGX
  const ugx = Math.round(usd * ugxRate);
  const ugxFormatted = ugx.toLocaleString('en-UG');
  if (usd === 0) return 'Free';
  return `$${usd.toFixed(0)} · UGX ${ugxFormatted}`;
}

export function formatPriceShort(price: number): string {
  const usd = Number(price);
  if (usd === 0) return 'Free';
  return `$${usd.toFixed(0)}`;
}
