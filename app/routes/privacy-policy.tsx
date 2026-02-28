import type { MetaFunction } from 'react-router-dom'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage'

export const meta: MetaFunction = () => [
    { title: 'Privacy Policy | Daniel Rogowski' },
    { name: 'description', content: 'Privacy policy for danielrogowski.net — information about cookies, Google Analytics, and data handling on Daniel Rogowski\'s portfolio website.' },
    { tagName: 'link', rel: 'canonical', href: `${import.meta.env.VITE_SITE_URL}/privacy-policy/` },
]

export default PrivacyPolicyPage
