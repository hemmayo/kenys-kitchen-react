import React from 'react'

const slider = (props) => {
    return (
        <li className="" style={{}}>
            <img src={props.image} alt="" uk-cover="" className="uk-cover" style={{ height: '1064px', width: '1600px' }} />
            <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 className="uk-margin-remove">{props.title}</h3>
                <p className="uk-margin-remove">{props.subtitle}</p>
            </div>
        </li>
    )
}

export default slider