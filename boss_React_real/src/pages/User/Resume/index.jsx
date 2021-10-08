import React, { Component } from 'react'
import axios from 'axios'
import { Button,Modal,Descriptions,Input } from 'antd';
// 引入粒子效果
import ParticlesBg from 'particles-bg'
import style from './index.module.css'

export default class Resume extends Component {
    state={
        UserName:"",
        Telephone:"",
        Live:"",
        Remark:"",
        skill:"",
        isModalVisible:false
    }
    componentDidMount() {
        axios.get('http://localhost:3000/resume').then(
            res => {
                const {UserName,Telephone,Live,Remark,skill} = res.data
                this.setState({UserName,Telephone,Live,Remark,skill})
            }
        )
    }

    // 控制显示模态框
    showModal = () => {
        this.setState({isModalVisible:true})
    };
    
    //   点击模态框确认按钮
    handleOk = () => {
        const UserName = this.myRef1.current.state.value
        const Telephone = this.myRef2.current.state.value
        const Live = this.myRef3.current.state.value
        const Remark = this.myRef4.current.state.value
        const skill = this.myRef5.current.state.value
        this.setState({
            isModalVisible:false,
            UserName,
            Telephone,
            Live,
            Remark,
            skill
        })
        axios.patch('http://localhost:3000/resume',{
            UserName,
            Telephone,
            Live,
            Remark,
            skill
        })
    };
    
    // 点击模态框取消按钮
    handleCancel = () => {
        this.setState({isModalVisible:false})
    }

    // 穿件ref容器
    myRef1 = React.createRef()
    myRef2 = React.createRef()
    myRef3 = React.createRef()
    myRef4 = React.createRef()
    myRef5 = React.createRef()

    render() {
        // console.log(this.state.myResume);
        const {UserName,Telephone,Live,Remark,skill} = this.state
        // console.log(UserName,Telephone,Live,Remark,skill)
        return (
            <div>
                <div className={style.bg}>
                    <ParticlesBg type="random" width="100%"/>
                </div>
                <Descriptions title="简历" className={style.descr}>
                    <Descriptions.Item label="姓名">{UserName}</Descriptions.Item>
                    <Descriptions.Item label="电话">{Telephone}</Descriptions.Item>
                    <Descriptions.Item label="地址">{Live}</Descriptions.Item>
                    <Descriptions.Item label="座右铭">{Remark}</Descriptions.Item>
                    <Descriptions.Item label="技术">{skill}</Descriptions.Item>
                </Descriptions>
                <Button type="primary" className={style.btn} onClick={this.showModal}>修改简历</Button>
                <Modal title="修改简历" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Input style={{marginTop:"20px"}} ref={this.myRef1} placeholder="UserName" />
                    <Input style={{marginTop:"20px"}} ref={this.myRef2} placeholder="Telephone" />
                    <Input style={{marginTop:"20px"}} ref={this.myRef3} placeholder="Live" />
                    <Input style={{marginTop:"20px"}} ref={this.myRef4} placeholder="Remark" />
                    <Input style={{marginTop:"20px"}} ref={this.myRef5} placeholder="Skill" />
                </Modal>
            </div>
        )
    }
}
