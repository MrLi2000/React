import React, { Component } from 'react'
import {
    DashOutlined,
    DownOutlined
  } from '@ant-design/icons';
import { Popover,Menu, Dropdown } from 'antd';

import {Link} from 'react-router-dom'
//   引入图片
import job1 from '../../images/user/01.png'
import job2 from '../../images/user/02.png'
import often1 from '../../images/user/03.png'
import often2 from '../../images/user/04.png'
import often3 from '../../images/user/05.png'
import other1 from '../../images/userTail/1.png'
import other2 from '../../images/userTail/2.png'
import other3 from '../../images/userTail/3.png'
import other4 from '../../images/userTail/4.png'
import other5 from '../../images/userTail/5.png'
import other6 from '../../images/userTail/6.png'
import other7 from '../../images/userTail/7.png'


// 引入样式
import userStyle from './index.module.css'


// 气泡卡片
const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

// 下拉菜单
const menu = (
    <Menu>
      <Menu.Item>
            账号绑定
      </Menu.Item>
      <Menu.Item>
            通知与提醒
      </Menu.Item>
      <Menu.Item>
            隐私设置
      </Menu.Item>
    </Menu>
  );
export default class User extends Component {


    render() {
        return (
            <div className={userStyle.container}>
                {/* header */}
                <div className={userStyle.header}>
                    <div className={userStyle.top}>
                        <div className={userStyle.icon}>
                            <Popover placement="bottomRight" title={text} content={content} trigger="click">
                                <DashOutlined />   &nbsp;&nbsp;&nbsp;
                            </Popover>
                            <Dropdown overlay={menu} placement="bottomRight" arrow>
                                <DownOutlined />
                            </Dropdown>
                        </div>
                    </div>
                    <div className={userStyle.bottom}>
                        <div className={userStyle.login}>
                            <Link to="/login"  className={userStyle.h2}>登录</Link><br />
                            <Link to="/resume" className={userStyle.h5}>在线编辑简历</Link>
                        </div>
                        <div className={userStyle.img}>
                            <img src="https://img1.baidu.com/it/u=2625736609,3126284218&fm=26&fmt=auto&gp=0.jpg" alt="" />
                        </div>
                    </div>
                </div>

                {/* content */}
                <div className={userStyle.content}>
                    
                    {/* 求职助手 */}
                    <h3 className={userStyle.h3}>求职助手</h3>
                    <div className={userStyle.job}>
                        <div className={userStyle.option}>
                            <span>简历刷新</span>
                            <img src={job1} alt="" />
                        </div>
                        <div className={userStyle.option}>
                            <span>竞争力分析</span>
                            <img src={job2} alt="" />
                        </div>
                    </div>

                    {/* 常用功能 */}
                    <h4 className={userStyle.h4}>常用功能</h4>
                    <div className={userStyle.often}>
                        <div className={userStyle.option}>
                            <img src={often1} alt="" />   
                            <span>在线简历</span>
                        </div>
                        <div className={userStyle.option}>
                            <img src={often2} alt="" />
                            <span>附件简历</span>
                        </div>
                        <div className={userStyle.option}>
                            <img src={often3} alt="" />
                            <span>求职意向</span>
                        </div>
                    </div>

                    {/* 其他功能 */}
                    <h4 className={userStyle.h4}>其他功能</h4>
                    <div className={userStyle.other}>
                        <div className={userStyle.otheroption}>
                            <img src={other1} alt="" />   
                            <span>个人主页</span>
                        </div>
                        <div className={userStyle.otheroption}>
                            <img src={other2} alt="" />
                            <span>就业辅导</span>
                        </div>
                        <div className={userStyle.otheroption}>
                            <img src={other3} alt="" />
                            <span>帮助反馈</span>
                        </div>
                        <div className={userStyle.otheroption}>
                            <img src={other4} alt="" />
                            <span>我的客服</span>
                        </div>
                        <div className={userStyle.otheroption}>
                            <img src={other5} alt="" />
                            <span>违规公告</span>
                        </div>
                        <div className={userStyle.otheroption}>
                            <img src={other6} alt="" />
                            <span>关于</span>
                        </div>
                        <div className={userStyle.otheroption}>
                            <img src={other7} alt="" />
                            <span>薪酬查询</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
