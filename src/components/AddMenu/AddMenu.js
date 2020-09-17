import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

import './AddMenu.css';

class AddMenu extends Component {
  state = {
    newMenuName: ''
  };

  handleNewMenu = () => {
    console.log(this.state.newMenuName);

    //takes new menu name and goes to menu saga
    this.props.dispatch({ type: 'CREATE_NEW_MENU', payload: this.state })


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
        <div classNAme="createMenuBody">
          <div className="newMenuInstructions">
            <p>--Enter the name of your new menu.</p>
            <p>--Click "Create Menu" to add the menu to your Dashboard.</p>
          </div>
          <div className="newMenuInput">
            <input className="createInput" placeholder="New Menu Name" onChange={(event) => { this.setState({ newMenuName: event.target.value }) }} />
          </div>
          <div className="newMenuSubmit">
            <p>Click to Create Menu:</p>
            <button className="addBtn" onClick={() => this.handleNewMenu()}>Create Menu</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AddMenu);
