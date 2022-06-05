import React from 'react'
import {storeProducts, detailProduct} from '../data.js'


const ProductContext = React.createContext();


class ProductProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: JSON.parse(JSON.stringify(storeProducts)),
            detailProduct: JSON.parse(JSON.stringify(detailProduct)),
            cart: [],
            modalOpen: false,
            modalProduct: detailProduct,
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0
        }
    }

    getItemById = (id) => {
        const product = this.state.products.find(item => item.id === id)
        return product
    }

    handleDetail = (id) => {
        const product = this.getItemById(id)
        this.setState({
            detailProduct: product,
        })
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItemById(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        product.total = product.price * product.count
        this.setState({
            products: tempProducts,
            cart: [...this.state.cart, product]
        }, () => {
            this.addTotals()
        })
    }

    openModal = (id) => {
        const product = this.getItemById(id)
        this.setState({
            modalProduct: product,
            modalOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false,
        })
    }

    increment = (id) => {
        let tempCart = [...this.state.cart]
        let selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const tempProduct = tempCart[index]
        tempProduct.count += 1
        tempProduct.total = tempProduct.count * tempProduct.price

        this.setState({
            cart: [...tempCart]
        }, () => {
            this.addTotals()
        })
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart]
        let selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const tempProduct = tempCart[index]
        tempProduct.count -= 1
        
        if (tempProduct.count === 0) {
            this.removeItem(id)
        } else {
            tempProduct.total = tempProduct.count * tempProduct.price
            this.setState({
                cart: [...tempCart]
            }, () => {
                this.addTotals()
            })

        }
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => item.id !== id)

        const index = tempProducts.indexOf(this.getItemById(id))
        let removedProduct = tempProducts[index]
        removedProduct.count = 0
        removedProduct.inCart = false
        removedProduct.total = 0

        this.setState({
            cart: [...tempCart],
            products: [...tempProducts]
        }, () => {
            this.addTotals()
        })

    }

    clearCart = () => {
        this.setState({
            cart: [],

        }, () => {
            this.setState({
                products: JSON.parse(JSON.stringify(storeProducts))
            }, () => {
                this.addTotals()
            })
        })
    }

    addTotals = () => {
        let subTotal = 0
        this.state.cart.map((item) => (subTotal += item.total))
        const tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = tax + subTotal
        this.setState({
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total,
        })
    }


    render() {
        return <ProductContext.Provider value={{...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart,
            openModal: this.openModal,
            closeModal: this.closeModal,
            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            clearCart: this.clearCart
        }}>
            {this.props.children}
        </ProductContext.Provider>
    }
}

const ProductConsumer = ProductContext.Consumer;


export {ProductProvider, ProductConsumer}