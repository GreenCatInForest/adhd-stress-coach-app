export const FeatureCard = ({feature_card_title, submenus}) => {

    return (
            <div className="feature-card-main">
                {feature_card_title&&<h3>{feature_card_title}</h3>}
                {submenus&&submenus.map((submenu) => {
                    return (
                        <div className="submenu-main">
                            <h4>{submenu.submenu_title}</h4>
                            <p>{submenu.description}</p>
                        </div>
                    )
                })}
            </div>
    )
}