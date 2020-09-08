import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

import './Dashboard.css';

    class Dashboarder extends Component {

        componentDidMount() {
            this.getMenus();
        }
        
        getMenus = () => {
            console.log(this.props.store.user.id)
            this.props.dispatch({type: 'FETCH_MENUS', payload: this.props.store.user.id})
        }

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
                    <h1 className="dashDeclaration">{this.props.store.user.username}'s Dashboard</h1>
                    
                    <br />

                    {/* {JSON.stringify(this.props.store.menuReducer)} */}

                    {this.props.store.menuReducer.map((menu, i) => {
                        return(
                            <div className="menuCards" id={i}>
                            <img className="menuImg" alt="placeholder" 
                            src="https://thestayathomechef.com/wp-content/uploads/2020/03/Classic-Chicken-Marsala-4-1-500x500.jpg">
                            </img>
                            <p>{menu.title}</p>
                            <Link className="menuViewLink" to="menu-view/:id">View Menu</Link>
                            </div>
                        )
                    })}
                    
                </div>
            );
        }
    }

    export default connect(mapStoreToProps)(Dashboarder);