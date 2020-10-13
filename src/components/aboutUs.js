import React, { Component } from 'react';
import Uniform from "../resources/uniformImg/aboutusimg.jpeg";

class AboutUs extends Component {
    render() {
        return(
            <div style={{textAlign: 'center', paddingBottom: '10px'}}>
                <h1> Lisa Workwear Uniform & Embroidery </h1>
                <div style={{display: 'flex'}}>
                <h3 style={{width: '40%', paddingLeft: '10%', textAlign: 'left'}}>
                    Lisa workwear Uniform and Embroidery is a Sydney based family business that started in 1996.
                    We have grown rapidly since then with an ever-growing client base across Australia from Sydney to Perth and Queensland. <br/>
                    <br/>
                    Lisa workwear Uniform and Embroidery is a one-stop-supplier specialising in safety workwear and customised clothing for different industries
                    ranging from public services, restaurants to corporates. We have been supplying all sorts of uniforms and accessories for more than 20 years with supreme quality and competitive market price.
                    We also boast our high-tech embroidery and screen printing service, which allows our clients to customise whatever complicated patterns they would like.
                    In addition, we have vast knowledge and experience in providing information to enable you to made the smartest decision in choosing the best options for your requirements. <br/>
                    <br/>
                    We have been cooperated with most of the largest local apparel manufacturers, including AS Colour, Aussie Pacific, Bisley,  Biz Collection,
                    Bocini, DNC, FXD, Grace Collection, JBS Wear, Syzmik and Winning Spirit ect.. We are able to supply any garments or accessories you select from those manufacturers with the lowest price and highest quality.<br/>
                    <br/>
                    Feel free to explore our huge product range and services by simply sending us a request within our website.
                </h3>

                <div style={{width: '50%'}}>
                    <img alt="image" src={Uniform} style={{width: '40%', height: '100%'}}/>
                </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;
