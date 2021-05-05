import SbEditable from 'storyblok-react'
import Feature from './Feature'
import Grid from './Grid'
import MainNav from './mainNav'
import Nav from './Nav'
import Teaser from './Teaser'
import Youtube from './Youtube'

// resolve Storyblok components to Next.js components
const Components = {
    'teaser': Teaser,
    'grid': Grid,
    'feature': Feature,
    'youtube': Youtube,
    'mainNav': MainNav,
    'nav': Nav,
}

const DynamicComponent = ({ blok }) => {
    // check if component is defined above
    if (typeof Components[blok.component] !== 'undefined') {
        const Component = Components[blok.component]
        // wrap with SbEditable for visual editing
        return (<SbEditable content={blok}><Component blok={blok} /></SbEditable>)
    }

    // fallback if the component doesn't exist
    return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}

export default DynamicComponent