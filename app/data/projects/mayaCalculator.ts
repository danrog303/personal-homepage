import decimalToMayaImage from '../../assets/projects/maya-calculator/desktop-decimal-to-maya-2026.webp';
import mayaToDecimalImage from '../../assets/projects/maya-calculator/desktop-maya-to-decimal-keypad.webp';
import largestNumberImage from '../../assets/projects/maya-calculator/desktop-largest-number.webp';
import digitChartImage from '../../assets/projects/maya-calculator/desktop-digit-chart.webp';
import examplesTableImage from '../../assets/projects/maya-calculator/desktop-examples-table.webp';
import howToImage from '../../assets/projects/maya-calculator/desktop-how-to-worked-example.webp';
import mobileDecimalToMayaImage from '../../assets/projects/maya-calculator/mobile-decimal-to-maya-2026.webp';
import mobileKeypadImage from '../../assets/projects/maya-calculator/mobile-maya-to-decimal-keypad.webp';
import { ProjectDetails } from './types';

export const mayaCalculatorDetails: ProjectDetails = {
    intro: [
        "Maya Calculator (published as \"Maya Numeral Converter\") is a free educational web tool that converts numbers between the decimal system and the numeral system of the ancient Maya civilization of Mesoamerica, in both directions. You can type an ordinary number and see it drawn the way a Maya scribe would have written it, as a vertical stack of dots, bars and shells, or build a Maya numeral glyph by glyph and read its decimal value. Every result comes with the working behind it: the place value of each level and how they add up to the total.",
        "Around the converter, the page is a compact guide to the Maya number system: a chart of all twenty digits, a table of example numbers, step-by-step instructions for converting in both directions, an explanation of how the system works and answers to frequently asked questions. It is meant both as a quick tool and as a small, self-contained lesson for students, teachers and anyone curious about the history of mathematics.",
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
            heading: "History of the project",
            paragraphs: [
                "The converter started in November 2021 as a small static page written in plain HTML, CSS and JavaScript, hosted on GitHub Pages and available in Polish and English. In August 2025 it was rewritten in React with Material UI, and in February 2026 it received a manuscript-inspired visual redesign together with SEO improvements and a FAQ section. All of these versions worked in one direction only: you typed a number, pressed a \"Reveal in Maya\" button and saw the result.",
                "In November 2026 the project was rebuilt from the ground up, with the goal of turning it from a simple demonstration into a tool that explains what it does. The new version converts in both directions and updates the result live as you type, shows the full place-value breakdown of every conversion, lets you copy and share results, and comes with much richer learning material. Under the hood, Material UI, Emotion and the web fonts were removed in favor of a hand-written stylesheet and SVG glyphs, which made the page lighter and gave full control over how the numerals are drawn.",
            ],
        },
        {
            heading: "Features",
            subsections: [
                {
                    heading: "Decimal to Maya, live as you type",
                    paragraphs: [
                        "The \"Decimal to Maya\" tab has a single number field, and the result appears next to it as soon as you type; there is no button to press. The input is forgiving: digit-group separators such as spaces, commas, underscores and apostrophes are ignored, so \"1,000,000\" and \"1 000 000\" both work, and anything that is not a whole number produces a clear message below the field. A row of example chips (7, 20, 365, 2026 and 8000) fills in a number with one click.",
                        "Next to the stacked numeral, a table shows the working: one row for each level, from the top down, with its power of twenty, its place value, the digit drawn as a glyph and the value it contributes, followed by the total. Hovering over a level of the numeral highlights the matching row in the table, and the other way round, which makes it easy to see which glyph stands for which part of the number.",
                    ],
                    images: [
                        { src: decimalToMayaImage, alt: "The number 2026 converted into three stacked Maya glyphs with a place-value table next to them", caption: "2026 in Maya numerals, with the value of every level: 5 × 400 + 1 × 20 + 6 × 1.", width: 1280, height: 800, variant: 'wide' },
                    ],
                },
                {
                    heading: "Maya to decimal with a glyph keypad",
                    paragraphs: [
                        "The \"Maya to Decimal\" tab works the other way round. Instead of a text field, it has a keypad with all twenty Maya digits, each drawn as a glyph with its value underneath. Every tap adds a new level below the previous one, so a numeral is built from the top down, exactly the way it is read. Buttons remove the last level or clear the whole numeral, and the decimal value with its place-value breakdown is shown alongside. When the field is empty, a \"Try 18 over 5\" shortcut builds 365, the length of the Haab' solar year, as a first example.",
                        "Switching between the tabs carries the current number across: a number converted to Maya numerals appears on the keypad, and a numeral built on the keypad appears as a decimal number, so any result can be checked the other way round.",
                    ],
                    images: [
                        { src: mayaToDecimalImage, alt: "The glyph keypad with twenty Maya digits and the numeral 18 over 5 converted to 365", caption: "Building a numeral on the keypad: 18 × 20 + 5 × 1 = 365.", width: 1280, height: 800, variant: 'wide' },
                    ],
                },
                {
                    heading: "From 0 to nine quadrillion",
                    paragraphs: [
                        "Any whole number from 0 up to 9,007,199,254,740,991 can be converted. This is the largest integer a web browser can represent exactly, and in Maya numerals it takes thirteen levels. Larger values are rejected with a message instead of being silently rounded, and the keypad refuses to add a level that would go past the limit.",
                        "Tall results get their own layout: the glyphs are drawn smaller as the number of levels grows, and from six levels up the numeral is placed above the breakdown table instead of beside it, so that even the largest numbers fit on the screen. On narrow screens, very long place values wrap evenly onto two lines.",
                    ],
                    images: [
                        { src: largestNumberImage, alt: "A thirteen-level Maya numeral above its place-value table", caption: "The largest supported number, 9,007,199,254,740,991, needs thirteen levels.", width: 1280, height: 800, variant: 'wide' },
                    ],
                },
                {
                    heading: "Copy and share",
                    paragraphs: [
                        "Each result has two copy buttons. \"Copy numeral\" copies the Maya numeral as real text, using the Unicode characters from the Mayan Numerals block (U+1D2E0 to U+1D2F3), one level per line, so it can be pasted into any document or chat that has a font supporting them. \"Copy link\" copies a link that opens the converter with the same result, such as ?n=365 for a decimal number or ?maya=18.5 for a numeral built on the keypad. The address in the browser is also kept up to date while you type, so the current page can be bookmarked or shared directly.",
                    ],
                },
                {
                    heading: "Chart, examples and guides",
                    paragraphs: [
                        "Below the converter, the \"Maya numerals chart\" shows all twenty digits from 0 to 19, each with its glyph, its value and a short description of how it is built, for example \"3 bars, 4 dots\" for 19.",
                        "A table of numbers above 19 shows how the levels work in practice. It lists ten values, from 20 to 8000, with their numerals, base-20 digits and the full calculation, and notes the interesting ones: the first numbers that need two, three and four levels, 360, the length of a tun in the Long Count calendar, and 365, the number of days in the Haab' calendar.",
                    ],
                    images: [
                        { src: digitChartImage, alt: "A grid of the twenty Maya digits from 0 to 19 with their descriptions", caption: "The chart of all twenty Maya digits.", width: 1280, height: 800, variant: 'wide' },
                        { src: examplesTableImage, alt: "A table of decimal numbers from 20 upwards with their Maya numerals and calculations", caption: "Example numbers with their base-20 digits and calculations.", width: 1280, height: 800, variant: 'wide' },
                    ],
                },
                {
                    heading: "Learning how to convert by hand",
                    paragraphs: [
                        "Two short guides explain how to do the conversion without the tool. The first shows the repeated division method for changing a decimal number into Maya numerals, with a worked example for 2026 laid out as a table of divisions, quotients and remainders. The second explains the reverse: reading each level, giving it its place value and adding the results.",
                        "An article on how the Maya number system works covers base 20, the role of zero and a comparison with Roman numerals: 1999 needs seven symbols and subtraction rules as MCMXCIX, but only three levels in Maya numerals. The frequently asked questions answer common doubts, such as whether the Maya really invented zero, whether the stack is read from the top or the bottom, why Maya calendar dates use 360 instead of 400, and how the abstract dot and bar forms compare with the decorative head glyphs carved on monuments. A sources section links to the materials used to prepare the content.",
                    ],
                    images: [
                        { src: howToImage, alt: "Step-by-step instructions for converting 2026 into Maya numerals by repeated division", caption: "The worked example for converting 2026 by hand.", width: 1280, height: 800, variant: 'wide' },
                    ],
                },
                {
                    heading: "Comfortable on phones",
                    paragraphs: [
                        "On narrow screens the input and the result are placed one above the other, the navigation moves to a row under the header, and the example chips form a single row that can be scrolled sideways. The glyph keypad keeps all twenty digits in a compact five-column grid, and the breakdown table drops its small glyphs, which are already visible in the numeral beside it, so that long numbers still fit. A custom 404 page keeps the theme: it writes \"404\" itself in Maya numerals.",
                    ],
                    images: [
                        { src: mobileDecimalToMayaImage, alt: "The converter on a phone screen after converting 2026", caption: "Decimal to Maya on a phone.", width: 412, height: 915, variant: 'narrow' },
                        { src: mobileKeypadImage, alt: "The glyph keypad on a phone screen with the numeral 18 over 5", caption: "The glyph keypad on a phone.", width: 412, height: 915, variant: 'narrow' },
                    ],
                },
            ],
        },
        {
            heading: "How to use it",
            ordered: true,
            list: [
                "Open mayacalc.danielrogowski.net in any modern browser; nothing needs to be installed.",
                "To convert a decimal number, stay on the \"Decimal to Maya\" tab and type a whole number greater than or equal to zero, for example 2026, or click one of the examples. The result appears immediately.",
                "Read the stack from top to bottom: the top glyph is the highest power of twenty and the bottom glyph is the units. The table next to it shows the place value of each level and how the levels add up to the original number.",
                "To read a Maya numeral, switch to the \"Maya to Decimal\" tab and tap its digits on the keypad, starting from the top level. The decimal value is updated after every tap.",
                "Use \"Copy numeral\" to copy the result as Unicode text, or \"Copy link\" to share the conversion with someone else.",
            ],
        },
        {
            heading: "Design",
            paragraphs: [
                "The rebuilt interface is designed as a clean, focused tool rather than a decorative page: a cool neutral background, white panels, and a deep jade green used for the header, the active tab and the main actions. Text uses the system font stack of each device, so no web fonts have to be downloaded. The logo, also used as the favicon, is the Maya numeral 8, three dots over a bar, drawn in a rounded tile.",
                "Accessibility was treated as part of the design. The tabs follow the ARIA tabs pattern and can be switched with the arrow keys, each numeral is announced to screen readers as a single image labelled with its decimal value and digits, every keypad button describes its glyph (for example \"Add 7 (1 bar, 2 dots)\"), new results are announced through a live region, and the page has a skip link and respects the reduced motion setting.",
            ],
        },
        {
            heading: "Under the hood",
            paragraphs: [
                "The application is written in TypeScript with React 19 and built with Vite and React Router in framework mode, with server-side rendering disabled and all pages pre-rendered to static HTML. It no longer uses a component library: the whole interface is styled by a single hand-written CSS file built on custom properties, and the runtime dependencies are limited to React, React Router and its small helper packages. The few icons are inline SVG components as well.",
                "The numerals on the page are not images or font characters but small SVG drawings generated from the value of each digit: the number of bars is the digit divided by five, the number of dots is the remainder, and zero is drawn as a shell. The drawings are sized relative to the surrounding text, so the same component is used for the large result, the keypad, the chart and the small glyphs inside tables. Unicode characters are used only for copied text.",
                "The conversion itself is the classic algorithm for changing the base of a number: the value is repeatedly divided by 20, and the remainders, read in reverse order, become the Maya digits. The reverse direction multiplies the running total by 20 and adds the next digit, level by level.",
                "Each page builds its own complete set of meta tags, with a canonical address for indexed pages and Open Graph and Twitter cards with a dedicated preview image. Structured data (JSON-LD) describes the website, the application and the FAQ, and it is generated from the same data as the visible FAQ section, so the two never drift apart. A sitemap and a static 404 page are generated after each build. Google Analytics is loaded only after the visitor accepts it in the cookie banner, which itself is loaded lazily, and the choice can be changed at any time from the footer.",
                "The site is built by a GitHub Actions workflow on every push and pull request and deployed to Cloudflare Pages from the main branch, with strict security headers such as a Content Security Policy. Renovate keeps the dependencies up to date and merges updates automatically once the build passes.",
            ],
        },
    ],
};
