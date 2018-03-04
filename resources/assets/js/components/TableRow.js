import React from 'react'
import axios from 'axios'
import { Link, browserHistory } from 'react-router';

export default class TableRow extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let uri = 'http://learn-laravel-reactjs.test/items/'+this.props.obj.id;
        axios.delete(uri);
        browserHistory.push('/display-item');
    }

    render() {
        return(
        <tr>
            <td>
                {this.props.obj.id}
            </td>
            <td>
                {this.props.obj.name}
            </td> 
            <td>
                {this.props.obj.price}
            </td>
            <td>
                <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
            </td>
            <td>
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="Delete" className="btn btn-danger"/>
            </form>
            </td>         
        </tr>
        )    
    }
}