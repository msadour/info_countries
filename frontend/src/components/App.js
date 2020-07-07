import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

    componentDidMount(){
        fetch('/api_country/country/')
        .then(response => response.json())
        .then((data) => {
            this.setState({countries: data});
        })
        .catch(err => {
            alert('error');
        });
    }

  onChange(e) {
    fetch('/api_country/country?search=' + e.target.value)
    .then(response => response.json())
    .then((data) => {
        this.setState({countries: data});
    })
    .catch(err => {
        alert('error');
    });
  }

  render() {
    return (
      <div >
      <br /><br />
       <input
        style={{"border":"1px solid black", width: "30%", padding: "0.9%", "margin-left": "35%"}}
        placeholder="Search a country.."
        onChange={(e) => this.onChange(e)}
       />
        <br /><br /><br />
        <table border="0" cellspacing="0" style={{width: "70%", "margin": "0 auto"}}>
            <tr style={{backgroundColor: "#ad9453", "text-align": "center", "line-height": "250%"}}>
                <td style={{width: "10%"}}> <b>Name</b> </td>
                <td style={{width: "10%"}}> <b>Population</b> </td>
                <td style={{width: "10%"}}> <b>Capital</b> </td>
                <td style={{width: "10%"}}> <b>Area</b> </td>
            </tr>

            { this.state.countries.map(country => (
                <tr style={{"line-height": "250%", "text-align": "center", backgroundColor: "#cbf5ee"}}>
                    <td> {country.name} </td>
                    <td> {country.population} </td>
                    <td> {country.capital} </td>
                    <td> {country.area} </td>
                </tr>
            ))}
        </table>
      </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);