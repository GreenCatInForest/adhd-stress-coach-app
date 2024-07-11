import {Hero} from '../components/Hero'
import { FeatureContainer } from '../components/FeatureContainer'

export const Home = () => {
    return (
        <div className="home-main">
            <Hero/>
            <FeatureContainer/>
        </div>
    )
}