import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class EditMenuAddDishItem extends Component {
    state = {
        heading: 'add Component',
    };

    render() {
        return (
            <option value={this.props.dishSelection.id}>{this.props.dishSelection.name}</option>
        );
    }
}

export default connect(mapStoreToProps)(EditMenuAddDishItem);
