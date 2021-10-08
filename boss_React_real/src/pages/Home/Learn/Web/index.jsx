import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Tag,BackTop  } from 'antd';

// 引入样式
import webStyle from './index.module.css'
import 'antd/dist/antd.css'


export default class Web extends Component {
    state = {datas: []}
    componentDidMount() {
        axios.get("http://localhost:3000/jobs").then(
            res=>{
                // console.log(res.data);
                this.setState({datas: res.data})
            }
        )
    }

    render() {
        return (
            <div className={webStyle.container}>
                <BackTop />
                <ul className={webStyle.ul}>
                    {
                        this.state.datas.map(item=>
                            <Link to={`/webdetail/${item.id}`} key={item.id}>
                                <li className={webStyle.lis}>
                                    {/* top-Title */}
                                    <div className={webStyle.top}>
                                        <div className={webStyle.title}>
                                            {item.job}
                                        </div>
                                        <div className={webStyle.price}>
                                            {item.salary}
                                        </div>
                                    </div> 

                                    {/* tag */}
                                    <div className={webStyle.tag}>
                                        <Tag color="red">{item.demand[0].ask}</Tag>
                                        <Tag color="gold">{item.demand[1].ask}</Tag>
                                        <Tag color="green">{item.demand[2].ask}</Tag>
                                        <Tag color="orange">{item.demand[3].ask}</Tag>
                                        <Tag color="purple">{item.demand[4].ask}</Tag>
                                    </div>

                                    {/* company */}
                                    <div className={webStyle.company}>
                                        {item.info}
                                    </div>

                                    {/* info */}
                                    <div className={webStyle.info}>
                                        <div className={webStyle.person}>
                                            <img className={webStyle.avatar} src={item.avatar} alt="HR" />
                                            <span>{item.hr}</span>
                                        </div>
                                        <div className={webStyle.address}>
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
