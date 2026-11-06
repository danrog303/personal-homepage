import homeImage from '../../assets/projects/deru-party-games/home-game-catalog.webp';
import deckPickerImage from '../../assets/projects/deru-party-games/deck-picker-truth-or-dare.webp';
import neverImage from '../../assets/projects/deru-party-games/never-have-i-ever-card.webp';
import dareImage from '../../assets/projects/deru-party-games/truth-or-dare-dare-card.webp';
import timerImage from '../../assets/projects/deru-party-games/5-seconds-timer-running.webp';
import ratherImage from '../../assets/projects/deru-party-games/would-you-rather-card.webp';
import tabooImage from '../../assets/projects/deru-party-games/taboo-card-pro.webp';
import languageImage from '../../assets/projects/deru-party-games/language-picker.webp';
import proOfferImage from '../../assets/projects/deru-party-games/pro-upgrade-offer.webp';
import websiteImage from '../../assets/projects/deru-party-games/website-hero.webp';
import { ProjectDetails } from './types';

export const deruPartyGamesDetails: ProjectDetails = {
    intro: [
        "Deru Party Games is an Android app that turns a single phone into a box of party card games. It bundles five classic social games - Never Have I Ever, Truth or Dare, 5 Seconds, Would You Rather? and Taboo - with almost a thousand cards written for them, so a group of friends can start playing at a party, on a trip or during a quiet evening without any physical cards, boards or preparation.",
        "The whole app, including every card, is available in six languages: English, Polish, German, French, Spanish and Italian. It works completely offline and needs no account. The app is published on Google Play in two versions: a free one supported by ads, and a Pro version available for a one-time payment.",
    ],
    sections: [
        {
            heading: "How playing works",
            paragraphs: [
                "Every game follows the same simple pattern, so once you know one of them you know them all. You choose a game from the colorful home screen, optionally read its rules aloud to the group, select which card decks you want to use and press \"Play\". Then the phone travels around the table: each player draws a card, reads it out, does what it says and passes the phone to the next person.",
                "The cards of every game are divided into themed decks, so the group can tune the mood of the evening. \"Everyday Dilemmas\" covers the charms and struggles of modern daily life, \"Saturday Night Fever\" is about nightlife, celebrations and parties, and \"Spicy Secrets\" is a bolder deck intended for adult players only. Decks can be freely combined, and the bottom of the screen shows how many cards the selection contains.",
            ],
            images: [
                { src: homeImage, alt: "The home screen with five colorful game tiles", caption: "The home screen: \"What are we playing?\"", width: 412, height: 915, variant: 'narrow' },
                { src: deckPickerImage, alt: "Choosing card decks for Truth or Dare", caption: "Choosing the decks before a game.", width: 412, height: 915, variant: 'narrow' },
                { src: languageImage, alt: "Language selection sheet with six languages", caption: "Six languages, switchable at any time.", width: 412, height: 915, variant: 'narrow' },
            ],
        },
        {
            heading: "The five games",
            subsections: [
                {
                    heading: "Never Have I Ever",
                    paragraphs: [
                        "Each card begins with \"Never have I ever...\", for example \"Never have I ever ordered a kebab at 3 AM\" or \"Never have I ever participated in karaoke\". Everyone who has done the thing described on the card admits it, usually by taking a sip of their drink, although the rules encourage groups to invent their own non-alcoholic penalty instead. It is a great way to learn surprising facts about friends. The game contains 100 cards.",
                    ],
                },
                {
                    heading: "Truth or Dare",
                    paragraphs: [
                        "The player holding the phone decides whether to answer a question (\"New Question\") or take on a challenge (\"New Dare\"). Questions range from light ones like \"What talent would you like to have?\" to much more personal ones, and dares include tasks such as humming the theme tune of a film or TV show for the others to guess. Whoever refuses receives a penalty chosen by the rest of the group. Truths and dares are separate piles with their own counters, 225 cards in total.",
                    ],
                },
                {
                    heading: "5 Seconds",
                    paragraphs: [
                        "A fast-paced game of quick thinking. The card shows a category, for instance \"Name 3 things you can find in a pocket\" or \"Name 3 dance styles\", and the player has just five seconds to name three matching things. A built-in countdown timer with a sound signal at the end keeps everyone honest. With 235 categories, it is the largest game in the free version.",
                    ],
                },
                {
                    heading: "Would You Rather?",
                    paragraphs: [
                        "Every card offers two options, such as \"Would you rather be invisible or be able to teleport?\", and the player has to pick one and, ideally, defend the choice. The questions often spark long discussions, which makes this game perfect for calmer moments. It contains 85 cards.",
                    ],
                },
                {
                    heading: "Taboo (Pro version)",
                    paragraphs: [
                        "The player has to describe the secret word on the card so that others can guess it, without using any of the five forbidden words listed below it. For example, \"Mortgage\" has to be explained without saying \"bank\", \"house\", \"monthly payment\", \"interest rate\" or \"debt\". Saying a forbidden word ends the round immediately. With 315 cards and over 1,500 forbidden words, Taboo is the biggest game in the collection and is included in the Pro version.",
                    ],
                },
            ],
            images: [
                { src: neverImage, alt: "A Never Have I Ever card", caption: "Never Have I Ever.", width: 412, height: 915, variant: 'narrow' },
                { src: dareImage, alt: "A Truth or Dare dare card", caption: "A dare in Truth or Dare.", width: 412, height: 915, variant: 'narrow' },
                { src: timerImage, alt: "A 5 Seconds card with the countdown timer running", caption: "5 Seconds with the timer running.", width: 412, height: 915, variant: 'narrow' },
                { src: ratherImage, alt: "A Would You Rather card", caption: "Would You Rather?", width: 412, height: 915, variant: 'narrow' },
                { src: tabooImage, alt: "A Taboo card with the secret word and five taboo words", caption: "Taboo: describe \"Lost Keys\" without the five forbidden words.", width: 412, height: 915, variant: 'narrow' },
            ],
        },
        {
            heading: "Features",
            list: [
                { term: "No repeated cards", text: "the app remembers which cards have already been drawn, even after it is closed, and does not show them again until the selected decks run out. When several decks are selected, the next card is drawn from them at random in proportion to how many cards each deck has left. A counter such as \"3 / 65\" shows the progress, and tapping it lets you shuffle all cards back in." },
                { term: "Six languages", text: "English, Polish, German, French, Spanish and Italian, covering the interface, the rules and all of the cards. On first launch the app follows the phone's language, and it can be changed at any time from the home screen." },
                { term: "Works offline", text: "all cards are stored inside the app, so it works on a camping trip or in a basement club without any signal. No account or registration is needed." },
                { term: "Rules always at hand", text: "each game has a short, numbered list of rules that can be expanded before starting, so nobody has to remember or look them up." },
                { term: "Comfortable to pass around", text: "the app runs in full screen and portrait mode, uses large, readable cards and smooth animations, and respects the system's \"reduce motion\" setting and larger font sizes." },
                { term: "Free and Pro versions", text: "the free version contains four games and occasionally shows an advertisement. The Pro version is a one-time purchase with no subscription: it removes all ads and unlocks Taboo." },
            ],
            images: [
                { src: proOfferImage, alt: "The Buy Full Version sheet listing the benefits of the Pro version", caption: "The benefits of the Pro version.", width: 412, height: 915, variant: 'narrow' },
            ],
        },
        {
            heading: "How to use it",
            ordered: true,
            list: [
                "Install Deru Party Games for free from Google Play (or the ad-free Pro version).",
                "Open the app and, if needed, choose your language with the globe button in the top corner.",
                "Tap the game you want to play and, optionally, expand \"Game Rules\" to read them to the group.",
                "Select one or more card decks and press \"Play\".",
                "Read the card aloud, do what it says and pass the phone to the next player, who taps \"New Card\".",
                "When you want to start over, tap the card counter and confirm resetting the deck, or go back and pick another game.",
            ],
        },
        {
            heading: "Project website",
            paragraphs: [
                "The app has its own website at derupartygames.danielrogowski.net, also available in all six languages. It presents the games with their card counts, shows screenshots of the app, compares the free and Pro versions and links to both Google Play listings. Visitors are automatically redirected to the language version matching their browser settings.",
            ],
            images: [
                { src: websiteImage, alt: "The Deru Party Games website", caption: "The landing page of the project website.", width: 1280, height: 800, variant: 'wide' },
            ],
        },
        {
            heading: "Under the hood",
            paragraphs: [
                "The app is written in TypeScript with React Native and Expo, using React Navigation for screens and Reanimated for card animations. All five games are played on a single, generic game screen driven by configuration, and the card logic (weighted random selection without repetition, with progress saved on the device) lives in one reusable hook. Cards and translations are stored as JSON files, one set per language, and an automated test suite checks that every language contains exactly the same keys and the same number of cards, so a missing translation is caught before release.",
                "The free and Pro versions are built from the same code base: an Expo configuration file switches the package name, app name and enabled features depending on the build profile. Ads are served with Google AdMob. GitHub Actions type-check and test the code, build Android App Bundles for both versions with EAS and submit them to Google Play automatically whenever the version number changes. Renovate keeps the dependencies up to date.",
                "The website is a React Router application pre-rendered to static pages in six languages and served by a Cloudflare Worker, which also handles language detection and localized error pages.",
            ],
        },
    ],
};
