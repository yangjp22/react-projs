import React from 'react'
import Product from './Product.js'
import Title from './Title.js'
import {ProductConsumer} from './Context.js'
import styled from 'styled-components'


export default class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // products: storeProducts,
        }
    }

    render() {
        return <React.Fragment>
                <ProductWrapper className='py-5'>
                    <div className='container'>
                        <Title name={'our'} title={'products'} />
                        <div className='row'>
                            <ProductConsumer>
                                {value => {
                                    return value.products.map( item => {
                                        return <Product key={item.id} product={item} handleDetail={value.handleDetail}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </ProductWrapper>
            </React.Fragment>
    }
}


const ProductWrapper = styled.section``