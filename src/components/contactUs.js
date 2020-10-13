import React, { Component } from 'react';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import Map from "../resources/map.png";

class ContactUs extends Component {

    render() {
        return(
            <div style={{textAlign: 'center'}}>
                <h1>Contact Details</h1>
                <h3>Email: <a href="mailto:lisauniforminfo@gmail.com">lisauniforminfo@gmail.com</a> </h3>
                <h3>Tel/Fax: <a href="tel:02 91507259">02 91507259</a></h3>
                <h3>Mobile: <a href="tel:0414274027">+61 414274027</a></h3>
                <h3>Social Media:
                    <a href={"https://www.facebook.com/Workwear-Corporate-Uniform-Embroidery-639901479985895/"}>
                    <FacebookOutlined style={{fontSize: '25px', color: '#08c', paddingLeft:'10px'}}/>
                    </a>
                    <a href={"https://instagram.com/workwear__uniform_embroidery?igshid=12dns9nrz9u6z"}>
                    <InstagramOutlined style={{fontSize: '25px', color: '#08c', paddingLeft:'10px'}}/>
                    </a>
                </h3>
                <h3>Address: <a href={"https://goo.gl/maps/3qdw2y2X6w8fiP4d6"}>11 Staples Street Kingsgrove Nsw 2208 </a></h3>
                <img src={Map} style={{width: "800px", paddingBottom: "10px"}}/>

            </div>
        );
    }
}

export default ContactUs;
