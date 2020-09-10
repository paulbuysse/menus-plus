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

    render() {
        return (
            <div>
                <h1>{this.state.selectedDish}{this.state.menu_id}</h1>
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

                <button>Add To Menu</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(EditMenuAddDish);