export function genImageUrl(
  link?: string | undefined | null,
  fallback = "/assets/images/default-avatar.png"
) {
  if (!link) {
    return fallback;
  }

  if (
    link.startsWith("blob") ||
    link.startsWith("http://") ||
    link.startsWith("https://")
  ) {
    return link;
  }

  return `${process.env.NEXT_PUBLIC_IMAGE_BASE}${
    link.startsWith("/") ? "" : "/"
  }${link}`;
}
