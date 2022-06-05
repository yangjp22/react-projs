import React from 'react'
import {Spin, Alert, Pagination} from 'antd'
import fetchJSONP from 'fetch-jsonp'
import MovieItem from './movieItem.js'


export default class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            currentPage: parseInt(props.match.params.id) || 1,
            pageSize: 10,
            total: 0,
            isLoading: true,
            movieType: props.match.params.type,
            imgs: []
        }
    }

    componentDidMount() {
        // setTimeout( () => {
        //     this.setState({
        //         isLoading: false
        //     })
        // }, 1000)

        this.loadingMovieByTypeAndPage()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isLoading: true,
            currentPage: parseInt(nextProps.match.params.page) || 1,
            movieType: nextProps.match.params.type,
        }, () => {
            this.loadingMovieByTypeAndPage()
        })
        
    }

    render() {
        return <div>
            {this.renderList()}
        </div>
    }


    loadingMovieByTypeAndPage = () => {
        let start = this.state.pageSize * (this.state.currentPage - 1)
        let url = `https://api.douban.com/v2/movie/${this.state.movieType}?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${this.state.pageSize}`
        fetchJSONP(url, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    Cookie:'ll="108258"; bid=-8MuPEEBVnY; _vwo_uuid_v2=DA34D97E559909CF3481AE4727C4C7F8C|25fca8777300dd36f39d28a4c55516d2; douban-fav-remind=1; gr_user_id=aade902f-5efd-4367-8f9c-3f0a3b216a4c; __guid=223695111.3362004317177349600.1572030612672.282; __gads=ID=ee2ec1a511602ae5:T=1572030614:S=ALNI_MbVT-NqqoRBOfK-3RXwLV-K_0q-WA; trc_cookie_storage=taboola%2520global%253Auser-id%3De4794a81-ed49-4f21-a220-52fac763b2f6-tuct3aafecb; viewed="32581281_5063431_26433805_25733582_26430013_26852057"; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1578811757%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3D0cC3FxeMUhtDa29Wf83fr6OBph7x_Z9YMmUbI2iCM6Mc8A3hH2uZwvgsopa8LA5P%26wd%3D%26eqid%3D8ba381d100134013000000065e1ac169%22%5D; _pk_ses.100001.4cf6=*; __utma=30149280.2004190714.1555285495.1578806134.1578811758.32; __utmz=30149280.1578811758.32.31.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utma=223695111.537760339.1572030613.1572455571.1578811758.3; __utmz=223695111.1578811758.3.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; ap_v=0,6.0; __utmb=30149280.1.10.1578811758; monitor_count=2; _pk_id.100001.4cf6=0b015dabdaff60af.1572030613.3.1578812977.1572455571.; __utmc=30149280; __utmc=223695111; __utmt=1; __utmb=223695111.2.10.1578811758',
                    Host:'movie.douban.com',
                    Referer: 'https://movie.douban.com/'
                }})

        .then ( (response)=> {
            return response.json()
        }).then (data => {
            this.setState( {
                isLoading: false,
                movies: data.subjects,
                total: data.total,
                imgs: data.subjects.map( (item) => {
                    return item.images.small.replace('img3.doubanio.com', 'img3.doubanio.com').replace('.webp', '.jpg')
                })
            })
        })
        // const data = require('../../static/testData/' + this.state.movieType + '.json')
        // setTimeout(() => {
        //     this.setState({
        //         isLoading: false, // 将 loading 效果隐藏
        //         movies: data.subjects, // 为电影列表重新赋值
        //         total: data.total, // 把总条数，保存到 state 上
        //         imgs: data.subjects.map( (item) => {
        //             console.log(item)
        //             return item.images.small.replace('img3.doubanio.com', 'img3.doubanio.com').replace('.webp', '.jpg')
        //         })
        //     })
        // }, 1000)
    }


    // 渲染电影列表
    renderList = () => {
        if (this.state.isLoading) {
            return <Spin tip="Loading...">
                        <Alert message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                </Spin>
        } else {
            return <div>
                        <div style={{display: 'flex', flexWrap:'wrap'}}>
                            {this.state.movies.map( (item, index) => {
                                return <MovieItem {...item} key={item.id} img={this.state.imgs[index]} history={this.props.history}></MovieItem>
                            })}
                        </div>
                        <Pagination defaultCurrent={this.state.currentPage} pageSize={this.state.pageSize} 
                        total ={this.state.total} onChange={this.pageChanged}
                        />
            </div>
            
        }
    }

    //=> 当页面变化时，加载新一页的数据
    pageChanged = (page)=> {
        //=> 最好不要用BOM操作
        // window.location.href = '/#/movie/' + this.state.movieType + '/' + page
        this.props.history.push('/movie/' + this.state.movieType + '/' + page)
    }
}


// ES6 中可以使用fetch API获取数据，fetch API是基于Promise封装的
/*
    当使用fetch API时，第一个.then中，获取不到数据，
        第一个.then 中拿到的是一个response对象，我们可以调用response.json() 返回一个新的Promise对象
        这样在第二个.then中既可以拿到数据
    fetch(url)
    .then( response => {
        return response.json()
    })
    .then( response => {
        console.log(response)
    })
*/

// 若是跨域请求数据，则需要使用fetch-jsonp获取数据， 方法和fetch使用一致
/*
    1. 导入
        import fetchJSONP from 'fetch-jsonp'

*/
