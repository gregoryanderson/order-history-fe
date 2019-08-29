import React, { Component } from "react";
import Form from "../Form/Form";
import Container from "../Container/Container";
import { getOrders } from "../apiCalls/apiCalls";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      error: ""
    };
  }

  addPurchase = newPurchase => {
    const options = {
      method: "POST",
      body: JSON.stringify(newPurchase),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch("http://localhost:3001/api/v1/purchases", options)
      .then(response => {
        console.log(response);
        if (!response.ok) {
          throw Error("Error fetching orders");
        }
        return response.json();
      })
      .then(order =>
        this.setState({
          orders: [...this.state.orders, order]
        })
      )
      .catch(error =>
        this.setState({
          error: error
        })
      );
  };

  deleteOrder = id => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    };
    let filteredOrders = this.state.orders.filter(order => order.id !== id);
    this.setState({ orders: filteredOrders });

    fetch(`http://localhost:3001/api/v1/purchases/${id}`, options)
      .then(response => {
        if (!response.ok) {
          throw Error("Error deleting the card in storage");
        }
        return response.json();
      })
      .catch(error =>
        this.setState({
          error: error
        })
      );
  };

  componentDidMount() {
    getOrders()
      .then(foundOrders => this.setState({ orders: foundOrders }))
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    return (
      <main className="app">
        {this.state.error && <h2>{this.state.error}</h2>}
        <nav className="app__nav">
          <Form addPurchase={this.addPurchase} />
          <h2 className="app__nav--h2">My Order History</h2>
        </nav>
        <section>
          <Container
            deleteOrder={this.deleteOrder}
            orders={this.state.orders}
          />
        </section>
      </main>
    );
  }
}

export default App;
