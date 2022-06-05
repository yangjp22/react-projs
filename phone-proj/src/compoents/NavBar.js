import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import ButtonContainer from './Button.js'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return <NavWraper className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
            <Link to='/'>
                <img src={logo} alt='store' className='navbar-brand' />
            </Link>
            <ul className='navbar-nav align-items-center'>
                <li className='nav-item ml-5'>
                    <Link to='/' className='nav-link'>
                        Products
                    </Link>
                </li>
            </ul>
            <Link to='/cart' className='ml-auto'>
                <ButtonContainer>
                    <span className='mr-2' style={{color: '#ffa400'}}>
                        <i className='fas fa-cart-plus' />  
                    </span>
                    <span style={{color: '#ffa400'}}>My Cart</span>
                </ButtonContainer>
            </Link>
        </NavWraper>
    }
}

const NavWraper = styled.nav`
background: var(--lightBlue);
.nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize!important;
}
@media (max-width: 576px) {
    .navbar-nav {
        flex-direction: row !important;
    }
}
`