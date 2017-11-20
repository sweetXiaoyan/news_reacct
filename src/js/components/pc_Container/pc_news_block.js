import React from 'react'
import {Card} from 'antd'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class PCNewsBlock extends React.Component {
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
                <li key={index}>
                    <Link to={`${newsItem.uniquekey}/details`} target="_blank">
                        {newsItem.title}
                    </Link>
                </li>
            ))
            : '没有找到任何新闻';
        console.log(newsList);
        return(
            <div className="topNewsList">
                <Card>
                    <Router>
                        <ul>
                            {newsList}
                        </ul>
                    </Router>
                </Card>

            </div>
        )
    }
}