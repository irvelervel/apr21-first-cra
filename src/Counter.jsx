import { Component } from 'react'
import LabelComponent from './LabelComponent'

class Counter extends Component {

    state = {
        amount: 0
    }

    increase = () => this.setState({ amount: this.state.amount + 1 })

    decrease = () => this.setState({ amount: this.state.amount - 1 })

    render() {
        return (
            <div>
                <button onClick={this.increase}>+</button>
                <h2>{this.state.amount}</h2>
                <button onClick={this.decrease}>-</button>
                {/* now I'll also pass the amount to the LabelComponent as a prop */}
                <LabelComponent counter={this.state.amount} />
            </div>
        )
    }
}

export default Counter