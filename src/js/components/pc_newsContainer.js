import React from 'react'
import {Row , Col ,Carousel} from 'antd'

export default class PCNewsContainer extends React.Component{
    render() {
        const settings ={
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            autoplay:true
        };
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src="./src/image/carousel_1.jpg" alt="轮播图"/></div>
                                    <div><img src="./src/image/carousel_2.jpg" alt="轮播图"/></div>
                                    <div><img src="./src/image/carousel_3.jpg" alt="轮播图"/></div>
                                    <div><img src="./src/image/carousel_4.jpg" alt="轮播图"/></div>
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>

        )
    }

}