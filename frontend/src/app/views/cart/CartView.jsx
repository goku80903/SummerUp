import React, { Component } from "react";
import SimpleForm from "../material-kit/forms/SimpleForm";
import axios from 'axios';
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  IconButton,
  Icon,
  TableRow
} from "@material-ui/core";
import { Breadcrumb, SimpleCard } from "matx";
import { Button, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

class CartView extends Component {

  constructor(props) {
      super(props);
      this.state = {
        groceries: [],
        counter: ''
      }
      this.GetCounter = this.GetCounter.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:4000/cart')
      .then(response => {
        this.setState({groceries: response.data});
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  GetCounter(e){
    e.preventDefault();
    this.setState({counter: 12});
  }

  render() {
    return (
      <div className="w-100 overflow-auto">
        <br/>
        <SimpleCard title="Products">
          <Table style={{ whiteSpace: "pre" }}>
            <TableHead>
              <TableRow>
                <TableCell className="px-0">ProductID</TableCell>
                <TableCell className="px-0">ProductName</TableCell>
                <TableCell className="px-0">AisleID</TableCell>
                <TableCell className="px-0">DepartmentID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.groceries.map((currentGrocery, index) => (
                <TableRow key={index}>
                  <TableCell className="px-0 capitalize" align="left">
                    {currentGrocery.product_id}
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="left">
                    {currentGrocery.product_name}
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="left">
                    {currentGrocery.aisle_id}
                  </TableCell>
                  <TableCell className="px-0 capitalize">
                    {currentGrocery.department_id}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </SimpleCard>
        <center>
        <br/>
          <Button variant="contained" color="primary" onClick={this.GetCounter} >
            Show Billing Counter
          </Button>
        <br/>
        <br/>
        <br/>
        <h5> Go to counter number : {this.state.counter}</h5>
        </center>
      </div>
    );
  }
}

export default CartView;
