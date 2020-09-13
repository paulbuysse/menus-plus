import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

class CreateDish extends Component {
  state = {
    newDishName: '',
    newDishPrice: 0,
    newDishDescription: '',
    newDishImg: '',
  };

  handleNewDish = () => {
    this.props.dispatch({type: 'ADD_NEW_DISH', payload: this.state})
  }

  render() {
    return (
      <div>
        <div className="menuInfoBar">

          <h2>{this.props.store.user.restaurant_name}</h2>

        </div>

        <div className="sideBar">
          <Link className="sideLinkBigTop" to="/add/menu">
            Create New Menu
          </Link>
          <Link className="sideLinkBig" to="/add/dish">
            Create New Dish
          </Link>
          <Link className="sideLinkSmall" to="/dashboard">
            Dashboard
          </Link>
          <br />
          <Link className="sideLinkSmall" to="/dishlist">
            See Dishes
          </Link>
        </div>
    <h2>{this.state.newDishName}{this.state.newDishPrice}{this.state.newDishImg}{this.state.newDishDescription}</h2>

        <input placeholder="Dish Name" onChange={(event) => {this.setState({...this.state, newDishName: event.target.value})}}/>
        <input placeholder="Price" onChange={(event) => {this.setState({...this.state, newDishPrice: event.target.value})}}/>
        <input placeholder="Image URL" onChange={(event) => {this.setState({...this.state, newDishImg: event.target.value})}}/>
        <textarea placeholder="Description" onChange={(event) => {this.setState({...this.state, newDishDescription: event.target.value})}}/>
        <button onClick={() => {this.handleNewDish()}}>Create Dish</button>

      </div>
    );
  }
}

export default connect(mapStoreToProps)(CreateDish);
