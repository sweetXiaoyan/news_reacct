import React from 'react'
import PCHeader from './pc_head'
import PCFooter from './pc_footer'
import PCNewsContainer from './pc_newsContainer'

export default class PCIndex extends React.Component{
    render(){
        return(
            <div>
                <PCHeader/>
                <PCNewsContainer />
                <PCFooter/>
            </div>
        )
    }
}