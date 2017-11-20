import React from 'react'
import {Row, Col, Card} from 'antd'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class MobileList extends React.Component {
    constructor(){
        super();
        this.state = {
            news:""
        };
    }
    componentWillMount(){
        var myFetchOptions ={
            method:'GET'
        };
        console.log(this.state.news+'willMount');
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(res => res.json()).then(json =>this.setState({news:json}));
    }
    render(){
        const {news} = this.state;
        console.log(news.length+'render');
        console.log(news.length+'render2');
        const newsList = news.length
            ? news.map((newsItem, index) => (
               <section key={index} className="m_article list-item special_setion clearfix">
                   <Link to={`${newsItem.uniquekey}/details`}>
                       <div className="m_article_img">
                           <img src={newsItem.thumbnail_pic_s} alt="" />
                       </div>
                       <div className="m_article_info">
                           <div className="m_artcle_title">
                               <span>{newsItem.title}</span>
                           </div>
                           <div className="m_article_desc clearfix">
                               <div className="m_article_desc_l">
                                   <span className="m_article_channel">{newsItem.realtype}</span>
                                   <span className="m_article_time">{newsItem.date}</span>
                               </div>
                           </div>
                       </div>
                   </Link>

               </section>
            ))
            : '没有找到任何新闻';
        console.log(newsList);
        return(
            <div>
               <Row>
                   <Router>
                       <Col span={24}>
                               {newsList}
                       </Col>
                   </Router>

               </Row>

            </div>
        )
    }
}