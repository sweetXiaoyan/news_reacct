import React from 'react'

export default class MobileHeader extends React.Component{
    render(){
        return(
            <div className="mHeader">
                <header>
                    <img src="./src/image/new_logo.png" alt="logo"/>
                    <span>新闻资讯</span>
                </header>
            </div>
        )
    }
}