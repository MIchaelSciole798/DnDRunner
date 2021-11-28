import React from 'react';
import axios from 'axios';
import CaramelList from './CaramelList';

export default class OrderSender extends React.Component {
    state = {
            id: 0,
            amount: null,
            type:'', 
    };

    handleChangeAmt = event => 
    {
        this.setState({ amount: event.target.value });
    }

    handleChangeType = event => 
    {
        this.setState({ type: event.target.value })
    }

    setOrder = event =>
    {
        this.setState({ id: this.state.id + 1})
    }

    handleSubmit = event => 
    {
        event.preventDefault();

        const order = 
        {
            id: this.state.id,
            amount: this.state.amount,
            type: this.state.type,
        }

        axios
            .post("https://my-json-server.typicode.com/MIchaelSciole798/DnDRunner/orders", { order })
            .then(res => 
                {
                    console.log(res);
                    console.log(res.data);
                });
    }

    render()
    {
        return (
            <form onSubmit={this.setOrder & this.handleSubmit}>
                <label>
                    Amount to send:
                    <input type="number" name="amount" onChange={this.handleChangeAmt}/>
                </label>
                <label>
                    Flavor Desired:
                    <CaramelList/>
                    <input type="text" name="type" onChange={this.handleChangeType}/>
                </label>
                <button type="submit">Order!</button>
            </form>
        )
    }
}