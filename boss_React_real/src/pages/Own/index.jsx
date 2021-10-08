import React, { Component } from 'react'
import { Carousel } from 'antd';
import axios from 'axios';

// 引入样式
import ownStyle from './index.module.css'


// 引入图片
import search from '../../images/own/h1.png'
import icon1 from '../../images/own/h2.png'
import icon2 from '../../images/own/avatar1.png'
import tablist1 from '../../images/own/1.png'
import tablist2 from '../../images/own/2.png'
import tablist3 from '../../images/own/3.png'
import tablist4 from '../../images/own/4.png'
import tablist5 from '../../images/own/5.png'

// 引入音乐


export default class Own extends Component {
    // 定义初始状态保存轮播图的数据
    state={
        swipers:[],
        count:1
    }
    // 获取轮播图数据
    componentDidMount(){
        // console.log(this.state.count);
        let num = 1
        axios.get("http://localhost:3000/swipers").then(
            res => this.setState({
                swipers:res.data
            })
        )
        axios.patch('http://localhost:3000/comment',{
            count:num+1
        })
        axios.get('http://localhost:3000/comment').then(
            res => {
                this.setState({
                    count: res.data.count
                })
            }
        )
        num ++
        
    }
    

    play = () =>{
        console.log(1);
    }
    render() {
        return (
            <div className={ownStyle.container}>
                {/* header */}
                <div className={ownStyle.header}>
                    <div className={ownStyle.text}>有了</div>
                    <div className={ownStyle.search}>
                        <img src={search} alt="" className={ownStyle.img}/>
                        <input className={ownStyle.inp} type="text" placeholder="搜索职位/公司/内容"/>
                    </div>
                    <div className={ownStyle.icon}>
                        <img src={icon1} alt="" className={ownStyle.img} onClick={this.play}/>
                        <img src={icon2} alt="" className={ownStyle.img}/>
                    </div>
                </div>

                {/* 轮播图部分 */}
                <Carousel autoplay>
                    {
                        this.state.swipers.map(item=>
                            <img width="100%" height="180px" src={item.image} alt="" key={item.id} />
                        )
                    }
                </Carousel>
                {/* tablist */}
                <div className={ownStyle.tablist}>
                    <div className={ownStyle.list}>
                        <img src={tablist1} alt="" className={ownStyle.img}/>
                        <p>有了牧场</p>
                    </div>
                    <div className={ownStyle.list}>
                        <img src={tablist2} alt="" className={ownStyle.img}/>
                        <p>今日热榜</p>
                    </div>
                    <div className={ownStyle.list}>
                        <img src={tablist3} alt="" className={ownStyle.img}/>
                        <p>学生圈</p>
                    </div>
                    <div className={ownStyle.list}>
                        <img src={tablist4} alt="" className={ownStyle.img}/>
                        <p>求职冒险</p>
                    </div>
                    <div className={ownStyle.list}>
                        <img src={tablist5} alt="" className={ownStyle.img}/>
                        <p>职业图鉴</p>
                    </div>
                </div>
                
                
                <div className={ownStyle.content}>
                    {/* 关注内容 */}
                    <h3 className={ownStyle.h3}>关注</h3>
                    <p>1、负责公司物联网产品PC端和微信和钉钉小程序H5前端开发与维护工作；</p>
                    <p>2、配合产品完成项目迭代，优化和提升用户体验；</p>
                    <p>3、负责承担性能优化工作；</p>
                    <p>4、预研前端技术和方案，协助技术难题攻关</p>
                    <p>5、编写前端技术文档；</p>

                    {/* 推荐内容 */}
                    <h3 className={ownStyle.h3}>推荐</h3>
                    <p>={">"} 阿里巴巴</p>
                    <p>={">"} 腾讯</p>
                    <p>={">"} 字节跳动</p>
                    <h1 className={ownStyle.brower}>{this.state.count}次浏览</h1>
                    <div className={ownStyle.none}></div>
                </div>
                
            </div>
        )
    }
}
