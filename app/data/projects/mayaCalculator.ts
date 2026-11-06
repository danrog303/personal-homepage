import heroImage from '../../assets/projects/maya-calculator/desktop-landing-hero.webp';
import convertedImage from '../../assets/projects/maya-calculator/desktop-2026-converted.webp';
import codexImage from '../../assets/projects/maya-calculator/desktop-glyph-reference-codex.webp';
import examplesImage from '../../assets/projects/maya-calculator/desktop-worked-examples.webp';
import mobileImage from '../../assets/projects/maya-calculator/mobile-2026-converted.webp';
import { ProjectDetails } from './types';

export const mayaCalculatorDetails: ProjectDetails = {
    intro: [
        "Maya Calculator (published as \"Maya Numeral Converter\") is a free educational web tool that converts ordinary decimal numbers into the numeral system used by the ancient Maya civilization of Mesoamerica. You type a whole number, press a button, and the page draws the same value the way a Maya scribe would have written it: as a vertical stack of dots, bars and shell symbols.",
        "The converter is surrounded by a compact guide to the Maya number system, with a reference table of all twenty digits, an explanation of how positional base-20 notation works, worked examples and answers to frequently asked questions. It is meant both as a quick tool and as a small, self-contained lesson for students, teachers and anyone curious about the history of mathematics.",
    ],
    sections: [
        {
            heading: "A short introduction to Maya numerals",
            paragraphs: [
                "The Maya counted in base 20 (a vigesimal system) rather than in base 10. Every number from 0 to 19 is written with only three symbols: a dot, which is worth one, a horizontal bar, which is worth five, and a shell, which stands for zero. The numbers 1 to 4 are rows of dots, 5 is a single bar, and larger digits combine up to three bars with up to four dots above them, so 19, the highest single digit, is three bars topped by four dots.",
                "Larger numbers are written positionally, just like our own, except that the positions are stacked vertically and each level is worth twenty times more than the one below it: units at the bottom, then twenties, then four hundreds (20 × 20), then eight thousands, and so on. Because the Maya had a symbol for zero, they could leave a position empty, which makes their notation a true positional system. They were one of very few civilizations to invent the concept of zero independently.",
                "As an example, the year 2026 is written as three levels: a bar (5) at the top, worth 5 × 400 = 2000; a single dot (1) in the middle, worth 1 × 20 = 20; and a bar with one dot (6) at the bottom, worth 6. Together they give 2000 + 20 + 6 = 2026.",
            ],
        },
        {
            heading: "Features",
            subsections: [
                {
                    heading: "Decimal to Maya conversion",
                    paragraphs: [
                        "The main panel contains a single \"Decimal Number\" field and a \"Reveal in Maya\" button (pressing Enter works too). The result appears next to the input as a stack of glyphs, with labels marking the highest-order position at the top and the units at the bottom, and a badge below showing how many base-20 digits the number has. Until a number is entered, the result panel shows a faint shell symbol and the text \"Awaiting your number\".",
                        "Any non-negative whole number can be converted, up to 9,007,199,254,740,991 (the largest integer a web browser can represent exactly). Fractions are rounded down to the nearest whole number, because the Maya system has no notation for fractions.",
                    ],
                    images: [
                        { src: convertedImage, alt: "The number 2026 converted into three stacked Maya glyphs", caption: "2026 in Maya numerals: 5 × 400 + 1 × 20 + 6.", width: 1280, height: 800, variant: 'wide' },
                    ],
                },
                {
                    heading: "Reference table of all twenty digits",
                    paragraphs: [
                        "The \"Complete Vigesimal Codex\" section lists every Maya digit from 0 to 19 together with its decimal value, so you can check each level of a converted number or simply learn how the digits are built from dots and bars. The grid adapts its number of columns to the width of the screen.",
                    ],
                    images: [
                        { src: codexImage, alt: "A grid of the twenty Maya digits from 0 to 19", caption: "All twenty Maya digits and the beginning of the explanation of the number system.", width: 1280, height: 800, variant: 'wide' },
                    ],
                },
                {
                    heading: "Explanations, examples and FAQ",
                    paragraphs: [
                        "Below the converter, an article explains the base-20 positional system, the meaning of the dot, bar and shell symbols, the role of zero and how the Maya approach compares with other ancient notations. A \"How to Read Maya Numerals\" section walks through three worked examples: 7, 20 (the first number that needs two levels) and 365, the length of the haab solar year, each drawn with real glyphs and the matching calculation.",
                        "A frequently asked questions section answers common doubts, such as which base the system uses, how many symbols it needs, whether the Maya really invented zero, what the largest supported number is and whether the stack is read from the top or the bottom. A sources section links to the materials used to prepare the content.",
                    ],
                    images: [
                        { src: examplesImage, alt: "Worked examples showing 7, 20 and 365 in Maya numerals", caption: "Worked examples explain how to read multi-level numbers.", width: 1280, height: 800, variant: 'wide' },
                    ],
                },
                {
                    heading: "Comfortable on phones",
                    paragraphs: [
                        "On narrow screens the input and result panels are placed one above the other, and after a conversion the page scrolls smoothly to the result so that it is immediately visible. A custom 404 page keeps the theme: it writes \"404\" itself in Maya numerals.",
                    ],
                    images: [
                        { src: mobileImage, alt: "The converter on a phone screen after converting 2026", caption: "The mobile layout after converting 2026.", width: 412, height: 915, variant: 'narrow' },
                    ],
                },
            ],
        },
        {
            heading: "How to use it",
            ordered: true,
            list: [
                "Open mayacalc.danielrogowski.net in any modern browser; nothing needs to be installed.",
                "Type a whole number greater than or equal to zero into the \"Decimal Number\" field, for example 2026.",
                "Click \"Reveal in Maya\" or press Enter.",
                "Read the stack from top to bottom: the top glyph is the highest power of twenty and the bottom glyph is the units. Multiply each level by its place value (1, 20, 400, 8000, ...) and add the results to get back the original number.",
                "If you are not sure what a glyph means, compare it with the reference table of the twenty digits further down the page.",
            ],
        },
        {
            heading: "Design",
            paragraphs: [
                "The visual style is inspired by old manuscripts and Mesoamerican architecture: a warm parchment background, terracotta and gold accents, classic serif typefaces and decorative dividers shaped like stepped pyramids. A large, faint shell symbol sits behind the main heading as a reminder of the Maya's most famous invention.",
            ],
            images: [
                { src: heroImage, alt: "The top of the Maya Numeral Converter page", caption: "The landing section of the converter.", width: 1280, height: 800, variant: 'wide' },
            ],
        },
        {
            heading: "Under the hood",
            paragraphs: [
                "The application is written in TypeScript with React and uses Material UI components styled with a custom theme. It is built with Vite and React Router in framework mode, with server-side rendering disabled and all pages pre-rendered to static HTML. The numerals are not images: each digit is a real Unicode character from the Mayan Numerals block (U+1D2E0 to U+1D2F3), displayed with Google's Noto Sans Symbols 2 font, which makes them sharp at any size and accessible to screen readers and search engines.",
                "The conversion itself is the classic algorithm for changing the base of a number: the value is repeatedly divided by 20, and the remainders, read in reverse order, become the Maya digits. Each digit is then mapped to its Unicode code point.",
                "The pages include structured data (JSON-LD) describing the application and the FAQ, a generated sitemap, Open Graph tags and a cookie consent banner: Google Analytics is loaded only after the visitor agrees to it. The site is deployed to Cloudflare Pages by a GitHub Actions workflow on every change to the main branch, with strict security headers such as a Content Security Policy, and Renovate keeps the dependencies up to date.",
            ],
        },
    ],
};
