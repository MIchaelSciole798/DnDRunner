import React from 'react';
import axios from 'axios';
import Select from 'react-select'

export default class OrderSender extends React.Component {
    state = {
        amount: null,
        type:'',
    };

    state = {
        caramels: [],
    };

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/MIchaelSciole798/DnDRunner/caramels').then(res => {
            console.log(res);
            this.setState({ caramels: res.data });
        });
    }

    handleChange = event => 
    {
        this.setState({ amount: event.target.value });
    }

    handleSubmit = event => 
    {
        event.preventDefault();

        const order = 
        {
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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Amount to send:
                    <input type="number" name="amount" onChange={this.handleChange}/>
                </label>
                <label>
                    Type to send:
                    <Select options={this.state.caramels.type} />
                </label>
                <button type="submit">Order!</button>
            </form>
        )
    }
}