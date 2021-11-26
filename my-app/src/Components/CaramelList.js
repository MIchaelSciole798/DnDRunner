import React from 'react';
import axios from 'axios';

export default class CaramelList extends React.Component {
    state = {
        caramels: [],
    };

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/MIchaelSciole798/DnDRunner/caramels').then(res => {
            console.log(res);
            this.setState({ caramels: res.data });
        });
    }

    render()
    {
        return (
            <ul>
                { 
                    this.state.caramels.map(caramel => 
                    <li>Type: {caramel.flavor}
                    ....Quantity per box: {caramel.quantity}
                    ....Price per box: {caramel.price}
                    </li>
                )}
            </ul>
        )
    }
}