import type { MetaFunction } from 'react-router'
import NotFoundPage from '../pages/NotFoundPage'

export const meta: MetaFunction = () => [
    { title: '404 – Page Not Found | Daniel Rogowski' },
    { name: 'robots', content: 'noindex' },
]

export default NotFoundPage
