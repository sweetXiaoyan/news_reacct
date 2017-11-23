import React from 'react'
import {Card} from 'antd'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class PCNewsImage extends React.Component {
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
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(res => res.json()).then(json =>this.setState({news:json}));
    }
    render(){
        const styleImage ={
          width:this.props.imageWidth,
          display:"block",
          height:"90px"
        };
        const styleH3 ={
          width:this.props.imageWidth,
          whiteSpace:"nowrap",
          overflow:"hidden",
          textOverflow:"ellipsis"
        };
        const {news} = this.state;
        const newsList = news.length
            ? news.map((newsItem, index) => (
                <div className="itemBox" key={index} width={this.props.imageWidth}>
                    <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                        <img  style={styleImage} src={newsItem.thumbnail_pic_s} alt="news thumb"/>
                        <h3 style={styleH3}>{newsItem.title}</h3>
                        <p>{newsItem.author_name}</p>
                    </Link>
                </div>
            ))
            : '没有找到任何新闻';
        return(
            <div className="newsImageList">
                <Card title={this.props.newsTitle} width={this.props.width}>
                    <Router>
                        <div>
                            {newsList}
                        </div>
                    </Router>
                </Card>

            </div>
        )
    }
}