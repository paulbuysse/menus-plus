import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class EditMenuItem extends Component {
    state = {
        heading: 'Class Component',
        dishName: this.props.dish.name,
        dishPrice: this.props.dish.price
    };

    componentDidMount() {
        this.props.dispatch({type: 'SET_CURRENT_MENU', payload: { id: this.props.dish.menu_id, user_id: this.props.store.user.id}});
    }

    handleRemove = (id) => {
        //console.log(id)
        this.props.dispatch({type: 'REMOVE_DISH', payload: { menuId: this.props.dish.menu_id, user_id: this.props.store.user.id, removeId: id}})
        alert('Changes Saved!');
    }


    render() {
        return (
            <tr className="dishesMenusTable">
                <td>{this.state.dishName}</td>
                <td>${this.state.dishPrice}</td>
                <td><button onClick={() => this.handleRemove(this.props.dish.md_id)}>Remove</button></td>
            </tr>
        );
    }
}

export default connect(mapStoreToProps)(EditMenuItem);