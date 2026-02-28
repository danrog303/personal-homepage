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
        fullDescription: "A personal portfolio website built as a React + TypeScript SPA, deployed to Cloudflare Pages via GitHub Actions CI/CD. Uses SCSS Modules for theming and react-snap for static pre-rendering of all routes.",
        features: [
            "Single-page scrollable design with anchor-linked sections",
            "Static pre-rendering via react-snap for fast initial load",
            "GitHub Actions CI/CD pipeline deploying to Cloudflare Pages",
            "SCSS Modules theming with a consistent design language",
            "Project detail subpages at /projects/:slug"
        ]
    },
    {
        name: "TestPortal GPT",
        slug: "testportal-gpt",
        description: "AI-powered browser plugin for automatic test solving.",
        tags: ["plasmo", "react", "browser extension", "openai"],
        links: [
            { type: 'chrome', url: "https://chromewebstore.google.com/detail/testportal-gpt/cfebdnpaooilklaiemggkhnbakafohel", text: "Download" },
            { type: 'github', url: "https://github.com/danrog303/testportal-gpt", text: "GitHub repo" }
        ],
        fullDescription: "A browser extension that uses OpenAI's ChatGPT API to auto-solve questions on TestPortal.net. Built with the Plasmo cross-browser framework. Supports open, single-choice, multi-choice, and image-based questions.",
        features: [
            "Auto-solve button injected into TestPortal pages",
            "GPT-4o / GPT-3.5-turbo model support",
            "Multi-type question support (open, single, multiple choice, images)",
            "Stealth mode and configurable OpenAI context",
            "Anti-TestPortal \"honest respondent\" bypass"
        ]
    },
    {
        name: "Deru Party Games",
        slug: "deru-party-games",
        description: "Android game for playing party games with friends.",
        tags: ["react native", "expo", "android", "admob"],
        links: [
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
        name: "Ebook Wizard",
        slug: "ebook-wizard",
        description: "My engineering thesis! Network drive for e-book creation and management.",
        tags: ["java", "spring boot", "aws", "mongodb", "angular"],
        links: [
            { type: 'github', url: "https://github.com/danrog303/ebook-wizard", text: "GitHub repo" }
        ],
        fullDescription: "Engineering thesis project. A cloud drive for e-books — upload, convert between formats, edit metadata, read online, and share with other users. Includes an interactive online ebook editor.",
        features: [
            "Multi-format conversion (epub, mobi, azw3, html, pdf, docx, txt) via Pandoc/Calibre",
            "Online ebook editor and viewer",
            "Metadata editing and e-book sharing between users",
            "AWS-native architecture (S3, SQS, SES, Cognito)",
            "Angular Material frontend secured with OAuth2"
        ]
    },
    {
        name: "Shelfspace",
        slug: "shelfspace",
        description: "Website for tracking games and movies on your shelves.",
        tags: ["aws", "dynamodb", "java", "spring boot"],
        links: [
            { type: 'browser', url: "https://shelfspace.danielrogowski.net", text: "View live" },
            { type: 'github', url: "https://github.com/danrog303/shelfspace-api", text: "GitHub repo" }
        ],
        fullDescription: "A serverless web application for tracking games, movies, and books on virtual shelves. Users organize their collection, assign statuses and ratings, and manage everything through a REST API backed by AWS Lambda and DynamoDB.",
        features: [
            "Shelves for games, movies, and books",
            "Status and rating labels for collection items",
            "Serverless AWS Lambda runtime with DynamoDB storage",
            "Amazon Cognito authentication",
            "Swagger API documentation"
        ]
    },
    {
        name: "Poketch",
        slug: "poketch",
        description: "Pokemon game tracking application.",
        tags: ["spring boot", "java", "mysql", "docker"],
        links: [
            { type: 'github', url: "https://github.com/danrog303/poketch", text: "GitHub repo" }
        ],
        fullDescription: "A Spring Boot web application for tracking Living Pokédex progress. Helps Pokémon fans record which Pokémon they own across game titles, calculate PC box positions, and view collection statistics.",
        features: [
            "Living Pokédex tracker across multiple game titles",
            "PC Box position calculator",
            "Collection statistics page",
            "Multi-user authentication with email confirmation flow",
            "ReCAPTCHA protection and Docker Compose setup"
        ]
    },
    {
        name: "Epubify",
        slug: "epubify",
        description: "Java library for creating e-book files, used in Ebook Wizard.",
        tags: ["java", "epub", "ebook"],
        links: [
            { type: 'download', url: "https://github.com/danrog303/epubify/packages/2203789", text: "Download" },
            { type: 'github', url: "https://github.com/danrog303/epubify", text: "GitHub repo" }
        ],
        fullDescription: "A Java library (distributed via GitHub Packages) for programmatically generating EPUB files. Built as a foundation for the Ebook Wizard project. Provides a clean, modular API for writing metadata, chapters, images, and cover art.",
        features: [
            "Metadata support (title, author, description)",
            "Cover image from file or URL",
            "Multi-chapter support with auto-generated table of contents",
            "Embedded images within chapters",
            "Configurable paragraph formatting (indents and spacing)"
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
