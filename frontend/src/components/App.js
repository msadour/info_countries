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

  render() {
    return (
      <div>
        <table border="1">
            <tr>
                <td> name </td>
                <td> population </td>
                <td> capital </td>
                <td> area </td>
            </tr>

            { this.state.countries.map(country => (
                <tr>
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