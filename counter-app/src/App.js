import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";

//ENDED W/ SYNCING MULT COMPONENTS VIA PARENT

class App extends Component {
  //Parent now holds state access
  state = {
    counters: [{ id: 0, value: 4 }, { id: 1, value: 0 }, { id: 2, value: 0 }]
  };

  //Goal: Give navbar access to counters obj...do that by passing UP to parent
  handleDelete = counterId => {
    console.log("pressed delete", counterId);
    let newCounters = this.state.counters.filter(x => x.id !== counterId);
    this.setState({ counters: newCounters });
  };

  handleReset = () => {
    console.log("pressed reset");
    //Below returns each ele and puts into ARRAY called 'counters'
    const counters = this.state.counters.map(ele => {
      ele.value = 0;
      return ele;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    console.log("inside handle incremet");
    const counters = this.state.counters.map(ele => {
      if (ele.id === counter.id) {
        ele.value += 1;
      }
      return ele;
    });
    this.setState({ counters }); //Force state change
  };

  render() {
    return (
      <React.Fragment>
        <Navbar counters={this.state.counters} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete} //pass handler func as prop
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
