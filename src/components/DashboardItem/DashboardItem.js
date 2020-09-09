import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

class DashboardItem extends Component {

    setCurrentMenu = () => {
        this.props.dispatch({type: 'SET_CURRENT_MENU', payload: { id: this.props.menu.id, user_id: this.props.store.user.id}})
    }

    render() {
        return (
            <div className="menuCards" id={this.props.i}>
                <img className="menuImg" alt="placeholder"
                    src="https://thestayathomechef.com/wp-content/uploads/2020/03/Classic-Chicken-Marsala-4-1-500x500.jpg">
                </img>
                <p>{this.props.menu.title}</p>
                <Link onClick={() => this.setCurrentMenu()} className="menuViewLink" to="/menu/details/">View Menu</Link>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(DashboardItem);
