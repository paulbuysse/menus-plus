import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import EditMenuItem from '../EditMenuItem/EditMenuItem.js';
import EditMenuAddDish from '../EditMenuAddDish/EditMenuAddDish.js';

import './EditMenu.css';

class EditMenu extends Component {
    state = {
        heading: 'Edit Menu Component',
    };

    componentDidMount() {
        this.getDetails();
    }

    getDetails = () => {
        this.props.dispatch({type: 'SET_CURRENT_MENU', payload: this.props.match.params.id})
    }

    render() {
        return (
            <div>
                <div className="menuInfoBar">
                <Link className="menuEditLink" to={`/menu/details/${this.props.match.params.id}`}>
                        Back
                    </Link>

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

                <EditMenuAddDish menuId={this.props.match.params.id} history={this.props.history} />

                <table>
                    <thead>
                        <tr>
                            <th>Dish Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.store.currentMenuReducer.map((dish) => {
                            return (
                                <EditMenuItem
                                    dish={dish}
                                    history={this.props.history}
                                    match={this.props.match.params.id}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(EditMenu);
