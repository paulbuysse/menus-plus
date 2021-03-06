import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

import './MenuDetails.css';

class MenuDetails extends Component {
    state = {
        heading: this.props.store.user.restaurant_name,
        menuName: this.props.store.currentMenuReducer.menuTitle
    };

    componentDidMount() {
        this.getDetails();
    }

    getDetails = () => {
        this.props.dispatch({ type: 'SET_CURRENT_MENU', payload: this.props.match.params.id })
    }

    render() {
        console.log(this.menuTitle)
        return (
            <div>

                <div className="menuInfoBar">

                    <Link className="menuEditLink" to={`/edit/menu/${this.props.match.params.id}`}>
                        Edit Menu
                    </Link>
                    <h2>{this.state.heading}</h2>
                    <h3>{this.state.menuName}</h3>

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

                <div>
                    <div className="menuPage">
                        <h1>{this.state.heading}</h1>
                        {this.props.store.currentMenuReducer.map((dish) => {
                            return (
                                <div className="dishItem">

                                    <img className="dishImage" src={dish.img_url}></img>
                                    <div className="dishNamePrice">
                                        <h3>{dish.name}</h3>
                                        <h4>${dish.price}</h4>
                                    </div>
                                    <br />
                                    <p>{dish.description}</p>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(MenuDetails);
