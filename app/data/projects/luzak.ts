import quizButtonsImage from '../../assets/projects/luzak/quiz-buttons.webp';
import savedContextImage from '../../assets/projects/luzak/popup-saved-context.webp';
import websiteImage from '../../assets/projects/luzak/website-workflow-pricing.webp';
import { ProjectDetails } from './types';

export const luzakDetails: ProjectDetails = {
    intro: [
        "Luzak is a Chrome extension and online service that brings an AI assistant directly into quizzes on Testportal and Moodle, two platforms widely used by Polish schools, universities and companies for online tests. Instead of copying a question into a separate chatbot, the user gets two buttons right next to the question: one that proposes an answer and one that opens a detailed, step-by-step explanation of the problem.",
        "The project is intended for situations where using AI is permitted, such as practice tests, self-study quizzes, training courses and open-book assignments. Both the website and the terms of use state clearly that Luzak must not be used to break the rules of a test or exam, and the project is not affiliated with Testportal or Moodle.",
    ],
    sections: [
        {
            heading: "From a side project to a service",
            paragraphs: [
                "Luzak is the successor of my earlier open-source extension, testportal-gpt. It started in February 2024 as a small userscript, became a Chrome Web Store extension in 2025 and gradually gained support for Moodle, images, file context, Microsoft Teams and the Polish language. The main limitation of that version was that every user had to create and paste their own API key from an AI provider, which was a serious barrier for non-technical students.",
                "Luzak removes that barrier. It is a complete service with user accounts, a hosted backend and simple prepaid credits: you sign in with Google or Facebook, choose a model and start working, without any API keys or configuration.",
            ],
        },
        {
            heading: "Features",
            subsections: [
                {
                    heading: "Two buttons inside the quiz",
                    paragraphs: [
                        "When a supported quiz page is opened, Luzak adds its buttons to the page. On Testportal they appear next to the navigation buttons of the current question; on Moodle, which can show several questions on one page, a separate pair is added under each question.",
                    ],
                    list: [
                        { term: "AI Help", text: "opens a window titled \"AI Explanation & Reasoning\" and streams the answer as it is being written. For closed questions the explanation contains the suggested answer, a step-by-step reasoning and an analysis of every option; for open questions it contains a recommended answer with its justification. The response can be stopped, regenerated or closed at any time, and its headings are written in the language of the question." },
                        { term: "Auto-solve question", text: "asks the AI for an answer and fills it in: for open questions the text is typed into the answer field, and for single and multiple choice questions the proposed options are selected. The user can still review and change everything before moving on." },
                    ],
                    images: [
                        { src: quizButtonsImage, alt: "A quiz question with the Auto-solve question and AI Help buttons added by Luzak", caption: "Luzak's buttons next to a question that includes a photograph.", width: 1420, height: 1018, variant: 'wide' },
                    ],
                },
                {
                    heading: "Supported platforms and question types",
                    paragraphs: [
                        "On Testportal, Luzak handles open questions (both short answers and long answers written in the rich text editor), single choice and multiple choice questions, including tests opened inside Microsoft Teams. On Moodle, it supports essay, short answer, multiple choice, true/false and numerical questions. Because Moodle is installed separately by every school, the extension recognizes a Moodle quiz by the structure of the page rather than by its address, so it works with any Moodle installation.",
                        "Questions often contain pictures, such as charts, diagrams or photographs, and answer options can be images too. Luzak downloads them and sends them to the AI together with the text, so that visual questions can be analyzed as well.",
                    ],
                },
                {
                    heading: "Three AI models",
                    paragraphs: [
                        "The popup lets the user choose how much reasoning power to use, with the cost of each answer shown next to the model:",
                    ],
                    list: [
                        { term: "Luna", text: "fast answers for everyday questions (1 credit per answer)." },
                        { term: "Sol", text: "more deliberate reasoning for difficult questions (4 credits)." },
                        { term: "Astra", text: "the highest quality option for complex tasks (8 credits)." },
                    ],
                },
                {
                    heading: "Your own notes as context",
                    paragraphs: [
                        "The \"Saved context\" section lets users give the AI additional knowledge, which is especially useful for course-specific material. A text field holds notes or instructions that are added to every question. In addition, up to five documents (PDF, Word, PowerPoint, plain text, Markdown, HTML, LaTeX or JSON, up to 25 MB each) can be uploaded, for example lecture notes or a textbook chapter. The more advanced models search these files and base their answers on them. The saved context is stored with the account, so it is available on every computer the user signs in on, and uploaded files are deleted automatically after 14 days.",
                    ],
                    images: [
                        { src: savedContextImage, alt: "The Saved context section of the Luzak popup", caption: "The \"Saved context\" section of the extension popup.", width: 744, height: 686, variant: 'narrow' },
                    ],
                },
                {
                    heading: "Simple credits instead of subscriptions",
                    paragraphs: [
                        "Luzak uses one-off credit packs rather than a monthly subscription, so users pay only for what they actually use. Packs range from 50 to 1000 credits and are paid securely through Stripe; prices are shown in Polish złoty or US dollars depending on the selected language. If an AI request fails for any reason, the reserved credits are returned automatically.",
                    ],
                },
                {
                    heading: "Two languages",
                    paragraphs: [
                        "Both the extension and the luzak.top website are available in English and Polish. The extension picks the language of the browser by default, and it can be changed in the popup.",
                    ],
                },
            ],
        },
        {
            heading: "How to use it",
            ordered: true,
            list: [
                "Install Luzak from the Chrome Web Store.",
                "Click the extension icon and sign in with a Google or Facebook account.",
                "Buy a credit pack in the \"Buy credits\" section. Payment is handled by Stripe in a new tab, and the credits appear in the account as soon as the payment is confirmed.",
                "Choose an AI model and, optionally, add your notes or documents in \"Saved context\".",
                "Open a Testportal or Moodle quiz where AI assistance is allowed. Click \"AI Help\" to read an explanation, or \"Auto-solve question\" to have a proposed answer filled in, and review it before submitting.",
            ],
            images: [
                { src: websiteImage, alt: "The luzak.top website with a three-step guide and credit pack prices", caption: "The project website explains the three steps and lists the credit packs.", width: 1280, height: 800, variant: 'wide' },
            ],
        },
        {
            heading: "Privacy",
            paragraphs: [
                "Luzak collects as little data as possible. Signing in with Google provides only the e-mail address, name and account identifier. Questions are sent to the AI provider only when the user clicks one of the buttons, and they are not kept as a conversation history. Card details are processed exclusively by Stripe, and uploaded documents are removed within 14 days. A detailed, GDPR-compliant privacy policy is published on the project website.",
            ],
        },
        {
            heading: "Under the hood",
            paragraphs: [
                "Luzak is a TypeScript monorepo with four parts: the extension, the backend, the website and a package of types shared between them. The extension is built with Plasmo and React as a Manifest V3 extension. Content scripts detect Testportal and Moodle quizzes and inject the buttons, while a background service worker handles signing in (OAuth with PKCE), refreshing tokens and downloading question images. Answers are streamed from the server with Server-Sent Events and rendered as Markdown in real time.",
                "The backend is a serverless application on Amazon Web Services defined in code with SST. Requests go through API Gateway with Amazon Cognito authorization to AWS Lambda functions; balances, request records and configuration are stored in DynamoDB, and uploaded documents in S3. AI answers are generated with the OpenAI Responses API, and user documents are indexed in a per-user vector store used for file search. Payments are handled by Stripe Checkout and webhooks. Credits are reserved before each request and refunded on failure, requests are idempotent and rate limited, and a scheduled function removes expired files every hour.",
                "The website is a React application pre-rendered to static HTML in both languages and served from S3 and CloudFront. The project is covered by an end-to-end test suite written with Playwright, which tests the API, the website and the real extension running in Chromium against local copies of Testportal and Moodle quiz pages.",
            ],
        },
    ],
};
