//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       columnDefs: [{
//         headerName: "Make", field: "make", sortable: true, filter: true
//       }, {
//         headerName: "Model", field: "model", sortable: true, filter: true
//       }, {
//         headerName: "Price", field: "price", sortable: true, filter: true
//       }],
//       rowData: [{
//         make: "Toyota", model: "Celica", price: 35000
//       }, {
//         make: "Ford", model: "Mondeo", price: 32000
//       }, {
//         make: "Porsche", model: "Boxter", price: 72000
//       }]
//     }
//   }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Make", field: "make", sortable: true, filter: true
      }, {
        headerName: "Model", field: "model", sortable: true, filter: true
      }, {
        headerName: "Price", field: "price", sortable: true, filter: true
      }],
      rowData: [{
        make: "Toyota", model: "Celica", price: 35000
      }, {
        make: "Ford", model: "Mondeo", price: 32000
      }, {
        make: "Porsche", model: "Boxter", price: 72000
      }]
    }
  }

   componentDidMount() {
     fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json')
     .then(result => result.json())
     .then(rowData => this.setState({rowData}))
   }


  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
        height: '250px',
        width: '600px' }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>We now have Auth!</h1>
//       </header>
//       <AmplifySignOut />
//     </div>
//   );
// }

export default App;
//export default withAuthenticator(App);
