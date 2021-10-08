import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Route,Switch,Redirect } from 'react-router'

// 引入路由
import Chat from './Chat'
import Interact from './Interact'

//
import msgStyle from './index.module.css'

export default class Message extends Component {
    

    render() {
        // console.log(contacts);
        return (
            <div className={msgStyle.container}>
                <div className={msgStyle.header}>
                    <NavLink to="/message/chat" activeClassName={msgStyle.active} className={msgStyle.chat}>
                        <span>聊天</span>
                    </NavLink>
                    <NavLink to="/message/interact" activeClassName={msgStyle.active} className={msgStyle.chat}>
                        <span>互动</span>
                    </NavLink>
                </div>
                <div>
                    <Switch>
                        <Route path="/message/chat" component={Chat}/>
                        <Route path="/message/interact" component={Interact}/>
                        <Redirect to="/message/chat"/>
                    </Switch>
                    
                </div>
            </div>
        )
    }
}
