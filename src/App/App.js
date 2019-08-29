import React, { Component } from 'react';
import Form from '../Form/Form'
import Container from '../Container/Container';
import {getOrders, addOrders} from '../apiCalls/apiCalls'
import './App.css';

class App extends Component {
    constructor(){
      super()
      this.state = {
        orders: []
      }
    }
  
  addOrder = () => {
    console.log('this is add order')
  }

  deleteOrder = () => {
    console.log('this is delete order')
  }

  componentDidMount () {
    getOrders()
    .then(foundOrders => this.setState({orders: foundOrders}))
    .catch(error => this.setState({ error: error.message }));
  }


  render () {
    return (
    <main className="app">
      <nav>
        <Form addOrder={this.addOrder}/>
        <h2>My Order History</h2>
      </nav>
      <section>
        <Container deleteOrder={this.deleteOrder} orders={this.state.orders}/>
      </section>
    </main>
    )}

}

export default App;
