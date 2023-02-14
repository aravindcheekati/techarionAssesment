import {Component} from 'react'
import './index.css'

class Counter extends Component {
    state = {count: 0}

    onDecreament = () => {
        this.setState(prevState => ({count: prevState.count - 3}));
    }

    onIncreament = () => {
        this.setState(prevState => ({count: prevState.count + 3}));
    }

    render() {
        const {count} = this.state
        return (
            <div className='bg-container'>
               <div className='card'>
                    <h1 className='heading'>Counter</h1>
                    <div className='counter-container'>
                        <button className='btn' onClick={this.onDecreament}>-</button>
                        <h1 className='count-value'>{count}</h1>
                        <button className='btn' onClick={this.onIncreament}>+</button>
                    </div>
               </div>
            </div>
        )
    }
}

export default Counter