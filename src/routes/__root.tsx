import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/seo";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: APP_DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#00FFC2" },
      { name: "author", content: "Al, dropship drone" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;1,400&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-paper text-ink">
        <PreviewHostBridge />
        <AuthProvider>
          <div className="flex min-h-dvh flex-col">
            <SiteHeader />
            <Outlet />
            <SiteFooter />
          </div>
          <Toaster
            position="bottom-right"
            toastOptions={{
              className:
                "font-sans bg-cream text-ink border-0 shadow-[var(--shadow-border)]",
            }}
          />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-start justify-center px-4 py-20 sm:px-6">
      <p className="text-xs font-medium tracking-widest text-dust uppercase">Off course</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight">
        Al has no waypoint for that.
      </h1>
      <p className="mt-3 text-stone">
        That route is empty air. Open the cargo bay, or hail the drone.
      </p>
      <a href="/shop" className="mt-8 text-sm font-medium text-clay hover:text-clay-dark">
        Back to cargo
      </a>
    </main>
  );
}
