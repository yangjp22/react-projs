import React from 'react'
import {Rate} from 'antd'

// const imgs = require('../../static/img/model.jpg')

export default class MovieItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return <div style={{border: '1px solid #ccc', textAlign:'center', width:'170px', height:'190px', margin:'6px', boxShadow: '0 0 6px #ddd', padding:'4px', cursor:'pointer'}}
                    onClick={this.goDetail}>
            {/* <img src={this.props.images.small.replace('img3.doubanio.com', 'img3.doubanio.com').replace('.webp', '.jpg')} alt=''
                style={{width:'100px', height:'140px'}}
                /> */}
            {/* <img src={this.props.img} alt='' style={{width:'100px', height:'140px'}}/> */}
            <div style={{height: '35px'}}></div>
            <h4>Name: {this.props.title}</h4>
            <h4>Release: {this.props.year}</h4>
            <h4>Genres: {this.props.genres.join(', ')}</h4>
            <Rate disabled defaultValue={this.props.rating.average / 2}></Rate>
        </div>
    }

    goDetail = () => {
        this.props.history.push('/movie/detail/' + this.props.id)
    }
}