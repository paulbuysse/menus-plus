import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

class DashboardItem extends Component {

    setCurrentMenu = () => {
        //goes to current menu saga with menu id and user id
        this.props.dispatch({type: 'SET_CURRENT_MENU', payload: { id: this.props.menu.id, user_id: this.props.store.user.id}})
    }

    render() {
        return (
            <div className="menuCards" id={this.props.i}>
                <img className="menuImg" alt="placeholder"
                    src="data:image/jpeg;base64,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">
                </img>
                <p>{this.props.menu.title}</p>
                <Link onClick={() => this.setCurrentMenu()} className="menuViewLink" to={`/menu/details/${this.props.menu.id}`}>View Menu</Link>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(DashboardItem);
