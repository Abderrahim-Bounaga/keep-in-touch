import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

export default class TableMail extends Component {


    render() {
        return (
   
            <tr>
            <th scope="row"></th>
            <td>{this.props.obj.firstName}</td>
            <td>{this.props.obj.lastName}</td>
            <td>{this.props.obj.email}</td>
            <td>{moment(this.props.obj.Date).format("dddd, MMM DD ")}</td>
            <td><Link color="success" to={`/send_mail/${this.props.obj.email}`}>Vue</Link>{' '}</td>
          </tr>
        );
    }
}