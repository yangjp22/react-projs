import React from 'react'

// 布局相关组件
import { Layout, Menu } from 'antd'

// 路由相关组件
import {Link, Route, Switch} from 'react-router-dom'

import MovieList from './movieList.js'
import MovieDetail from './movieDetail.js'


const { Content, Sider } = Layout;


export default class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return  <Layout style={{height: '100%'}}>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="1"><Link to='/movie/in_theaters/1'>In Theaters</Link></Menu.Item>
                            <Menu.Item key="2"><Link to='/movie/coming_soon/1'>Coming Soon</Link></Menu.Item>
                            <Menu.Item key="3"><Link to='/movie/top250/1'>TOP 250</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ paddingLeft: '1px' }}>
                        <Content
                            style={{
                                // background: '#fff',
                                padding: 10,
                                margin: 0,
                                minHeight: 280,
                            }}>
                            <Switch>
                                <Route path="/movie/detail/:id" component={MovieDetail}></Route>
                                <Route path="/movie/:type/:page" component={MovieList}></Route>
                            </Switch>
                            
                        </Content>
                    </Layout>
                </Layout>
    }


}