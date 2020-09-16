import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

import './CreateDish.css'

class CreateDish extends Component {
  state = {
    newDishName: '',
    newDishPrice: '',
    newDishDescription: '',
    newDishImg: '',
  };

  handleNewDish = () => {
    if (this.state.newDishName !== '' && this.state.newDishPrice !== '' && this.state.newDishDescription !== '') {
    this.props.dispatch({ type: 'ADD_NEW_DISH', payload: this.state })
    alert('Dish Created!');

    this.setState({
      newDishName: '',
      newDishPrice: '',
      newDishDescription: '',
      newDishImg: '',
    })
  } else {
    alert('Please fill out required fields!*')
  }
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
        <div className="pageInstructions">
          <p>-- Enter the name, price, image address URL, and menu description below.</p>
          <p>-- Check the image preview to confirm your image is displaying correctly.</p>
          <p>-- When everything looks correct, click "Create Dish" on the bottom right.</p>
        </div>
        <div className="addDishBody">
          <input className="createInput" value={this.state.newDishName} placeholder="*Dish Name" onChange={(event) => { this.setState({ ...this.state, newDishName: event.target.value }) }} />
          <input className="createInput" type="number" value={this.state.newDishPrice} placeholder="*Price" onChange={(event) => { this.setState({ ...this.state, newDishPrice: event.target.value }) }} />
          <input className="createInput" value={this.state.newDishImg} placeholder="Image URL" onChange={(event) => { this.setState({ ...this.state, newDishImg: event.target.value }) }} />
          <br />
          <textarea value={this.state.newDishDescription} rows="7" cols="50" className="createTextArea" placeholder="*Description" onChange={(event) => { this.setState({ ...this.state, newDishDescription: event.target.value }) }} />
          <br />
        </div>
        <div className="imgPreview">
          <h4>Image Preview:</h4>
          <img className="exampleImg" src={this.state.newDishImg}></img>
        </div>
        <div className="submitDiv">
          <p>Click to submit:</p>
          <button className="addDishBtn" onClick={() => { this.handleNewDish() }}>Create Dish</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(CreateDish);
