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
