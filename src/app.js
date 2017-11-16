import React from 'react'
import ReactDOM from 'react-dom'
import PCIndex from './js/components/pc_Index'
import MobileIndex from './js/components/mobile_index'
import 'antd/dist/antd.css'
import MediaQuery from 'react-responsive'

export default class App extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query="(min-device-width:1224px)">
                    <PCIndex/>
                </MediaQuery>
                <MediaQuery query="(max-device-width:1224px)">
                    <MobileIndex/>
                </MediaQuery>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));