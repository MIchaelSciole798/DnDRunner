import React from 'react';
import axios from 'axios';

export default class CaramelList extends React.Component {
    state = {
        caramels: [],
    };

    componentDidMount() {
        axios.get('').then(res => {
            console.log(res);
            this.setState({ caramels: res.data });
        });
    }
}