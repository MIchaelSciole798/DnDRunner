import React from 'react';
import axios from 'axios';
import Select from 'react-select'
import CaramelList from './CaramelList';

export default class OrderSender extends React.Component {
    state = {
        amount: null,
        type:'',
    };

    handleSubmit = event => 
    {
        event.preventDefault();

        const order = 
        {
            amount: this.state.amount,
            type: this.state.type,
        }

        this.setState({ amount: event.target.value });
        this.setState({type: event.target.value })

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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Amount to send:
                    <input type="number" name="amount"/>
                </label>
                <label>
                    Flavor Desired:
                    <CaramelList/>
                    <input type="list" name="type"/>
                </label>
                <button type="submit">Order!</button>
            </form>
        )
    }
}