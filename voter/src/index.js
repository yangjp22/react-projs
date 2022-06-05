import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types'


class Vote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            supp: this.props.supp,
            oppo: this.props.oppo
        }
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }

    
    render() {
        let {supp, oppo} = this.state
        let rate = (supp + oppo) === 0 ? "0%": ((supp / (supp + oppo) * 100).toFixed(2) + '%')

        return <section className='panel panel-default' style={{width:'50%', margin:'50px auto'}}>
            <div className='panel-heading'>
                <h3 className='panel-title'><span className='text-info'>{this.props.title}</span></h3>
            </div>
            <div className="panel-body">
                <h5 className='text-success'>Support: {supp}</h5>
                <h5 className='text-info'>Opponent: {oppo}</h5>
                <h5 className='text-danger'>Support Rate: {rate}</h5>
            </div>
            <div className="panel-footer">
                <button className='btn btn-success' onClick={this.support.bind(this)}>Support</button>
                &nbsp; &nbsp; &nbsp;&nbsp;
                <button className='btn btn-danger' onClick={this.opponent.bind(this)}>Oppose</button>
            </div>
        </section>
    }

    support() {
        this.setState({
            supp: this.state.supp + 1
        })
    }

    opponent() {
        this.setState({
            oppo: this.state.oppo + 1
        })
    }
}

ReactDOM.render( <section>
    <Vote title='Real Madrid against Barcelona and Barcelona won big' supp={12341} oppo={25223}/>
    <Vote title='Building a wall along the U.S. border with Mexico?' supp={9505} oppo={12140}/>
    <Vote title='Los Angeles Lakers VS Dallas Mavericks on Christmas Eve and Lakers Win' supp={11700} oppo={14921}/>
</section>
, document.getElementById('root'));


// class Parent extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }

//     add = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     render() {
//         return <section className='panel panel-default'>
//             <Show n={this.state.count}></Show>
//             <Body func={this.add}></Body>
//         </section>
//     }
// }

// class Show extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {

//         }
//     }

//     render() {
//         return <div className='panel-heading'>
//             <h3 className='panel-title'>点击次数: {this.props.n}</h3>
//         </div>
//     }
// }

// class Body extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             times: this.props.time
//         }
//     }

//     render() {
//         console.log(this.state.times)
//         return <div className="panel-body">
//             <button className="btn btn-success" onClick={() => {this.props.func()}}>Click me</button>
//         </div>
//     }
// }

// import store from './store/index.js'
// // import * as TYPE from './store/action-types.js'
// import action from './store/action/index.js'


// class Parent extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//         }
//     }

//     componentWillMount() {
//         store.dispatch(action.vote.init({n: 20, m: 30, title:'Hello'}))
//     }


//     render() {
//         return <div className="panel panel-default" style={{width:"50%", margin:"50px auto"}}>
//             <Title />
//             <Score />
//             <Button />
//         </div>
//     }
// }



// class Title extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             title: store.getState().vote.title,
//         }

//     }
//     render() {
//         return <div className="panel-heading">
//                     <div className="panel-title">
//                         {this.state.title}
//                     </div>
//                 </div>
//     }
// }


// class Score extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             n: store.getState().vote.n,
//             m: store.getState().vote.m
//         }
//     }

//     componentDidMount() {
//         store.subscribe( () => {
//             this.setState({
//                 n: store.getState().vote.n,
//                 m: store.getState().vote.m
//             })
//         })
//     }

//     render() {
//         return <div className='panel-body'>
//             <div>Support: {this.state.n}</div> <br/>
//             <div>Oppose: {this.state.m}</div>
//         </div>
//     }
// }



// class Button extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {

//         }
//     }

//     render() {
//         return <div className='panel-footer'>
//             <div className='btn btn-success' onClick={() => {store.dispatch(action.vote.support())}}>Support</div>&nbsp; &nbsp;
//             <div className='btn btn-danger' onClick={() => {store.dispatch(action.vote.oppose())}}>Against</div>
//         </div>
//     }
// }


// ReactDOM.render( <main>
//     <Parent></Parent>
// </main>
// , document.getElementById('root'));