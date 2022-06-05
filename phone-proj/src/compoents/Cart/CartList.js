import React from 'react'
import CartItem from './CartItem.js'


export default class CartList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        const {cart} = this.props.value
        console.log(cart)
        return <div className='container-fluid'>
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={this.props.value} />
            })}
        </div>
    }
}