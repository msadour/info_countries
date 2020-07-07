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
        style={{"border":"1px solid black", width: "30%", padding: "0.9%", marginLeft: "35%"}}
        placeholder="Search a country.."
        onChange={(e) => this.onChange(e)}
       />
        <br /><br /><br />
        <table border="0" cellSpacing="0" style={{width: "70%", "margin": "0 auto"}}>
            <thead>
                <tr style={{backgroundColor: "#ad9453", textAlign: "center", lineHeight: "250%"}}>
                    <td style={{width: "10%"}}> <b>Name</b> </td>
                    <td style={{width: "10%"}}> <b>Population</b> </td>
                    <td style={{width: "10%"}}> <b>Capital</b> </td>
                    <td style={{width: "10%"}}> <b>Area</b> </td>
                </tr>
            </thead>
           <tbody>
                { this.state.countries.map(country => (
                    <tr key={country.id} style={{lineHeight: "250%", textAlign: "center", backgroundColor: "#cbf5ee"}}>
                        <td> {country.name} </td>
                        <td> {country.population} </td>
                        <td> {country.capital} </td>
                        <td> {country.area} </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);