import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

class AddMenu extends Component {
  state = {
    newMenuName: ''
  };

  handleNewMenu = () => {
    console.log(this.state.newMenuName);

    this.props.dispatch({type: 'CREATE_NEW_MENU', payload: this.state.newMenuName})

    
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
        <h2>{this.state.newMenuName}</h2>

      <input placeholder="New Menu Name" onChange={(event) => {this.setState({newMenuName: event.target.value})}}/>
      <button onClick={() => this.handleNewMenu()}>Create Menu</button>

      </div>
    );
  }
}

export default connect(mapStoreToProps)(AddMenu);
