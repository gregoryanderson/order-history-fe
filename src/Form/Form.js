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
        this.props.addPurchase(newPurchase);
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({
            img: '',
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
        <form className="form">
            <input 
                className="form__input"
                type='text'
                placeholder='Image Url'
                name='img'
                value={this.state.image}
                onChange={event => this.handleChange(event)}
            />
            <input
                className="form__input"
                type='text'
                placeholder='Name'
                name='name'
                value={this.state.name}
                onChange={event => this.handleChange(event)}
            />
            <input 
                className="form__input"
                type='text'
                placeholder='Description'
                name='description'
                value={this.state.description}
                onChange={event => this.handleChange(event)}
            />
            <input
                className="form__input"
                type='text'
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