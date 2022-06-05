
import React from 'react'
import {connect} from 'react-redux'
import action from '../store/action/index.js'

class Footer extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.showData = [
            {text: 'All', flag:'all'},
            {text: 'Finished', flag:'complete'},
            {text: 'Unfinished', flag:'uncomplete'},
    ]
    }

    render() {
        let {flag} = this.props
        return <div className='panel-footer'>
                <ul className="nav nav-pills" onClick={this.upDateFilter}>
                    {this.showData.map((item, index) => {
                        return <li role='presentation' className={flag === item.flag ? 'active': null}key={index}>
                            <a href="#" onClick={ev => ev.preventDefault()} flag={item.flag}>{item.text}</a>
                        </li>
                    })}

                </ul>
        </div>
    }

    
    upDateFilter = ev => {
        let target = ev.target
        let tarTag = target.tagName
        //=> 合并事件源， 事件源是LI,也让其变为里面的A
        if (tarTag === 'LI') {
            target = target.firstElementChild
            tarTag = target.tagName
        }

        if (tarTag === 'A') {
            let text = target.getAttribute('flag')
            if (this.props.flag === text) {
                return
            }
            this.props.filter(text)
        }
    }

}

export default connect(state => ({...state.todo}), action.todo)(Footer)