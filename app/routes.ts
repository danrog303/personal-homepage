import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
    index('routes/_index.tsx'),
    route('privacy-policy', 'routes/privacy-policy.tsx'),
    route('projects/:slug', 'routes/projects.$slug.tsx'),
    route('*', 'routes/$.tsx'),
] satisfies RouteConfig
