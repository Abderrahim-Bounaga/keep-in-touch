import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Table, ButtonToggle } from 'reactstrap';


export default class TableMail extends Component {

    render() {
        return (
   
            <tr>
            <th scope="row"></th>
            <td>{this.props.obj.firstName}</td>
            <td>{this.props.obj.lastName}</td>
            <td>{this.props.obj.email}</td>
            <td>{this.props.obj.Date}</td>
            <td><Link color="success" to={`/send_mail/${this.props.obj.email}`}>Vue</Link>{' '}</td>
          </tr>
        );
    }
}