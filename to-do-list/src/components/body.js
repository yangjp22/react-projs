
import React from 'react'
import {connect} from 'react-redux'
import action from '../store/action/index.js'


class Body extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }
    
    render() {
        let Styles = {
            liStyle: {
                position: 'relative',
            },
            pStyle: {
                verticalAlign: 'top',
                textTransform: 'capitalize'
            },
            aStyle: {
                textAlign: 'center',
                width: '50px',
                height: '20px',
                position: 'absolute',
                right: '10px',
                top: '11px',
                buttom: '0px',
                margin: 'auto',
                textDecoration: 'none'
            }
        }
        
        //=> 根据flag标识筛选对应的数据
        let {data, flag} = this.props
        data = data.filter(item => {
            let {state} = item
            state = parseFloat(state)
            
            if (flag === 'complete') return state === 1
            if (flag === 'uncomplete') return state === 0

            return true
        })

        return <div className="panel-body">
            <ul className='list-group'>
                { data.map((item, index) => {
                    let {id, name, state} = item
                    state = parseFloat(state)
                    return <li className='list-group-item' style={Styles.liStyle} key={index}>
                            <input type='checkbox' name='todo' checked={!!state} onChange={ev => {
                                //=> 更新当前状态
                                let newState = ev.target.checked ? 1:0
                                this.props.updateState(id, newState)
                            }}/>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className = {state===1? 'delete text-warning':'text-warning'} style={Styles.pStyle}>{name}</span>
                            <a href = '#'
                                onClick = {
                                    ev => {
                                        let isOk = window.confirm('Are you sure to delete it?')
                                        if (isOk) {
                                            this.props.remove(id)
                                        }
                                        ev.preventDefault()
                                }} className='btn-danger' style={Styles.aStyle}>Delete</a>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}


export default connect(state=>({...state.todo}), action.todo)(Body)








































