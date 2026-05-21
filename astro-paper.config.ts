import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://olandiamo-blog.pages.dev/",
    title: "Olandiamo Blog",
    description: "Guide pratiche, risorse e storie per italiani nei Paesi Bassi.",
    author: "Olandiamo",
    profile: "https://www.instagram.com/olandiamo",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/Amsterdam",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "instagram", url: "https://www.instagram.com/olandiamo" },
    { name: "mail", url: "mailto:info@olandiamo.nl" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=Guarda%20questo%20articolo&body=" },
  ],
});