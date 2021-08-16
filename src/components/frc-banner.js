import React from "react"

import imgFrcIcon from "../img/first_icon.svg"

const FrcBanner = ({ awardName, eventName, isLong }) => {
    return(
        <div className="main-frc-banner">
            <img placeholder="none" src={imgFrcIcon} alt="FRC" />
            <div className={`${isLong ? "main-award-name" : "main-award-name"}`}>
                <span>{awardName}</span>
            </div>
            <div className={`${isLong ? "main-event-name-long" : "main-event-name"}`}>
                <span>{eventName}</span>
            </div>
        </div>
    )
}

export default FrcBanner