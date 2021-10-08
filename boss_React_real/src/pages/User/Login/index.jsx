import React, { Component } from 'react'
import { message, Button } from 'antd';
import style from './index.module.css'

import bgImg from '../../../images/login.webp'

const success = (code) => {
    // console.log(code);
    message.success(`您的验证码为：${code}`);
    return code
};
const error = () => {
    message.error('验证码错误');
};
const warning = (msg) => {
    message.warning(msg);
};

// 存放获取到的验证码，用于验证使用
let savenum = ''
export default class Login extends Component {
    // 设置初始状态
    state={
        isShowLogin: true,
        phoneNumber: '',
        isDisabled: true,
        countDown: 5,
        // 选取随机验证码
        codeStr:'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        sucRandom: ''
    }

    // 创建ref容器
    // 输入手机号
    myRef = React.createRef()
    // 输入验证码 
    myRef2 = React.createRef()

    // 生成随机数
    getRandom = (n, m)=>{
        n = Number(n);
        m = Number(m);
        // 确保 m 始终大于 n
        if (n > m) {
            var temp = n;
            n = m;
            m = temp;
        }
        return Math.floor(Math.random()*(m - n) + n);
    }

    // 通过随机数找到对应位置字符
    getCode = ()=>{
        //存放字符
        let str = ''
        // 生成4位
        for (let i = 0;i < 6;i ++) {
            let randomStr = this.getRandom(0, this.state.codeStr.length);
            str += this.state.codeStr.charAt(randomStr);
        }
        // console.log(str);
        return str
    }

    // 点击获取验证码
    getResume = ()=>{
        // 解构
        const {value} = this.myRef.current
        // 判断输入的手机号不能为空以及位数为11才可登录
        if(value !== '' && value.length === 11){
            // 获取验证码成功
            let result = success(this.getCode())
            // console.log("result",result);
            // 将获取的验证码赋值给全局变量：savenum
            savenum = result
            console.log("您的验证码是：",savenum);
            // 修改state
            this.setState({
                isShowLogin: false,
                phoneNumber: value
            })
            // 获取成功清除输入框
            this.myRef.current.value = ''
            
            // 重新获取按钮-倒计时
            this.timer = setInterval(()=>{
                if(this.state.countDown <= 0){
                    // 清除
                    clearInterval(this.timer)
                    
                    // 按钮接触禁用
                    this.setState({
                        countDown: 10,
                        isDisabled: false
                    })
                }else {
                    this.setState({countDown: this.state.countDown -1})
                }
            },1000)
        }else {
            // 输入手机号格式错误
            warning('手机号码格式错误')
        }
    }

    // 点击登录
    handlelogin = ()=>{
        // console.log(this.myRef2.current.value);
        const {value} = this.myRef2.current
        // 判断验证码是否正确
        if(value === savenum){
            this.props.history.push('/home/web')
        }else if(value === ""){
            warning('请输入验证码');
        }else{
            error()
        }
    }

    // 重新获取验证码
    handlenewResume = ()=>{
        this.setState({isDisabled: true})
        // console.log(success(this.getCode()));
        let result = success(this.getCode())
        savenum = result
        console.log("重新获取的验证码是：",savenum);
        this.timer = setInterval(()=>{
            if(this.state.countDown <= 0){
                // 清除
                clearInterval(this.timer)
                
                // 按钮可用
                this.setState({
                    countDown: 10,
                    isDisabled: false
                })
            }else {
                this.setState({countDown: this.state.countDown -1})
            }
        },1000)
    }
    render() {
        // console.log(this.state.phoneNumber);
        const {isShowLogin,phoneNumber,isDisabled,countDown} = this.state
        return (
            <div>
                <div className={style.bgimg}>
                    <img src={bgImg} alt="" />
                </div>
                {/* 12345678909 */}
                {
                    isShowLogin? 
                    <div>
                        <h2 className={style.please}>请输入手机号</h2>
                        <div className={style.oper}>
                            <input type="text" placeholder="请输入手机号" ref={this.myRef}/>
                            <Button type="primary" className={style.btn} onClick={this.getResume}>获取验证码</Button>
                        </div>
                    </div>
                    : 
                    <div>
                        <h2 className={style.please2}>已发送至: <span>+86 {phoneNumber}</span></h2>
                        <div className={style.oper}>
                            <input type="text" placeholder="请输入验证码" ref={this.myRef2}/>
                            <Button type="primary" className={style.btn} onClick={this.handlelogin}>登录</Button>
                            <Button type="primary" className={style.btn2} disabled={isDisabled} onClick={this.handlenewResume}>重新获取{countDown}</Button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
