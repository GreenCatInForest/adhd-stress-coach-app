export const FeatureCard = ({featureCardData}) => {

    return (
            <div className="feature-card-main">
                {featureCardData.feature_card_title&&<h3>{featureCardData.feature_card_title}</h3>}
                {featureCardData.submenus&&featureCardData.submenus.map((submenu) => {
                    return (
                        <>
                        <div className="submenu-main">
                            <h4>{submenu.submenu_title}</h4>
                            <p>{submenu.description}</p>
                        </div>
                        </>
                    )
                })}
                <button>Go</button>
            </div>
    )
}