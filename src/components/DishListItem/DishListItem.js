import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './DishListItem.css'

class DishListItem extends Component {
    state = {
        editName: false,
        editPrice: false,
        editDescription: false,
        editImg: false,
        selectOption: 0,
        dishName: this.props.dish.name,
        dishPrice: this.props.dish.price,
        dishDescription: this.props.dish.description,
        dishImg: this.props.dish.img_url,
        dishId: this.props.dish.id,
    };

    handleEdit = (event) => {
        if (event.target.value === '1') {
            this.setState({ ...this.state, selectOption: event.target.value, editName: true });
        } else if (event.target.value === '2') {
            this.setState({ ...this.state, selectOption: event.target.value, editPrice: true });
        } else if (event.target.value === '3') {
            this.setState({ ...this.state, selectOption: event.target.value, editDescription: true });
        } else if (event.target.value === '4') {
            this.setState({ ...this.state, selectOption: event.target.value, editImg: true });
        }

    }

    handleSave = () => {
        this.props.dispatch({type: 'UPDATE_DISH', payload: this.state})

        this.setState({
            editName: false,
            editPrice: false,
            editDescription: false,
            editImg: false,
            selectOption: 0,
            dishName: this.props.dish.name,
            dishPrice: this.props.dish.price,
            dishDescription: this.props.dish.description,
            dishImg: this.props.dish.img_url
        })
    }

    render() {
        return (
            <tr className="dishesMenusTable">
                {this.state.editName ?
                    <td><input onChange={(event) => { this.setState({ ...this.state, dishName: event.target.value }) }} /></td> :
                    <td>{this.props.dish.name}</td>}
                {this.state.editPrice ?
                    <td><input onChange={(event) => { this.setState({ ...this.state, dishPrice: event.target.value }) }} /></td> :
                    <td>${this.props.dish.price}</td>}
                {this.state.editDescription ?
                    <td><input onChange={(event) => { this.setState({ ...this.state, dishDescription: event.target.value }) }} /></td> :
                    <td>{this.props.dish.description}</td>}
                {this.state.editImg ?
                    <td><input onChange={(event) => { this.setState({ ...this.state, dishImg: event.target.value }) }} /></td> :
                    <td><img className="dishImg" src={this.props.dish.img_url}></img></td>}

                <td>
                    {this.state.selectOption ?
                        <button onClick={() => {this.handleSave()}}>Save</button> :
                        <select onChange={(event) => { this.handleEdit(event) }}>
                            <option value="0">Edit...</option>
                            <option value="1">Dish Name</option>
                            <option value="2">Price</option>
                            <option value="3">Description</option>
                            <option value="4">Image Url</option>
                        </select>}

                </td>
            </tr>
        );
    }
}

export default connect(mapStoreToProps)(DishListItem);