import React from 'react'

// 导入路由组件
import {HashRouter, Link, Route, Switch} from 'react-router-dom'

// 导入antd
import { Layout, Menu } from 'antd';

// 导入css样式
import './index.css'

// 导入组件
import Home from './component/home/home.js'
import Movie from './component/movie/movie.js'
import About from './component/about/about.js'


const { Header, Content, Footer } = Layout;


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return <HashRouter>
            <Layout className="layout" style={{height:'100%'}}>
              <Header>
                <div className="logo" />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                  style={{ lineHeight: '64px' }}
                >
                
                  {/* <Menu.Item key="home">
                    <Link to='/home'>Home</Link>
                  </Menu.Item> */}
                  <Menu.Item key="movie">
                    <Link to='/movie/in_theaters/1'>movie</Link>
                  </Menu.Item>
                  {/* <Menu.Item key="about">
                    <Link to='/about'>About</Link>
                  </Menu.Item> */}
                </Menu>
              </Header>
              
              <Content style={{ padding: '0 50px', flex:1}}>
                <Switch>
                  <Route path='/home' component={Home}></Route>
                  <Route path='/movie' component={Movie}></Route>
                  <Route path='/about' component={About}></Route>
                </Switch>
              </Content>
              
              <Footer style={{ textAlign: 'center' }}>FilmOn ©2019 Created by Jinpeng Yang</Footer>
            </Layout>
    </HashRouter>

  }
}

