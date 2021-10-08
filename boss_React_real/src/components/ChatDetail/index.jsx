import React, { Component } from 'react'
import axios from 'axios'
import {
    LeftOutlined,
    SmallDashOutlined
} from '@ant-design/icons'

// 
import chatStyle from './index.module.css'

export default class ChatDetail extends Component {
    // 初始化数据
    state = {
        chatdetail:[],
        say: '',
        mylang: ["您好！","我是波仔","大学就读于计算机科学系软件技术专业"],
    }
    myRef = React.createRef()
    componentDidMount(){
        const {id} = this.props.match.params
        // console.log(id);
        axios.get('http://localhost:3000/chat').then(
            res => {
                this.setState({ 
                    chatdetail: res.data[id] ,
                    say: res.data[id].chats
                },()=>{
                    if(this.myRef.current){
                        this.myRef.current.focus()
                    };
                })
                // console.log(this.state.chatdetail);
            }
        )
    }

    handleBack = ()=>{
        this.props.history.goBack()
    }
    sendMsg = ()=>{
        // console.log(this.myRef.current.value);
        const {mylang} = this.state
        const {value} = this.myRef.current
        // console.log(value);
        if(value.trim() !== ''){
            mylang.push(value)
            this.setState({})
        }
        // console.log(mylang);
        this.myRef.current.value = ""
    }

    // 输入完成按下回车键发送
    handlekeyup = (e)=>{
        const {mylang} = this.state
        const {value} = this.myRef.current
        if(e.keyCode === 13 && value.trim() !== '') {
            mylang.push(value)
            this.setState({})
            // console.log(mylang);
            this.myRef.current.value = ""
        }
        
    }
    render() {
        // console.log(this.state.say);
        const {chatdetail,say,mylang} = this.state
        return (
            <div className={chatStyle.container}>
                
                {/* hearder */}
                <div className={chatStyle.header}>
                    {/* 返回按钮 */}
                    <div className={chatStyle.back} onClick={this.handleBack}>
                        <LeftOutlined style={{fontSize:20}}/>
                    </div>
                    {/* 中间hr信息 */}
                    <div className={chatStyle.info}>
                        <h3 className={chatStyle.name}>{chatdetail.name}</h3>
                        <p className={chatStyle.company}>{chatdetail.company}</p>
                    </div>
                    {/* 右侧更多icon */}
                    <div className={chatStyle.icon}>
                        <SmallDashOutlined />
                    </div>
                </div>

                {/* content */}
                <div className={chatStyle.content}>
                    

                    {/* my */}
                    <ul>
                        <li className={chatStyle.list}>
                            {/* boss */}
                            <div className={chatStyle.boss}>
                                <img src={chatdetail.image} alt="" />
                                <div className={chatStyle.say}>{say.slice(5)}</div>
                            </div>
                        </li>
                        {
                            mylang.map((item,index)=>{
                                return (
                                    <li className={chatStyle.list} key={index}>
                                        <div className={chatStyle.my}>
                                            <div className={chatStyle.mysay}>{item}</div>
                                            <img className={chatStyle.myimg} src="https://img1.baidu.com/it/u=2625736609,3126284218&fm=26&fmt=auto&gp=0.jpg" alt="" />
                                        </div>
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                    
                </div>
                
                {/* footer-input */}
                <div className={chatStyle.footer}>
                    <input ref={this.myRef} type="text" placeholder="新消息" onKeyUp={this.handlekeyup}/>
                    <button type="button" onClick={this.sendMsg}>发送</button>
                </div>
                
            </div>
        )
    }
}
