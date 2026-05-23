/**
 * Sestav Cloudinary URL z public_id
 * Volitelně přidá transformace (např. šířka, kvalita)
 */
export function cloudinaryUrl(
  publicId: string,
  opts: { w?: number; q?: number } = {}
): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "demo";
  const transforms = [
    opts.w ? `w_${opts.w}` : null,
    opts.q ? `q_${opts.q}` : "q_auto",
    "f_auto",
  ]
    .filter(Boolean)
    .join(",");
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms}/${publicId}`;
}
