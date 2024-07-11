import { FeatureCard } from "./FeatureCard";



export const FeatureContainer = () => {

let featureCardDatas = [
    {
        feature_card_title: "Relax",
        description: "This is a feature card",
        submenus: [
            {
                submenu_title: "Submenu 1",
                submenu_description: "This is a submenu"
            },
            {
                submenu_title: "Submenu 2",
                submenu_description: "This is a submenu"
            },
            {
                submenu_title: "Submenu 3",
                submenu_description: "This is a submenu"
            }
        ],
        buttonText: "Click me"
    },
    {
        feature_card_title: "Plan",
        description: "This is a feature card",
        buttonText: "Click me"
    },
    {
        feature_card_title: "Focus on",
        description: "This is a feature card",
        buttonText: "Click me"
    },
    {
        feature_card_title: "Achieve",
        description: "This is a feature card",
        buttonText: "Click me"
    },
    {
        feature_card_title: "Journal",
        description: "This is a feature card",
        buttonText: "Click me"
    },
    {
        feature_card_title: "Get",
        description: "This is a feature card",
        buttonText: "Click me"
    },
    {
        feature_card_title: "Build",
        description: "This is a feature card",
        buttonText: "Click me"
    },
    {
        feature_card_title: "Reduce",
        description: "This is a feature card",
        buttonText: "Click me"
    },
    {
        feature_card_title: "Remind",
        description: "This is a feature card",
        buttonText: "Click me"
    }
    
    ]

    return (
        <div className="feature-container-main">
            {featureCardDatas.map((featureCardData) => {
                return (
                <FeatureCard 
                feature_card_title = {featureCardData.feature_card_title} 
                description = {featureCardData.description} 
                buttonText = {featureCardData.buttonText}
                key = {featureCardData.feature_card_title} 
                submenus = {featureCardData.submenus}/>)
            })}
        </div>
    )
}