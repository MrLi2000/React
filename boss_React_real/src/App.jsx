import React, { Component } from 'react'
import {Route,Switch,Redirect,NavLink} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
// 引入路由
import Home from './pages/Home'
import Own from './pages/Own'
import Message from './pages/Message'
import User from './pages/User'
import Login from './pages/User/Login'
import Resume from './pages/User/Resume'

// 引入组件
import WebDetail from './components/WebDetail'
import JavaDetail from './components/JavaDetail'
import ChatDetail from './components/ChatDetail'

// 引入App样式
import './App.css'

// 引入icon样式
import './images/font/iconfont.css'



export default class App extends Component {
    render() {
        return (
            <>
             {/*底部路由链接  */}
             <Provider store={store}>
             <div className="footerBar">
                <NavLink to="/home" activeClassName="selectStyle" className="boxBar">
                    <i className="iconfont">&#xe603;</i>
                    <p className="footerBar-text">首页</p>
                </NavLink>
                <NavLink to="/own" activeClassName="selectStyle" className="boxBar">
                    <i className="iconfont">&#xe684;</i>
                    <p className="footerBar-text">有了</p>
                </NavLink>
                <NavLink to="/message" activeClassName="selectStyle" className="boxBar">
                    <i className="iconfont">&#xe607;</i>
                    <p className="footerBar-text">信息</p>
                </NavLink>
                <NavLink to="/user" activeClassName="selectStyle" className="boxBar">
                    <i className="iconfont">&#xe8c8;</i>
                    <p className="footerBar-text">我的</p>
                </NavLink>
             </div>
             {/* 注册路由 */}
             <div>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/own" component={Own}/>
                    <Route path="/message" component={Message}/>
                    <Route path="/user" component={User}/>

                    {/* 职位详情 */}
                    <Route path="/webdetail/:id" component={WebDetail}/>
                    <Route path="/javadetail/:id" component={JavaDetail}/>
                    <Route path="/chatdetail/:id" component={ChatDetail}/>

                    {/* 登录 */}
                    <Route path="/login" component={Login}/>

                    {/* 在线编辑 */}
                    <Route path="/resume" component={Resume}/>
                    <Redirect to="/home"/>
                </Switch>
                
             </div> 
             </Provider>
            </>
        )
    }
}
