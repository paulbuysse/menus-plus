import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

class EditDish extends Component {
  state = {
    editName: false,
    editPrice: false,
    editDescription: false,
    editImg: false
  };

  toggleState = (selectedKey) => {
    this.setState({ ...this.state, selectedKey: !this.state.selectedKey })
  }

  render() {
    return (
      <div>
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

        {JSON.stringify(this.props.store.dishes)}

        <h3>{}</h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>

        <input placeholder="" />
        <input placeholder="" />
        <input placeholder="" />
        <textarea placeholder="" />
        <button>Save Changes</button>

      </div>
    );
  }
}

export default connect(mapStoreToProps)(EditDish);
