import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Tag,BackTop } from 'antd';

// 引入样式
import javaStyle from './index.module.css'
import 'antd/dist/antd.css'


export default class Java extends Component {
    state = {datas: []}
    componentDidMount() {
        axios.get("http://localhost:3000/java").then(
            res=>{
                // console.log(res.data);
                this.setState({datas: res.data})
            }
        )
    }

    render() {
        return (
            <div className={javaStyle.container}>
                <BackTop />
                <ul className={javaStyle.ul}>
                    {
                        this.state.datas.map(item=>
                            <Link to={`/javadetail/${item.id}`} key={item.id}>
                                <li className={javaStyle.lis}>
                                    {/* top-Title */}
                                    <div className={javaStyle.top}>
                                        <div className={javaStyle.title}>
                                            {item.job}
                                        </div>
                                        <div className={javaStyle.price}>
                                            {item.salary}
                                        </div>
                                    </div> 

                                    {/* tag */}
                                    <div className={javaStyle.tag}>
                                        <Tag color="red">{item.demand[0].ask}</Tag>
                                        <Tag color="gold">{item.demand[1].ask}</Tag>
                                        <Tag color="green">{item.demand[2].ask}</Tag>
                                        <Tag color="orange">{item.demand[3].ask}</Tag>
                                        <Tag color="purple">{item.demand[4].ask}</Tag>
                                    </div>

                                    {/* company */}
                                    <div className={javaStyle.company}>
                                        {item.info}
                                    </div>

                                    {/* info */}
                                    <div className={javaStyle.info}>
                                        <div className={javaStyle.person}>
                                            <img className={javaStyle.avatar} src={item.avatar} alt="HR" />
                                            <span>{item.hr}</span>
                                        </div>
                                        <div className={javaStyle.address}>
                                            {item.position}
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        )
                    }
                    
                </ul>
            </div>
        )
    }
}