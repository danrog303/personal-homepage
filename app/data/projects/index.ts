import { ProjectDetails } from './types';
import { personalHomepageDetails } from './personalHomepage';

/**
 * Detailed descriptions of projects, keyed by the slug used in projectPortfolioData.ts.
 * Kept separate from the card data so that react-router.config.ts can read the list
 * of slugs without importing any image assets.
 */
export const projectDetailsBySlug: Record<string, ProjectDetails> = {
    'personal-homepage': personalHomepageDetails,
};
