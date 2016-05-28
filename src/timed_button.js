import {Component} from 'react';

export class TimedButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false
    };
  }

  render() {
    const {children} = this.props;
    const {disabled} = this.state;

    return (
      <button disabled={disabled} onClick={() => { this.timedAction() }}>
        {children}
      </button>
    );
  }

  timedAction() {
    this.setState({ disabled: true });

    setTimeout(() => {
      this.setState({ disabled: false });
      this.props.onClick();
    }, this.props.time * 1000);
  }
}
