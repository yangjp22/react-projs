import React from 'react'


export default class Title extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return <div className='row'>
            <div className='col-10 mx-auto my-2 text-center text-title'>
                <h1 className='text-capitalize font-weight-bold text-blue'>
                    {this.props.name}&nbsp;
                    <strong className='text-blue'>
                        {this.props.title}
                    </strong>
                </h1>
            </div>
        </div>
    }
}