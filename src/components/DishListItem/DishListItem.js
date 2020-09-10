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
        dishImg: this.props.dish.img_url
    };

    handleEdit = (event) => {
        this.setState({ ...this.state, selectOption: event.target.value });

        console.log(this.state.selectOption)
    }

    handleSave = () => {
        console.log(this.state.selectOption)

        this.setState({...this.state, selectOption: 0})
    }

    render() {
        return (
            <tr className="dishesMenusTable">
                {this.state.editName ?
                    <td><input onChange={(event) => { this.setState({ ...this.state, dishName: event.target.value }) }} /></td> :
                    <td>{this.props.dish.name}</td>}
                {this.state.editPrice ?
                    <td><input onChange={(event) => { this.setState({ ...this.state, dishPrice: event.target.value }) }} /></td> :
                    <td>{this.props.dish.price}</td>}
                {this.state.editDescription ?
                    <td><input onChange={(event) => { this.setState({ ...this.state, dishDescription: event.target.value }) }} /></td> :
                    <td>{this.props.dish.description}</td>}
                {this.state.editImg ?
                    <td><input onChange={(event) => { this.setState({ ...this.state, dishImg: event.target.value }) }} /></td> :
                    <td><img className="dishImg" src={this.props.dish.img_url}></img></td>}

                <h2>{this.state.selectOption}</h2>
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