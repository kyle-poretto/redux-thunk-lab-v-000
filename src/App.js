import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import * as actions from './actions/catActions.js';
import CatList from './CatList'

export class App extends Component {  
  
  componentDidMount() {
    if(this.props.catPics.length === 0){
      this.props.actions.fetchCats()
    }
  }
  
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar> 
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

function mapStatetoProps(state) {
  console.log("cats", state.cats)
  return {catPics: state.cats.pictures}
}

function mapDispatchToProps(dispatch) {
  console.log('in map dispatch to props')
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp =  connect(mapStatetoProps, mapDispatchToProps)(App);

