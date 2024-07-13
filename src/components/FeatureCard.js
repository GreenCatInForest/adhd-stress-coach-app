import React from 'react';


export const FeatureCard = ({ featureCardData }) => {
    let imageUrl;
    try {
        imageUrl = featureCardData.feature_card_img ? require(`./../assets/images/${featureCardData.feature_card_img}`) : undefined;
    } catch (error) {
        console.error("Failed to load image:", error);
        // Optionally, set a default image URL here if needed
        // imageUrl = require('./../assets/images/defaultImage.jpg').default;
    }

    return (
        <div className="feature-card-main">
            {featureCardData.feature_card_title && <h3>{featureCardData.feature_card_title}</h3>}
            {imageUrl && <img src={imageUrl} alt={featureCardData.feature_card_title} />}
            {featureCardData.submenus && featureCardData.submenus.map((submenu, index) => (
                <div key={index} className="submenu-main">
                    <h4>{submenu.submenu_title}</h4>
                    <p>{submenu.description}</p>
                </div>
            ))}
            <button>Go</button>
        </div>
    );
};