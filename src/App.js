import React, { Component } from 'react';
import Catlist from './CatList.js'
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions.js'

class App extends Component {   

  componentDidMount() {
    this.props.fetchCats()
    
    // why can't we just call fetchCats() directly after importing and skip the mapDispatchToProps?
  }
  
  render() {
    console.log(this.props.catPics)
    return (
      <div>
        <h1>CatBook</h1>
        <Catlist catPics={this.props.catPics} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

