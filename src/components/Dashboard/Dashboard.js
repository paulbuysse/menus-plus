import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import DashboardItem from '../DashboardItem/DashboardItem.js';

import './Dashboard.css';

class Dashboarder extends Component {

    componentDidMount() {
        this.getMenus();
    }

    getMenus = () => {
        console.log(this.props.store.user.id)
        this.props.dispatch({ type: 'FETCH_MENUS', payload: this.props.store.user.id })
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
                <h1 className="dashDeclaration">{this.props.store.user.username}'s Dashboard</h1>

                <br />

                {/* {JSON.stringify(this.props.store.menuReducer)} */}

                {this.props.store.menuReducer.map((menu, i) => {
                    return (
                        <DashboardItem
                            i={i}
                            menu={menu}
                        />
                    )
                })}

            </div>
        );
    }
}

export default connect(mapStoreToProps)(Dashboarder);