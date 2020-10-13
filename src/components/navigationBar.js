import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, MessageOutlined, ShopOutlined, ContactsOutlined, TeamOutlined } from '@ant-design/icons';
import '../css/navigationBar.css';
import Logo from "../resources/logo.png";


class NavigationBar extends Component {

    render() {
        return(
            <div>
                <div className="header">
                    <img className="logo" src={Logo} />
                    <h2 className="name">Lisa Workwear Uniform & Embroidery</h2>
                </div>
                <nav>
                    <ul className="nav-links">
                        <Link to="/">
                            <div className="nav-item">
                                <HomeOutlined />
                                <li>Home</li>
                            </div>
                        </Link>
                        <Link to="/about-us">
                            <div className="nav-item">
                                <TeamOutlined />
                                <li>About Us</li>
                            </div>
                        </Link>
                        <Link to="/products">
                            <div className="nav-item">
                                <ShopOutlined />
                                <li>Products</li>
                            </div>
                        </Link>
                        <Link to="/contact-us">
                            <div className="nav-item">
                                <ContactsOutlined />
                                <li>Contact Us</li>
                            </div>
                        </Link>
                        <Link to="/request-form">
                            <div className="nav-item">
                                <MessageOutlined />
                                <li>Send Request</li>
                            </div>
                        </Link>
                    </ul>
                </nav>
            </div>
        );
    }
}


export default NavigationBar;
