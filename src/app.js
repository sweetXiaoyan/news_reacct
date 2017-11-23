import React from 'react'
import ReactDOM from 'react-dom'
import {
    HashRouter as Router,
    Route,
    Switch,
    Link} from 'react-router-dom'
import PCIndex from './js/components/pc_Index'
import PCDetail from './js/components/pc_detail'
import Cheshi from './js/components/cheshi'
import MobileIndex from './js/components/mobile_index'
import 'antd/dist/antd.css'
import MediaQuery from 'react-responsive'

export default class App extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query="(min-device-width:1224px)">
                    <Router>
                       <div>
                           <Route path="/" component={PCIndex}></Route>
                                     {/*details/161028201113900*/}
                           <Route path="details/:uniquekey" component={Cheshi}></Route>
                       </div>
                    </Router>
                </MediaQuery>
                <MediaQuery query="(max-device-width:1224px)">
                    <MobileIndex/>
                </MediaQuery>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));