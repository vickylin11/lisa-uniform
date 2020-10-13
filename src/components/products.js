import React, { Component } from 'react';
import { Card } from 'antd/lib/index';
import Meta from "antd/es/card/Meta";
import "../css/products.css";
import Biz from "../resources/productImg/biz.png";
import Bocini from "../resources/productImg/bocini.png";
import Jbs from "../resources/productImg/jbs.png";
import Ramo from "../resources/productImg/ramo.png";
import DNC from "../resources/productImg/dnc.png";
import Winning from "../resources/productImg/winning.png";
import AP from "../resources/productImg/ap.png";
import Grace from "../resources/productImg/grace.png";
import Whale from "../resources/productImg/whale.png";
import AC from "../resources/productImg/ac.png";
import Bisley from "../resources/productImg/bisley.png";
import FXD from "../resources/productImg/fxd.png";
import Syxmik from "../resources/productImg/syz.png";

class Products extends Component {

    render() {
        const products = [
            {
                name: "As Colour",
                description: "AS Colour designs and manufactures quality basics for wholesale and retail.",
                url: "https://www.ascolour.com.au",
                img: AC
            },
            {
                name: "Aussie Pacific",
                description: "High quality sport, corporate and work uniform manufacturer with an inpressive range of garments.",
                url: "https://www.aussiepacific.com.au/",
                img: AP
            },
            {
                name: "Bisley",
                description: "An Australian owned and operated garment manufacturer famed for using the latest technology available.",
                url: "https://www.bisleyworkwear.com.au",
                img: Bisley
            },
            {
                name: "Biz Collection",
                description: "A market leader in quality garments and promotional items.",
                url: "https://www.bizcollection.com.au/",
                img: Biz
            },
            {
                name: "Blue Whale",
                description: "Blue Whale offers a comprehensive range of work and leisure wear as well as customised uniforms",
                url: "https://bluewhale.com.au",
                img: Whale
            },
            {
                name: "Bocini",
                description: "Bocini is one of the leading providers of quality promotional clothing in Australia.",
                url: "http://bocini.com.au/",
                img: Bocini
            },
            {
                name: "DNC Work Wear",
                description: "DNC is a market leader in Hi Visibility and traditional work wear.",
                url: "https://www.dncworkwear.com.au/",
                img: DNC
            },
            {
                name: "FXD Workwear",
                description: "FXD is famous for its PURPOSE-BUILT TECHNICAL WORKWEAR AND WORK BOOTS.",
                url: "https://fxdworkwear.com.au",
                img: FXD
            },
            {
                name: "Grace Collection",
                description: "A one-stop-shop for branding products with various white-label garments and accessories.",
                url: "https://gracecollection.com.au/",
                img: Grace
            },
            {
                name: "Jb's Wear",
                description: "Australian owned clothing and workwear manufacturer.",
                url: "https://www.jbswear.com.au/",
                img: Jbs
            },
            {
                name: "Roma",
                description: "A quality uniforms manufacturer of various garment types ranging from office shirts to sportswear.",
                url: "https://www.ramo.com.au/",
                img: Ramo
            },
            {
                name: "Winning Spirit",
                description: "A leading garment and workwear manufacturer of women & men for corporate clothing.",
                url: "https://winningspirit.info/",
                img: Winning
            },
            {
                name: "Syxmik",
                description: "Manufacturer on garments and safety wear specifically for heavy industries, construction for men and women.",
                url: "https://www.syzmik.com",
                img: Syxmik
            }
        ];

        return(
            <div>
                <p className="guide">Please click the below brands to view more details, and feel free to <a href="/request-form">contact us</a> for the best price.</p>
                <div className="items-tab">
                    {products.map(product => (
                        <div key={product.name} className="item-display">
                            <a href={product.url}>
                                <Card
                                    hoverable
                                    style={{ width: 250, height: 400 }}
                                    cover={<img alt="product" src={product.img} />}
                                >
                                    <Meta title={product.name} description={product.description}/>
                                </Card>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Products;
