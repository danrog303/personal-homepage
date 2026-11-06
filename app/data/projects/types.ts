/**
 * Long-form content shown on a project detail page (/projects/:slug).
 * The short card data used on the homepage lives in ../projectPortfolioData.ts.
 */

export type ProjectImageVariant = 'wide' | 'narrow';

export interface ProjectImage {
    src: string;
    alt: string;
    caption?: string;
    width: number;
    height: number;
    /**
     * 'wide' images (desktop screenshots, banners) take the full content width.
     * 'narrow' images (phone screenshots, extension popups) are laid out side by side.
     */
    variant?: ProjectImageVariant;
}

export interface ProjectDefinitionItem {
    term: string;
    text: string;
}

export type ProjectListItem = string | ProjectDefinitionItem;

export interface ProjectSection {
    heading: string;
    paragraphs?: string[];
    list?: ProjectListItem[];
    /** Renders the list as a numbered list (e.g. step-by-step instructions). */
    ordered?: boolean;
    images?: ProjectImage[];
    subsections?: ProjectSection[];
}

export interface ProjectDetails {
    /** Introductory paragraphs. The first one is also used as the meta description. */
    intro: string[];
    sections: ProjectSection[];
}
