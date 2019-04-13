import React, { Component, Fragment } from 'react'

export default class navbar extends Component {
    render() {
        return (
            <Fragment>
                <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" className="uk-sticky uk-sticky-fixed" >
                    <div className="uk-navbar-container uk-navbar" uk-navbar="">
                        <div className="uk-navbar-center">
                            <div className="uk-navbar-center-left">
                                <div>
                                    <ul className="uk-navbar-nav">
                                        <li><a href="#meals-section">TACO</a></li>
                                        <li><a href="./">QUESADILLA</a></li>
                                    </ul>
                                </div>
                            </div>
                            <a href="./" className="main-font b uk-navbar-item uk-logo">Keny's Kitchen</a>
                            <div className="uk-navbar-center-right">
                                <div>
                                    <ul className="uk-navbar-nav">
                                        <li><a href="./">SALADS</a></li>
                                        <li><a href="./">DRINKS</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-position-medium uk-position-right">
                        <button className="uk-button uk-button-text uk-text-small uk-margin-right" type="button">Account</button>
                        <div uk-dropdown="" className="uk-dropdown">
                            <ul className="uk-nav uk-dropdown-nav">
                                <li className=""><a href="signin.html">Login</a></li>
                                <li><a href="signup.html">Register</a></li>
                            </ul>
                        </div>
                        <button type="button" href="cart.html" className="uk-button uk-button-text uk-text-small" >
                            <span uk-icon="icon: cart" className="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="7.3" cy="17.3" r="1.4"></circle> <circle cx="13.3" cy="17.3" r="1.4"></circle> <polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"></polyline></svg></span> Cart
            </button>
                        <div uk-drop="" className="uk-drop">
                            <div className="uk-card uk-card-body uk-card-default">
                                <p className="main-font b">Your Order Items</p>
                                <ul className="uk-list uk-list-striped">
                                    <li>Tasty Fried Chicken<br /><small>2 pcs - ₦2,500</small></li>
                                    <li>Coca Cola<br /><small>3 pcs - ₦500</small></li>
                                </ul>
                                <a href="checkout.html" className="uk-button uk-button-primary">Checkout</a>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
