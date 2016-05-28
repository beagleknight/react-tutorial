import {Component} from 'react';
import {Counter} from './counter';
import {Summary} from './summary';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: this.props.counters
    };
  }

  render() {
    const {counters} = this.state;

    return (
      <div>
        <Summary counters={counters} />
        <section>
          <h1>Counters</h1>
          {
            counters.map((counter, i) => {
              return (
                <Counter 
                  key={i} 
                  className={i} 
                  title={counter.title} 
                  initialValue={counter.initialValue}
                  onCounterUpdate={(value) => { this.updateCounter(i, value) }}>
                </Counter>
              );
            })
          }
        </section>
      </div>
    );
  }

  updateCounter(index, value) {
    let {counters} = this.state;

    counters[index].value = value;

    this.setState({
      counters: counters
    });
  }
}
