import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import EditMenuAddDishItem from '../EditMenuAddDishItem/EditMenuAddDishItem';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class EditMenuAddDish extends Component {
    state = {
        selectedDish: 0,
        menu_id: 0
    };

    componentDidMount() {
        this.fetchDishes();
        this.setMenuId();
    };

    fetchDishes = () => {
        this.props.dispatch({ type: 'FETCH_DISHES' });
    }

    setMenuId = (menuId) => {
        this.setState({ ...this.state, menu_id: this.props.menuId })
    }

    handleAdd = () => {
        this.props.dispatch({ type: 'ADD_TO_MENU', payload: this.state })
        //this.props.getDetails();
        alert('Changes Saved!');
        this.setState({...this.state, selectedDish: 0})
    }

    handleDelete = () => {
        confirmAlert({
            title: 'Confirm delete',
            message: 'Are you sure to delete this?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => { alert('Menu deleted.'); this.handleMenuDelete(); }
                },
                {
                    label: 'No',
                    onClick: () => alert('Nothing deleted.')
                }
            ]
        });
    };

    handleMenuDelete = () => {
        this.props.dispatch({ type: 'DELETE_MENU', payload: this.props.match });
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div className="editMenuForm">
                <select className="dropdown" value={this.state.selectedDish} onChange={(event) => { this.setState({ ...this.state, selectedDish: event.target.value }) }}>
                    <option value="0">Select a Dish</option>
                    {this.props.store.dishes.map((dishSelection) => {
                        return (
                            <EditMenuAddDishItem
                                dishSelection={dishSelection}
                                selectedDishId={this.state.selectedDish}
                            />
                        )
                    })

                    }
                </select>

                <button className="addBtn" onClick={() => this.handleAdd()}>Add To Menu</button>
                <button className="dltBtn" onClick={() => { this.handleDelete() }}>Delete Menu</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(EditMenuAddDish);