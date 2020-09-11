import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class EditMenuItem extends Component {
    state = {
        heading: 'Class Component',
    };

    handleRemove = (id) => {
        console.log(id)
        this.props.dispatch({type: 'REMOVE_DISH', payload: id})
        alert('Changes Saved!');
        this.props.dispatch({type: 'FETCH_MENUS', payload: { id: this.props.dish.menu_id, user_id: this.props.store.user.id}})
        this.props.dispatch({type: 'SET_CURRENT_MENU', payload: { id: this.props.dish.menu_id, user_id: this.props.store.user.id}});
        this.props.history.push(`/edit/menu/${this.props.match}`);
    }


    render() {
        return (
            <tr className="dishesMenusTable">
                <td>{this.props.dish.name}</td>
                <td>${this.props.dish.price}</td>
                <td><button onClick={() => this.handleRemove(this.props.dish.md_id)}>Remove</button></td>
            </tr>
        );
    }
}

export default connect(mapStoreToProps)(EditMenuItem);