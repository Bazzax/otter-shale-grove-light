import { Link } from "@tanstack/react-router";
import { ProductImage } from "@/components/product-image";
import { Badge } from "@/components/ui/badge";
import { isAmazonHostedImage, isAmazonPick, type Product } from "@/lib/catalog";
import { formatProductPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  size = "md",
}: {
  product: Product;
  size?: "md" | "lg";
}) {
  const amazonImage = isAmazonHostedImage(product.image);
  const imgClass = cn(
    "w-full outline outline-1 -outline-offset-1 outline-ink/10 transition-transform duration-300 ease-out group-hover:scale-[1.04]",
    size === "lg" ? "aspect-[4/3] lg:aspect-[4/5] lg:min-h-full" : "aspect-[4/3]",
  );
  const alt = `${product.name} — ${product.tagline}`;

  return (
    <article
      className={cn(
        "group flex flex-col rounded-2xl bg-cream p-2 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-border-hover)]",
        size === "lg" && "lg:row-span-2",
      )}
    >
      <div className="relative overflow-hidden rounded-xl bg-paper">
        {amazonImage ? (
          <ProductImage product={product} alt={alt} className={imgClass} />
        ) : (
          <Link to="/shop/$slug" params={{ slug: product.slug }}>
            <img src={product.image} alt={alt} className={cn("object-cover", imgClass)} />
          </Link>
        )}
        {product.featured ? (
          <Badge variant="clay" className="absolute top-3 left-3">
            Priority cargo
          </Badge>
        ) : null}
      </div>
      <Link
        to="/shop/$slug"
        params={{ slug: product.slug }}
        className="flex flex-1 flex-col gap-1 px-3 pt-4 pb-3"
      >
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-medium tracking-tight text-balance">
            {product.name}
          </h3>
          <p className="text-sm font-medium tabular-nums text-clay">
            {formatProductPrice(product)}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-pretty text-stone">{product.tagline}</p>
        <p className="mt-2 text-xs tracking-wide text-dust uppercase">
          {product.category} · {product.affiliateLabel} affiliate
          {isAmazonPick(product) ? " pick" : ""}
        </p>
      </Link>
    </article>
  );
}
