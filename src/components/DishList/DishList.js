import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import DishListItem from '../DishListItem/DishListItem.js';

//importing css
import './DishList.css';

class DishList extends Component {
  state = {
    heading: 'Dish List Component',
  };

  componentDidMount() {
    this.fetchDishes();
  }

  fetchDishes = () => {
    this.props.dispatch({ type: 'FETCH_DISHES' });
  }

  // editDish = (dishId) => {
  //   this.props.history.push(`/edit/dish/${dishId}`)
  // }

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
        < h2 > {this.state.heading}</h2>

        <table className="dishTable">
          <thead>
            <tr>
              <th>Dish Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.store.dishes.map((dish) => {
              return (
                <DishListItem
                  dish={dish}
                  fetchDishes={this.fetchDishes}
                />
              )
            })}
          </tbody>
        </table>

      </div>
    );
  }
}

export default connect(mapStoreToProps)(DishList);
