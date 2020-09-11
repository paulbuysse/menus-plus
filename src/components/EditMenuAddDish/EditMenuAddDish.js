import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import EditMenuAddDishItem from '../EditMenuAddDishItem/EditMenuAddDishItem';

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
        this.props.dispatch({type: 'ADD_TO_MENU', payload: this.state})
        this.props.dispatch({type: 'FETCH_MENUS', payload: { id: this.state.menu_id, user_id: this.props.store.user.id}})
        this.props.dispatch({type: 'SET_CURRENT_MENU', payload: { id: this.state.menu_id, user_id: this.props.store.user.id}});
        alert('Changes Saved!');
    }

    render() {
        return (
            <div>
                <select onChange={(event) => { this.setState({ ...this.state, selectedDish: event.target.value }) }}>
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

                <button onClick={() => this.handleAdd()}>Add To Menu</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(EditMenuAddDish);