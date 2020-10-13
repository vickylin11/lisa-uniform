import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import HomeImg1 from "../resources/homeImg/p1.png";
import HomeImg2 from "../resources/homeImg/p2.png";
import HomeImg3 from "../resources/homeImg/p3.png";

class Home extends Component {

    render() {
        return(
            <div>
                <Carousel autoplay>
                    <div>
                        <img src={HomeImg1} alt="Home" style={{width: '100%'}} />
                    </div>
                    <div>
                        <img src={HomeImg2} alt="Home" style={{width: '100%', height: '40%'}} />
                    </div>
                    <div>
                        <img src={HomeImg3} alt="Home" style={{width: '100%', height: '40%'}} />
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Home;
