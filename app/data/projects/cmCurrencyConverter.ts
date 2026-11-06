import promoBanner from '../../assets/projects/cm-currency-converter/promo-banner.webp';
import popupDefault from '../../assets/projects/cm-currency-converter/popup-default-pln.webp';
import popupSaved from '../../assets/projects/cm-currency-converter/popup-usd-saved.webp';
import demoBefore from '../../assets/projects/cm-currency-converter/demo-mock-before-eur.webp';
import demoAfter from '../../assets/projects/cm-currency-converter/demo-mock-after-pln.webp';
import { ProjectDetails } from './types';

export const cmCurrencyConverterDetails: ProjectDetails = {
    intro: [
        "Cardmarket Currency Converter is a free Chrome extension that shows the prices on Cardmarket, Europe's largest marketplace for trading card games such as Magic: The Gathering, Pokémon and Yu-Gi-Oh!, in your own currency instead of euros. Once installed, it works silently in the background: you browse Cardmarket as usual and every euro price on the page is replaced with the equivalent amount in the currency you picked.",
        "I built it because I buy cards on Cardmarket while being paid in Polish złoty, and constantly multiplying prices in my head (or switching to a calculator) made comparing offers tedious. The extension removes that friction and works for buyers from many other European countries as well.",
    ],
    sections: [
        {
            heading: "The problem it solves",
            paragraphs: [
                "Cardmarket lists every price in euros. For collectors living outside the eurozone, such as in Poland, the Czech Republic, Hungary, Sweden, Denmark, Norway, Romania, Switzerland or the United Kingdom, this means that the real cost of a card is never visible at a glance. When you are comparing dozens of offers for the same card, checking the price trend or reviewing a shopping cart with many items, mental conversion quickly becomes error-prone.",
                "Cardmarket Currency Converter does the conversion for you, using a fresh exchange rate that is updated every day, and displays the result directly in the page so that you never have to leave the site.",
            ],
            images: [
                { src: promoBanner, alt: "Promotional banner: 10,00 € converted to 43,00 zł", caption: "The idea in one picture: euro prices become prices in your currency.", width: 1400, height: 560, variant: 'wide' },
            ],
        },
        {
            heading: "Features",
            subsections: [
                {
                    heading: "Automatic conversion on every Cardmarket page",
                    paragraphs: [
                        "The extension scans the whole page for amounts written in the Cardmarket format, such as \"12,90 €\", and rewrites each of them in the chosen currency, for example \"56,70 zł\". Because it does not depend on the layout of any particular page, it covers offer lists, price trends and averages, product pages and the shopping cart alike.",
                        "Cardmarket loads a lot of content dynamically, for instance when you load more offers or change filters. The extension watches the page for such changes and converts newly added prices as soon as they appear, so you never end up with a mix of euros and your own currency.",
                    ],
                },
                {
                    heading: "11 currencies to choose from",
                    paragraphs: [
                        "The target currency is picked from a list of the currencies most useful for European collectors. Each one is shown under its own native name:",
                    ],
                    list: [
                        "Złoty polski (PLN) - the default",
                        "US Dollar (USD)",
                        "Euro (EUR)",
                        "British Pound (GBP)",
                        "Schweizer Franken (CHF)",
                        "Česká koruna (CZK)",
                        "Magyar forint (HUF)",
                        "Svensk krona (SEK)",
                        "Norske kroner (NOK)",
                        "Dansk krone (DKK)",
                        "Leu românesc (RON)",
                    ],
                },
                {
                    heading: "Custom display symbol",
                    paragraphs: [
                        "Next to the currency you can set the symbol that is printed after converted amounts. Choosing a currency fills in its usual symbol automatically (zł, $, £, Kč, Ft, kr, lei and so on), but you can replace it with anything up to four characters long, for example \"PLN\" instead of \"zł\" if you prefer currency codes.",
                    ],
                },
                {
                    heading: "Settings that follow you",
                    paragraphs: [
                        "Your choice is saved in Chrome's synchronized storage, so if you are signed in to Chrome, the same currency and symbol are used on every computer where you have the extension installed. Without any configuration at all, the extension converts euros to Polish złoty.",
                    ],
                },
                {
                    heading: "Light on permissions and privacy-friendly",
                    paragraphs: [
                        "The extension asks Chrome for only one permission, \"storage\", which is needed to remember your settings. It runs exclusively on www.cardmarket.com and has no access to any other website. It contains no analytics or tracking code, does not require an account and does not send any information about what you browse or buy: the only network request it makes is a request for the current exchange rate of the selected currency.",
                    ],
                },
            ],
            images: [
                { src: demoBefore, alt: "Demo offer table with prices in euros", caption: "Before: a demo offer table with euro prices (a simplified mock-up, not the real Cardmarket page).", width: 640, height: 404, variant: 'wide' },
                { src: demoAfter, alt: "The same demo offer table with prices converted to Polish złoty", caption: "After: the extension has converted every price to złoty using the live exchange rate.", width: 640, height: 404, variant: 'wide' },
            ],
        },
        {
            heading: "How to use it",
            ordered: true,
            list: [
                "Install Cardmarket Currency Converter from the Chrome Web Store.",
                "Click the extension icon in the Chrome toolbar to open the settings popup.",
                "Choose your currency from the \"Target Currency\" list. The \"Display Symbol\" field is filled in automatically; change it if you prefer a different symbol.",
                "Click \"Save\". A confirmation message reminds you to refresh any Cardmarket tabs that are already open.",
                "Open or refresh any page on Cardmarket. All euro prices are now shown in your currency, including offers that load later.",
            ],
            images: [
                { src: popupDefault, alt: "Extension popup with Polish złoty selected", caption: "The settings popup with the default configuration.", width: 375, height: 344, variant: 'narrow' },
                { src: popupSaved, alt: "Extension popup after switching to US Dollar and saving", caption: "Switching to US dollars: the symbol is filled in automatically.", width: 375, height: 365, variant: 'narrow' },
            ],
        },
        {
            heading: "Where the exchange rates come from",
            paragraphs: [
                "Exchange rates are refreshed daily. Rather than calling a commercial exchange-rate provider directly from every user's browser, the extension asks a small API that I run on Amazon Web Services. The API fetches the rates once per currency per day, stores them and serves the stored copy to every user who asks later the same day. The extension additionally remembers the rate locally for the rest of the day, so browsing many Cardmarket pages in a row does not cause repeated requests at all.",
                "This two-level cache keeps the extension fast and allows it to stay completely free: no matter how many people use it, the paid upstream provider is contacted roughly once per currency per day.",
            ],
        },
        {
            heading: "Under the hood",
            paragraphs: [
                "The extension is written in TypeScript using Plasmo, a framework for building browser extensions, and is packaged as a Manifest V3 Chrome extension. The settings popup is a small React component. The content script locates text nodes containing euro amounts with an XPath query and a regular expression, converts them and observes the page with a MutationObserver to handle dynamically loaded content, pausing the observer while it edits the page so that it never reacts to its own changes. Concurrent requests for the same exchange rate are merged into a single network call.",
                "The backend is a serverless application described with AWS SAM: an API Gateway endpoint invokes a Node.js Lambda function, which looks up the rate for the requested currency and the current day in a DynamoDB table. On a cache miss, it downloads fresh rates from exchangerate-api.com and saves them, which as a side effect builds up a day-by-day history of exchange rates.",
                "Delivery is fully automated with GitHub Actions. Every change is type-checked and built, and a custom Python script validates the packaged extension (manifest version, permissions, that content scripts are limited to Cardmarket and that all referenced files are present). Changes merged to the main branch are deployed to AWS, verified with a smoke test against the live API and uploaded to the Chrome Web Store for review. Both AWS and Google are accessed with short-lived, keyless OIDC credentials instead of stored secrets, and Renovate keeps the dependencies up to date.",
            ],
        },
    ],
};
