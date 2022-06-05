import React from 'react'
import {Button, Icon, Spin, Alert} from 'antd'
import fetchJSONP from 'fetch-jsonp'

export default class MovieDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {},
            isLoading: true,
            img: ''
        }
    }

    componentWillMount() {
        let url = `https://api.douban.com/v2/movie/subject/${this.props.match.params.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`
        fetchJSONP(url)
            .then( res => res.json())
            .then( data => {
                this.setState({
                    info: data,
                    isLoading: false,
                    img: data.images.small.replace('img3', 'img1')
                })
            })
    }


    render() {
        return <div>
            <Button type='primary' onClick={this.goBack}>
                <Icon type='left'></Icon>Back to List
            </Button>
            {this.renderInfo()}
        </div>
    }

    renderInfo() {
        if (this.state.isLoading) {
            return <Spin tip='loading'>
                <Alert/>
            </Spin>
        } else {
            return  <div>
                        <div style={{textAlign: 'center'}}>
                            <h1>{this.state.info.title}</h1>

                            <img src={this.state.img} alt=''/>
                        </div>
                        
                        <p style={{textIndent: '2em', textAlign:'center', lineHeight:'30px'}}>{this.state.info.summary}</p>
                </div>
        }
    }


    goBack = () => {
        this.props.history.go(-1)
    }
}