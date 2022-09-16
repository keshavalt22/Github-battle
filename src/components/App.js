import React from "react";
import Header from "./Header";
import Menu from './Menu';
import Main from "./Main";
import SingleLanguage from './SingleLanguage';
import Battle from "./Battle";



import { BrowserRouter, Route } from 'react-router-dom';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: null,
    }
  }

  componentDidMount(){
    fetch('https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories')
    .then((res) => res.json())
    .then((data) => this.setState({ data }));
  }


  render(){
    return (
      <BrowserRouter>
        <Route path="/">
          <Header/>
        </Route>
        <Route path= "/" exact>
          <Menu data = {this.state.data}/>
          <Main data = {this.state.data}/>
        </Route>
        <Route path="/post">
          <Menu data = {this.state.data}/>
        </Route>
        <Route path="/post/:language" component={SingleLanguage}/>
        <Route path='/battle'>
          <Battle/>
        </Route>
      </BrowserRouter>
     
    )
  }
}

export default App;