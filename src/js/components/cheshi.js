import React from 'react'
import {Row,Col} from 'antd'

export default class PCNewsDetail extends React.Component{
    constructor(){
        super();
        this.state ={
            newsItem:""
        };
    };
    componentWillMount() {
        console.log(this.props.params.uniquekey + 'WillMount');
    }
    render(){
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                      ddddddddddddd
                    </Col>
                    <Col span={6}>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}