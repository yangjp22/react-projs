
import React from 'react'
import {connect} from 'react-redux'
import action from '../store/action/index.js'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        
        }
    }

    render() {
        let {data} = this.props
        let len = data.filter(item => (parseInt(item.state) === 0)).length
        return <div className='panel-heading'>
                <h3 className='panel-title text-info' style={{textAlign:'center'}}>To Do List: <span className="text-danger">{len}</span> pending Items</h3><br/>
                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Please enter the task to be completed" onKeyUp = {this.keyUp}/>
                </div>
        </div>
    }

    keyUp = ev => {
        //=> Enter event
        if (ev.keyCode === 13) {
            let value = ev.target.value.trim()

            if (value.length === 0) {
                return
            }

            this.props.add({
                name: value,
                //=> state=0表示未完成事件
                state: 0
                
            })
            ev.target.value = ''
        }
        
    }
}

export default connect(state=>({...state.todo}), action.todo)(Header)