export type LinkType = 'github' | 'browser' | 'chrome' | 'playstore' | 'download';

export interface ProjectLink {
    type: LinkType;
    url: string;
    text: string;
}

export interface ProjectPortfolioItem {
    name: string;
    slug?: string;
    description: string;
    tags?: string[];
    links: ProjectLink[];
    fullDescription?: string;
    features?: string[];
}

export const projectPortfolioItems: ProjectPortfolioItem[] = [
    {
        name: "This homepage",
        slug: "personal-homepage",
        description: "The page you are currently looking at!",
        tags: ["react", "cloudflare", "typescript", "scss"],
        links: [
            { type: 'browser', url: "https://danielrogowski.net/", text: "View live" },
            { type: 'github', url: "https://github.com/danrog303/personal-homepage", text: "GitHub repo" }
        ],
        fullDescription: "A personal portfolio website built with React Router v7 (framework mode) + TypeScript, deployed to Cloudflare Pages via GitHub Actions CI/CD. Uses SCSS Modules for theming and React Router's built-in pre-rendering for all routes.",
        features: [
            "Single-page scrollable design with anchor-linked sections",
            "Static pre-rendering via React Router v7 framework mode for fast initial load",
            "GitHub Actions CI/CD pipeline deploying to Cloudflare Pages",
            "SCSS Modules theming with a consistent design language",
            "Project detail subpages at /projects/:slug"
        ]
    },
    {
        name: "Luzak",
        slug: "luzak",
        description: "AI-powered browser extension for Testportal and Moodle quizzes.",
        tags: ["browser extension", "ai", "testportal", "moodle"],
        links: [
            { type: 'browser', url: "https://luzak.top/", text: "Project website" },
            { type: 'chrome', url: "https://chromewebstore.google.com/detail/fefmjekdgmjjilpbcoanmnegmakjpcom", text: "Chrome Web Store" }
        ],
        fullDescription: "A Chrome extension that provides AI assistance for quizzes on Testportal and Moodle, where AI assistance is allowed.",
        features: [
            "Automatic answers and text-based AI hints",
            "Support for Testportal and Moodle",
            "Configurable button visibility",
            "Additional context from text and uploaded notes"
        ]
    },
    {
        name: "Cardmarket Currency Converter",
        slug: "cm-currency-converter",
        description: "Browser extension for converting Cardmarket prices to your chosen currency.",
        tags: ["typescript", "plasmo", "browser extension", "aws"],
        links: [
            { type: 'chrome', url: "https://chromewebstore.google.com/detail/cardmarket-currency-conve/canfideoigpoaajnmkamhnicogbealop", text: "Chrome Web Store" },
            { type: 'github', url: "https://github.com/danrog303/cm-currency-converter", text: "GitHub repo" }
        ],
        fullDescription: "A Chrome extension that converts Cardmarket item prices into a chosen currency. Built with Plasmo and backed by an AWS Lambda API that retrieves exchange rates and caches them in DynamoDB.",
        features: [
            "Automatic price conversion on Cardmarket pages",
            "Configurable target currency and display symbol",
            "Currency preferences synced through Chrome storage",
            "Exchange-rate caching with AWS Lambda and DynamoDB"
        ]
    },
    {
        name: "Deru Party Games",
        slug: "deru-party-games",
        description: "Android game for playing party games with friends.",
        tags: ["react native", "expo", "android", "admob"],
        links: [
            { type: 'browser', url: "https://derupartygames.danielrogowski.net/", text: "Project website" },
            { type: 'playstore', url: "https://play.google.com/store/apps/details?id=com.github.danrog303.partygames.free", text: "Android Play Store" },
            { type: 'github', url: "https://github.com/danrog303/party-games", text: "GitHub repo" }
        ],
        fullDescription: "An Android app for playing party games with friends. Built with React Native and Expo for cross-platform mobile development, monetized via Google AdMob. Source code is in a private GitHub repository.",
        features: [
            "Multiple party game modes",
            "AdMob monetized",
            "Cross-platform mobile build via React Native and Expo"
        ]
    },
    {
        name: "Maya Calculator",
        slug: "maya-calculator",
        description: "Calculator for converting between arabic and mayan numerical system.",
        tags: ["html", "css", "javascript"],
        links: [
            { type: 'browser', url: "https://mayacalc.danielrogowski.net/", text: "View live" },
            { type: 'github', url: "https://github.com/danrog303/mayan-calculator", text: "GitHub repo" }
        ],
        fullDescription: "A responsive web tool for converting decimal numbers to the ancient Maya numeral system. Built with React + TypeScript and Material-UI for a clean, modern interface.",
        features: [
            "Decimal to Maya numeral system conversion",
            "Responsive Material Design UI",
            "Live demo at mayacalc.danielrogowski.net"
        ]
    },
    {
        name: "Other projects",
        description: "Check out my other projects on my GitHub profile.",
        links: [
            { type: 'github', url: "https://github.com/danrog303", text: "GitHub profile" }
        ]
    }
];
