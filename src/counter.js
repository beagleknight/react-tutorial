import {Component}   from 'react';
import {TimedButton} from './timed_button';

export class Counter extends Component {
  // this.props <read-only>
  // this.state <r/w>
  
  constructor(props) {
    super(props);

    this.state = {
      counter: this.props.initialValue
    };
  }  

  render() {
    const {title} = this.props;
    const {counter} = this.state;

    return (
      <div className={this.props.className}>
        <h1>{title}</h1>
        <h2>{counter}</h2>
        <button onClick={() => { this.increment() }}>+</button>
        <button onClick={() => { this.decrement() }}>-</button>
        <TimedButton time={3} onClick={() => { this.reset() }}>
          <span style={{fontWeight: 'bold'}}>Reset</span>
        </TimedButton>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
    this.props.onCounterUpdate(this.state.counter + 1);
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1
    });
    this.props.onCounterUpdate(this.state.counter - 1);
  }

  reset() {
    this.setState({
      counter: this.props.initialValue
    });
    this.props.onCounterUpdate(this.props.initialValue);
  }
}
