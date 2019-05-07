import React, { Component } from "react";
import { connect } from "react-redux";
import { CounterOutput, CounterControl } from "../../components";
import "./Counter.css";
import * as actionCreater from "../../store/actions/";
class Counter extends Component {
  render() {
    let results = this.props.storedResults.map(data => (
      <li onClick={() => this.props.onDeleteResult(data.id)} key={data.id}>
        {data.val}
      </li>
    ));
    return (
      <div className="Counter">
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubCounter} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>{results}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counterRedu.counter,
    storedResults: state.resultsRedu.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreater.increment()),
    onDecrementCounter: () => dispatch(actionCreater.decrement()),
    onAddCounter: () => dispatch(actionCreater.add_value(5)),
    onSubCounter: () => dispatch(actionCreater.sub_value(5)),
    onStoreResult: counter => dispatch(actionCreater.store_result(counter)),
    onDeleteResult: selectedId =>
      dispatch(actionCreater.delete_result(selectedId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
