import React,{ Component} from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import TableMail from '../components/tableMail';


class DashBoard extends Component{
    constructor(props) {
        super(props)
        this.state = {
          students: []
        };
      }
  // console.log(token)
  componentDidMount() {
    axios.get(`http://localhost:5050/Mail`, )
    .then((response) => {
    console.log(response.data);
    this.setState({
        students: response.data
      });
  }).catch((err)=>{
    console.log(err.response)
  })
 }

 DataTable() {
  return this.state.students.map((res, i) => {
    return <TableMail obj={res} key={i} />;
  });
}

 render() {
  return (
    <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Date</th>
          <th>Vues</th>
        </tr>
      </thead>
      <tbody>
      {this.DataTable()}
         
      </tbody>
    </Table>
  );
}
}
export {DashBoard};