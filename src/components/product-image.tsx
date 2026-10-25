import { isAmazonHostedImage, type Product } from "@/lib/catalog";
import { cn } from "@/lib/utils";

/** Amazon Associates UK: display by linking to Amazon-hosted files, not self-hosting. */
export function ProductImage({
  product,
  alt,
  className,
  linked = true,
}: {
  product: Product;
  alt: string;
  className?: string;
  linked?: boolean;
}) {
  const amazon = isAmazonHostedImage(product.image);
  const img = (
    <img
      src={product.image}
      alt={alt}
      className={cn(amazon ? "bg-paper object-contain" : "object-cover", className)}
    />
  );

  if (linked && amazon) {
    return (
      <a href={product.affiliateUrl} target="_blank" rel="sponsored noopener" className="block">
        {img}
      </a>
    );
  }

  return img;
}

export function AmazonImageCredit({ className }: { className?: string }) {
  return <p className={cn("text-xs text-dust", className)}>Product images courtesy of Amazon.co.uk</p>;
}
