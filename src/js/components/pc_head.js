import React from 'react'
import {Row, Col, Menu,Icon,Tabs,message,Form,Input,Button,Modal} from 'antd'
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class PCHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            current:"tiyu",
            modalVisible:false,
            action:'login',
            hasLogined:false,
            nickname:"111",
            userId:""
        };
    }
    // 点击导航
    handleClick(e){
        if (e.key ==='register'){
            this.setState({current:'register'});
            this.setModalVisible(true);
        }else {
            this.setState({current:e.key});
        }
    };
    // 设置模态框
    setModalVisible(value){
        this.setState({modalVisible:value})
    }
    // 提交数据(向api)
    handleSubmit(e){
        //  阻止冒泡
        e.preventDefault();
        var myFetchOptions ={
            method:'get'
        };
        this.props.form.validateFields((err, formData) => {
            if (!err) {
                fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
                    + "&username="+formData.userName+"&password="+formData.password
                    +"&r_userName=" + formData.r_userName + "&r_password="
                    + formData.r_password + "&r_confirmPassword="
                    + formData.r_confirmPassword, myFetchOptions)
                    .then(response => response.json())
                    .then(json => {
                        this.setState({nickname: json.NickUserName, userId: json.UserId});
                    });
                if (this.state.action ==='login'){
                    console.log(this.state.action);
                    this.setState({hasLogined:true});
                }
                message.success("请求成功！");
                this.setModalVisible(false);
            }
        });

    };
    changeTab(key){
        if (key ==="1"){
            this.setState({action:"login"});
        }else if(key ==="2"){
            this.setState({action:"register"});
        }
    }
    render(){
        let {getFieldDecorator} = this.props.form;
        /*判断用户是否登录*/
        console.log(this.state.hasLogined);
        const userShow = this.state.hasLogined
            ? <Menu.Item key="logout" className="register">
                <a href="javascript:;" className="regLink">欢迎你，{this.state.nickname}</a>
                <a target="_blank" className="regLink">
                    <Button type="dashed" htmlType="button">个人中心</Button></a>
                <a target="_blank" className="regLink">
                    <Button type="ghost" htmlType="button">退出</Button></a>
             </Menu.Item>
            : <Menu.Item key="register" class="register">
                <Icon type="appstore"/>注册/登录
             </Menu.Item>;

       return(
          <header id="header">
              <Row>
                  <Col span={2}></Col>
                  <Col span={4}>
                      <a href="javescript:;" className="logo">
                          <img src="./src/image/new_logo.png" alt="logo"/>
                          <span>新闻资讯</span>
                      </a>
                  </Col>
                  <Col span={16}>
                      <Menu
                          mode="horizontal"
                          selectedKeys={[this.state.current]}
                          onClick={this.handleClick.bind(this)}
                      >
                          <Menu.Item key="top">
                              <Icon type="appstore" />新闻头条
                          </Menu.Item>
                          <Menu.Item key="tiyu">
                              <Icon type="appstore" />体育
                          </Menu.Item>
                          <Menu.Item key="yule">
                              <Icon type="appstore" />娱乐
                          </Menu.Item>
                          {userShow}
                      </Menu>

                      <Modal
                          title="用户中心"
                          visible={this.state.modalVisible}
                          wrapClassName="vertical-center-modal"
                          onOk={()=>this.setModalVisible(false)}
                          onCancel={()=>this.setModalVisible(false)}
                          okText="确认"
                          cancelText="取消"
                      >
                          <Tabs type="card" onChange={this.changeTab.bind(this)}>
                              {/*登录*/}
                              <TabPane tab="登录" key="1">
                                  <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                      <FormItem label="账户">
                                          {getFieldDecorator('userName')(
                                              <Input placeholder="请输入您的用户名"/>
                                          )}
                                      </FormItem>
                                      <FormItem label="密码">
                                          {getFieldDecorator('password')(
                                              <Input placeholder="请输入您的密码"/>
                                          )}
                                      </FormItem>
                                      <Button type="primary" htmlType="submit">登录</Button>
                                  </Form>
                              </TabPane>

                              {/*注册*/}
                              <TabPane tab="注册" key="2">
                                  <Form onSubmit={this.handleSubmit.bind(this)}>
                                      <FormItem label="用户名">
                                          {getFieldDecorator('r_userName')(
                                              <Input placeholder="请输入您的用户名"/>
                                          )}
                                      </FormItem>
                                      <FormItem label="密码">
                                          {getFieldDecorator('r_password')(
                                              <Input type="password" placeholder="请输入您的密码"/>
                                          )}
                                      </FormItem>
                                      <FormItem label="确认密码">
                                          {getFieldDecorator('r_confirmPassword')(
                                              <Input type="password" placeholder="请再次输入密码"/>
                                          )}
                                      </FormItem>
                                      <Button type="primary" htmlType="submit">注册</Button>
                                  </Form>
                              </TabPane>

                          </Tabs>

                      </Modal>

                  </Col>
                  <Col span={2}>

                  </Col>
              </Row>
          </header>
        );
    };
}
// 二次封装
export default PCHeader = Form.create({})(PCHeader);