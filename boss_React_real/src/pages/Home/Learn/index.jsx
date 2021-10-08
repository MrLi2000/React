import React, { Component } from 'react'
import { Route } from 'react-router'
import { NavLink,Switch,Redirect } from 'react-router-dom'


//引入三级路由
import Web from './Web'
import Java from './Java'

// 引入css
import learnStyle from './index.module.css'

export default class Learn extends Component {
    render() {
        return (
            <div className={learnStyle.allBox}>
                <div className={learnStyle.topBar}>
                    <NavLink to="/home/learn/web" activeClassName={learnStyle.active} className={learnStyle.web}>
                        <span>web前端</span>
                    </NavLink>
                    <NavLink to="/home/learn/java" activeClassName={learnStyle.active} className={learnStyle.java}>
                        <span>java</span>  
                    </NavLink>
                </div>
                <div className={learnStyle.container}>
                    <Switch>
                        <Route path="/home/learn/web" component={Web}/>
                        <Route path="/home/learn/java" component={Java}/>
                        <Redirect to="/home/learn/web"/>
                    </Switch>
                </div>
            </div>
        )
    }
}
