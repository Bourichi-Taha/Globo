import React from 'react'
import "../assets/css/of-advantages.css"
import img from "../assets/images/icon/advantage-withus-img.jpg"
const OFAdvantages = () => {
    return (
        <div className="of-advantages-container">
            <div className="of-advantages-left">
                <h3 className="of-advantages-left-subtitle">Why work with No Name?</h3>
                <h1 className="of-advantages-left-title">Advantages of working with us</h1>
            </div>
            <div className="of-advantages-center">
                <img src={img} alt="" className="of-advantages-center-img" />
            </div>
            <div className="of-advantages-right">
                <p className="of-advantages-right-desc">
                    Our developers can work within the timezone your require.
                </p>
                <p className="of-advantages-right-desc">
                    We’re able to find or educate any specific skill due to our relationships with the best universities.
                </p>
                <p className="of-advantages-right-desc">
                    Want to grow a team quickly? We’ll be able to hire a lot of talent within a short timespan.
                </p>
                <p className="of-advantages-right-desc">
                    You’re working with a Dutch company and thus all of the EU compliance rules – to protect you.
                </p>
            </div>
        </div>
    )
}

export default OFAdvantages