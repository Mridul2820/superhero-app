import { RecoilRoot } from 'recoil'
import '../styles/globals.css'

// SEO
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <DefaultSeo {...SEO} />
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </RecoilRoot>
    )
}

export default MyApp
