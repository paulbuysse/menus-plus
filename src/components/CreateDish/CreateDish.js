import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

class CreateDish extends Component {
  state = {
    heading: 'Create Dish Component',
  };

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
        <h2>{this.state.heading}</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(CreateDish);
