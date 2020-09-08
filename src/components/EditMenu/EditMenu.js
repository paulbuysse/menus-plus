import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

import './EditMenu.css'

class EditMenu extends Component {
    state = {
        heading: 'Edit Menu Component',
    };

    render() {
        return (
            <div>
                <div className="sideBar">
                    <Link className="sideLinkBig" to="/add/menu">
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

export default connect(mapStoreToProps)(EditMenu);
