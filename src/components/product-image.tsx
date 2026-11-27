import { Link } from "@tanstack/react-router";
import {
  isAmazonHostedImage,
  LIFESTYLE_IMAGE_SIZE,
  productDisplaySrc,
  type Product,
} from "@/lib/catalog";
import { cn } from "@/lib/utils";

/** Amazon Associates UK: display Amazon files by linking; local lifestyle photos stay on-site. */
export function ProductImage({
  product,
  alt,
  className,
  linked = true,
  priority = false,
}: {
  product: Product;
  alt: string;
  className?: string;
  linked?: boolean;
  /** Skip lazy-load when the image is above the fold. */
  priority?: boolean;
}) {
  const src = productDisplaySrc(product);
  const amazon = isAmazonHostedImage(src);
  const displayAlt = product.lifestyleImage ? (product.lifestyleAlt ?? alt) : alt;
  const img = (
    <img
      src={src}
      alt={displayAlt}
      className={cn(className, amazon ? "bg-paper object-contain" : "object-cover")}
      width={amazon ? undefined : LIFESTYLE_IMAGE_SIZE.width}
      height={amazon ? undefined : LIFESTYLE_IMAGE_SIZE.height}
      loading={amazon ? undefined : priority ? "eager" : "lazy"}
    />
  );

  if (linked && amazon) {
    return (
      <a href={product.affiliateUrl} target="_blank" rel="sponsored noopener" className="block">
        {img}
      </a>
    );
  }

  if (linked && !amazon) {
    return (
      <Link to="/shop/$slug" params={{ slug: product.slug }} className="block">
        {img}
      </Link>
    );
  }

  return img;
}

export function AmazonImageCredit({ className }: { className?: string }) {
  return <p className={cn("text-xs text-dust", className)}>Product images courtesy of Amazon.co.uk</p>;
}
