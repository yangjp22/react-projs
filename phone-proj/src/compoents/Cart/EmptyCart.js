import React from 'react'
import {Link} from 'react-router-dom'

export default class EmptyCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return <div className='container mt-5'>
            <div className='row'>
                <div className='col-10 mx-auto text-center text-title'>
                    <h1>Your cart is currently empty.</h1>
                    <br/>
                    <h2>
                        <Link to='/'>Glick to shop</Link>
                    </h2>
                </div>
            </div>
            
        </div>
    }
}