import { getFeatureCardDatas } from "../data/featureCardDatas";
import { FeatureCard } from "./FeatureCard";



export const FeatureContainer = () => {

    const featureCardDatas = getFeatureCardDatas();

    return (
        <div className="feature-container-main">
            
            {featureCardDatas.map((featureCardData) => {
                return (

                    <>
                        <FeatureCard 
                        key = {featureCardData.feature_card_title} 
                        featureCardData = {featureCardData}
                        />
                    </>)
                
            })}
                
        </div>
    )
}