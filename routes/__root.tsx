import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--dark)", color: "var(--text)", padding: "2rem", textAlign: "center" }}>
      <div>
        <h1 style={{ fontFamily: "'Tajawal',sans-serif", fontSize: "4rem", fontWeight: 900, color: "var(--gold-light)" }}>٤٠٤</h1>
        <p style={{ marginTop: "1rem", color: "var(--text-muted)" }}>الصفحة غير موجودة</p>
        <a href="/" className="btn-gold" style={{ marginTop: "2rem" }}>الرئيسية</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--dark)", color: "var(--text)", padding: "2rem", textAlign: "center" }}>
      <div>
        <h1 style={{ fontFamily: "'Tajawal',sans-serif", fontWeight: 900 }}>حدث خطأ ما</h1>
        <p style={{ marginTop: "0.5rem", color: "var(--text-muted)" }}>نعتذر عن الإزعاج، حاول إعادة المحاولة.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="btn-gold" style={{ marginTop: "2rem" }}>إعادة المحاولة</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "شركة العراب المميزة للتجارة | Alarrab Trading — سيراميك ورخام" },
      { name: "description", content: "شركة العراب المميزة للتجارة (Alarrab Trading) — أكثر من 35 عاماً من الخبرة في السيراميك والبورسلان والرخام في المملكة العربية السعودية." },
      { name: "keywords", content: "شركة العراب المميزة للتجارة, العراب المميزة, العراب للتجارة, alarrabtrading, alarrab trading, alarrab, سيراميك, رخام, بورسلان, السعودية, الرياض, جدة" },
      { name: "author", content: "Alarrab Almomaiaza Trading - شركة العراب المميزة للتجارة" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "شركة العراب المميزة للتجارة | Alarrab Trading" },
      { property: "og:description", content: "شركة العراب المميزة للتجارة (Alarrab Trading) — سيراميك، بورسلان، ورخام في السعودية بخبرة تتجاوز 35 عاماً." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "شركة العراب المميزة للتجارة" },
      { property: "og:url", content: "https://arabian-hearth-craft.lovable.app/" },
      { property: "og:image", content: "/alarrab/logo.jpeg" },
      { property: "og:locale", content: "ar_SA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "شركة العراب المميزة للتجارة | Alarrab Trading" },
      { name: "twitter:description", content: "شركة العراب المميزة للتجارة (Alarrab Trading) — سيراميك، بورسلان، ورخام في السعودية." },
      { name: "twitter:image", content: "/alarrab/logo.jpeg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/alarrab/logo.jpeg" },
      { rel: "canonical", href: "https://arabian-hearth-craft.lovable.app/" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "شركة العراب المميزة للتجارة",
        alternateName: ["Alarrab Trading", "alarrabtrading", "Alarrab Almomaiaza Trading", "العراب المميزة للتجارة"],
        url: "https://arabian-hearth-craft.lovable.app/",
        logo: "https://arabian-hearth-craft.lovable.app/alarrab/logo.jpeg",
        description: "شركة العراب المميزة للتجارة - سيراميك، بورسلان، ورخام في المملكة العربية السعودية بخبرة تتجاوز 35 عاماً.",
        address: { "@type": "PostalAddress", addressCountry: "SA" },
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
