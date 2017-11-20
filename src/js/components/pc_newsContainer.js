import React from 'react'
import {Row , Col ,Carousel,Tabs} from 'antd'
import PCNewsBlock from './pc_Container/pc_news_block'
import PCNewsImage from './pc_Container/pc_news_images'

const TabPane = Tabs.TabPane

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
                            <PCNewsImage imageWidth="110px" newsTitle="国内新闻" count={6} type="guonei" width="400px"/>
                        </div>

                        <Tabs>
                            <TabPane key="top" tab="头条新闻">
                                <PCNewsBlock count={10} type="top"/>
                            </TabPane>
                            <TabPane key="guoji" tab="国际新闻">
                                <PCNewsBlock count={6} type="guoji"/>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>

        )
    }

}