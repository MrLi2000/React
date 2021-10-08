import React, { Component } from 'react'
import { Route,Switch,Redirect } from 'react-router'
import { NavLink } from 'react-router-dom'

// 引入二级路由
import Learn from './Learn'
import FullTime from './FullTime'
import PartTime from './PartTime'

import homeStyle from './index.module.css'
export default class Home extends Component {


    render() {
        return (
            <div className={homeStyle.home}>
                {/* 头部路由导航连接 */}
                <div className={homeStyle.header}>
                    <NavLink to="/home/learn" activeClassName={homeStyle.active} className={homeStyle.headerList}>
                        <p>学习</p>
                    </NavLink>
                    <NavLink to="/home/fullTime" activeClassName={homeStyle.active} className={homeStyle.headerList}>
                        <p>全职</p>
                    </NavLink>
                    <NavLink to="/home/partTime" activeClassName={homeStyle.active} className={homeStyle.headerList}>
                        <p>兼职</p>
                    </NavLink>
                </div>
                {/* 二级路由展示内容 */}
                <div className={homeStyle.container}>
                    {/* Switch提高效率 */}
                    <Switch>
                        <Route path="/home/learn" component={Learn}/>
                        <Route path="/home/fullTime" component={FullTime}/>
                        <Route path="/home/partTime" component={PartTime}/>
                        {/* 重定向至learn */}
                        <Redirect to="/home/learn"/>
                    </Switch>
                </div>
            </div>
        )
    }
}
