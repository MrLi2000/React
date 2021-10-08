import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import chatStyle from './index.module.css'

export default class Chat extends Component {
    // 初始化数据
    state = {contacts:[]}

    componentDidMount() {
        axios.get('http://localhost:3000/chat').then(
            res => this.setState({ contacts: res.data })
        )
    }
    render() {
        const {contacts} = this.state
        return (
            <div>
                <ul className={chatStyle.listBox}>
                    {/* <li className={chatStyle.list}>
                        <img src="https://img2.baidu.com/it/u=3354066334,1529355902&fm=26&fmt=auto&gp=0.jpg" alt="" />
                        <div className={chatStyle.info}>
                            <p className={chatStyle.hr}>赵军 <span>达克窗帘</span></p>
                            <p className={chatStyle.hi}>您好。。。。。</p>
                        </div>
                    </li> */}
                    {/* 循环遍历数据 */}
                    {
                        contacts.map((item)=>{
                            return (
                                <Link to={`/chatdetail/${item.id}`} className={chatStyle.list} key={item.id}>
                                    <img src={item.image} alt="" />
                                    <div className={chatStyle.info}>
                                        <p className={chatStyle.hr}>{item.name} <span>{item.company}</span></p>
                                        <p className={chatStyle.hi}>{item.chats}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
