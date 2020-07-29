//import React from 'react';
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
//import { API } from 'aws-amplify';
import { AgGridReact } from 'ag-grid-react';
import ReactSearchBox from 'react-search-box'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


class App extends Component {

  //new code
  // const api_url = 'stocks/${stocksymbol}';
  // const response = await fetch(api_url);
  // const json = await response.json();
  // console.log(json);
  //new code

  data = [
    {
      key: 'john',
      value: 'John Doe',
    },
    {
      key: 'jane',
      value: 'Jane Doe',
    },
    {
      key: 'mary',
      value: 'Mary Phillips',
    },
    {
      key: 'robert',
      value: 'Robert',
    },
    {
      key: 'karius',
      value: 'Karius',
    },
  ]

  // componentDidMount() {
  //   fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json')
  //   .then(result => result.json())
  //   .then(rowData => this.setState({data}))
  // }

  //render() {
  render0() {
    return (
      <ReactSearchBox
        placeholder="Placeholder"
        value="Doe"
        data={this.data}
        callback={record => console.log(record)}
      />
    )
  }



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
    }
  }

   componentDidMount() {
     fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json')
     .then(result => result.json())
     .then(rowData => this.setState({rowData}))
   }

  //render()
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
