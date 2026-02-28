import type { Config } from '@react-router/dev/config'
import { projectPortfolioItems } from './app/data/projectPortfolioData'

export default {
    ssr: false,
    async prerender() {
        const slugPaths = projectPortfolioItems
            .filter(p => p.slug)
            .map(p => `/projects/${p.slug}`)
        return ['/', '/privacy-policy', '/404', ...slugPaths]
    },
} satisfies Config
