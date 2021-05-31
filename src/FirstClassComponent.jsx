// a react component can also exist in the form of a CLASS

import { Component } from 'react'

class FirstClassComponent extends Component {

    // STATE
    // the state is an object which will keep track of some data through time

    // you need a Class Component
    state = {
        name: 'Stefano'
    }

    render() {
        // in every class component you MUST have a render method
        return <h1 className={this.props.myClass} onClick={() => this.setState({ name: 'Nando' })} >{this.state.name}</h1>
    }
}

export default FirstClassComponent