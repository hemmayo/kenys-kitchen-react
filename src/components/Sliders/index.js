import React, { Component } from 'react'
import Slider from './Slider'

export class sliders extends Component {
    state = {
        currentSlide: 0,
        slides: this.props.slides
    }
    render() {
        return (
            <React.Fragment>
                <div uk-slideshow="autoplay: true; min-height: 300; max-height: 500" className="uk-slideshow">
                    <ul className="uk-slideshow-items" style={{minHeight: '500px'}}>
                        {this.state.slides.map((slide, index) => <Slider key={index} title={slide.title} subtitle={slide.subtitle} image={slide.image} />)}
                    </ul>
                    <div className="uk-margin">
                        <a className="uk-position-center-left uk-position-large uk-hidden-hover uk-slidenav-previous uk-icon uk-slidenav" href="./" uk-slidenav-previous="" uk-slideshow-item="previous"><svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" strokeWidth="1.4" points="12.775,1 1.225,12 12.775,23 "></polyline></svg></a>
                        <a className="uk-position-center-right uk-position-large uk-hidden-hover uk-slidenav-next uk-icon uk-slidenav" href="./" uk-slidenav-next="" uk-slideshow-item="next"><svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" strokeWidth="1.4" points="1.225,23 12.775,12 1.225,1 "></polyline></svg></a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default sliders
