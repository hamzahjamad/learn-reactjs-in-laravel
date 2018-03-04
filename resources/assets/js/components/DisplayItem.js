import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import TableRow from './TableRow';

export default class DisplayItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: ''
        }
    }

    componentDidMount() {
        axios.get('http://learn-laravel-reactjs.test/items')
             .then(response => {
                 this.setState({
                     items: response.data
                 });
             })
             .catch(err => console.log(err));
    }

    tabRow() {
        if(this.state.items instanceof Array) {
            return this.state.items.map((object, i) => {
                return <TableRow obj={object} key={i} />
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Items</h1>
                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <Link to="/add-item">Create Item</Link>
                    </div>
                </div><br />

                <table className="">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Item Name</td>
                            <td>Item Price</td>
                            <td>Actions</td>
                        </tr>    
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>        
                </table>
            </div>    
        )
    }

}