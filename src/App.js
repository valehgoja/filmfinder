import React, { Component } from "react";
import "./App.css";
let arr = []

class App extends Component {
  constructor() {
    super();

    this.finder = this.finder.bind(this);
  }
  
  state = {
    inputValue: "Spiderman",
  };

  finder(e) {
    this.setState({
      inputValue: e.target.value,
    });
    fetch(`https://www.omdbapi.com/?s=${this.state.inputValue}&apikey=42d6a515 `)
      .then((res) => res.json())
      .then((data) => {
        
        if(data.Response === "True"){
            arr.push(data)
        }
        else{
            arr = []
        }
      });
    
  }

  render() {
    
    return (
      <div className="App">
        <div className="ui icon input">
          <input type="text" onKeyPress={this.finder} placeholder="Search..." />
          <i className="search icon"></i>
        </div>
        <div>
            {arr !== [] ? 
                arr.map(e=>{
                    return <p>{e.Search.map(e=>
                        <div className="cards">
            <img src={e.Poster !=="N/A" ? e.Poster : './logo.svg'}/>
        <div className="about">    <h2>Title : {e.Title}</h2>
            <h6>Year : {e.Year}</h6>
            <h6>IMDB : {e.IMDB}</h6>
            <h6>Type : {e.Type}</h6>
            </div>
        </div>  )}</p>
                })
             : <p></p>}
        </div>
      </div>
    );
  }
}

export default App;
