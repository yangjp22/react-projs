import React from 'react'
import {Link} from 'react-router-dom'

export default class CartTotals extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        const {cartSubTotal, cartTax, cartTotal, clearCart} = this.props.value
        return <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
                        <Link to='/cart'>
                            <button className='btn btn-outline-danger text-uppercase mb-3 px-5' type='button' onClick={() => {clearCart()}}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className='text-title'>
                                subtotal: <span><strong>$ {cartSubTotal}</strong></span>
                            </span>
                        </h5>
                        <h5>
                            <span className='text-title'>
                                tax: <span><strong>$ {cartTax}</strong></span>
                            </span>
                        </h5>
                        <h5>
                            <span className='text-title'>
                                total: <span><strong>$ {cartTotal}</strong></span>
                            </span>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}