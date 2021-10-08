import React, { Component } from 'react'
import axios from 'axios';
import {
    LeftOutlined,
    HeartOutlined,
    ForkOutlined,
    ExclamationCircleOutlined,
    EnvironmentOutlined,
    MinusSquareOutlined,
    FileDoneOutlined
} from '@ant-design/icons'
import { Tag } from 'antd';

import detailStyle from './index.module.css'


export default class Detail extends Component {
    // 设置状态
    state = {
        detailWebData: [],
        exp: '',
        edu: ''
    }

    // 发送请求
    componentDidMount() {
        // 接收传递的参数
        const {id} = this.props.match.params
        axios.get('http://localhost:3000/java').then(
            res => {
                // console.log(res.data);
                this.setState({
                    detailWebData:res.data[id-1],
                    exp: res.data[id-1].demand[0].ask,
                    edu: res.data[id-1].demand[1].ask
                })
                // console.log(this.state.detailWebData);
                // console.log(this.state.exp);
            }
        )
    }

    // 点击返回icon返回
    handleBack = () => {
        this.props.history.goBack()
        // this.props.history.go(-1)
    }

    // 点击“立即沟通”跳转至message页面
    goChat = () => {
        this.props.history.push(`/message`)
    }
    render() {
        // console.log(this.props.match.params.id);
        const {detailWebData,exp,edu} = this.state
        return (
            <div className={detailStyle.container}>
                {/* 顶部图标 */}
                <div className={detailStyle.topIcon}>
                    {/* 左侧图标 */}
                    <div className={detailStyle.iconLeft} onClick={this.handleBack}>
                        <LeftOutlined style={{fontSize:20}}/>
                    </div>
                    {/* 右侧图标 */}
                    <div className={detailStyle.iconRight}>
                        <HeartOutlined style={{fontSize:20}} />
                        <ForkOutlined style={{fontSize:20}} className={detailStyle.sy}/>
                        <ExclamationCircleOutlined style={{fontSize:20}} />
                    </div>
                </div>

                {/* 渲染内容界面 */}
                <div className={detailStyle.workInfo}>
                    <ul>
                        {
                            <li key={detailWebData.id} className={detailWebData.liInfo}>
                                {/* 详情顶部 */}
                                <div className={detailStyle.top}>
                                    <h3 className={detailStyle.job}>{detailWebData.job}</h3>
                                    <div className={detailStyle.salary}>{detailWebData.salary}</div>
                                </div>

                                {/* 地址、经验、学历相关信息 */}
                                <div className={detailStyle.address}>
                                    <div><EnvironmentOutlined /> {detailWebData.position}</div>
                                    <div><MinusSquareOutlined /> {exp}</div>
                                    <div><FileDoneOutlined /> {edu}</div>
                                </div>
                                {/* 线条 */}
                                <div className={detailStyle.hr}></div>

                                {/* hr信息 */}
                                <div className={detailStyle.avatar}>
                                    {/* hr头像 */}
                                    <img src={detailWebData.avatar} alt="" width="50px" height="50px" />
                                    {/* hr-state */}
                                    <div>
                                        <div className={detailStyle.hrPerson}>{detailWebData.hr}</div>
                                        <div className={detailStyle.fontSizeSmall}>刚刚活跃</div>
                                    </div>
                                </div>
                                {/* 线条 */}
                                <div className={detailStyle.hr}></div>
                                
                            </li>
                        }
                    </ul>

                    {/* 职位详情 */}
                    <div className={detailStyle.introduce}>
                        <Tag color="red">HTML</Tag>
                        <Tag color="gold">CSS</Tag>
                        <Tag color="purple">JavaScript</Tag>
                        <Tag color="green">Vue</Tag>
                        <h3 className={detailStyle.h3}>职位详情</h3>
                        <h4>职位职责：</h4>
                        <p>1、负责公司物联网产品PC端和微信和钉钉小程序H5前端开发与维护工作；</p>
                        <p>2、配合产品完成项目迭代，优化和提升用户体验；</p>
                        <p>3、负责承担性能优化工作；</p>
                        <p>4、预研前端技术和方案，协助技术难题攻关；</p>
                        <p>5、编写前端技术文档；</p>


                        
                        <h4>技能要求：</h4>
                        <p>1、全日制本科及以上，熟悉JS语言，熟悉vue前端框架优先，有独立搭建项目经验；</p>
                        <p>2、熟悉常用的项目构建工具，如: webpack等；</p>
                        <p>3、熟练使用git进行项目管理，有团队协作开发经验；</p>
                        <p>4、熟悉css预处理器；</p>
                        <p>5、熟悉智慧园区，智慧社区物联网开发经验优先；</p>
                        <p>6、有封装过前端组件化、搭建过前端微服务化工作经验者优先；</p>
                        <div className={detailStyle.none}></div>
                        <div className={detailStyle.btnBox}>
                            <button onClick={this.goChat} className={detailStyle.btn}>立即沟通</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
