import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    constructor(){
        super()
        this.state = {
          image: '',
          name: '',
          description: '',
          price: ''
        }
    }

    submitPurchase= event => {
        event.preventDefault();
        const newPurchase = {
            id: Date.now(),
            ...this.state
        }
        this.props.addOrder(newPurchase);
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({
            image: '',
            name: '',
            description: '',
            price: ''
        })
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
      return (
        <form>
            <input 
                type='photo'
                placeholder='Image Url'
                name='photo'
                value={this.state.image}
                onChange={event => this.handleChange(event)}
            />
            <input 
                type='name'
                placeholder='Name'
                name='name'
                value={this.state.name}
                onChange={event => this.handleChange(event)}
            />
            <input 
                type='description'
                placeholder='Description'
                name='description'
                value={this.state.description}
                onChange={event => this.handleChange(event)}
            />
            <input
                type='price'
                placeholder='Price'
                name='price'
                value={this.state.price}
                onChange={event => this.handleChange(event)}
            />
            <button onClick={event=> this.submitPurchase(event)}>Add Purchase!</button>
        </form>
      )
    }
}

export default Form;