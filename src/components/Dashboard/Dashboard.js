import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
//import uppyFunction from '../../redux/uppy.js'

//material ui imports
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//     root: {
//         maxWidth: 345,
//     },
//     media: {
//         height: 140,
//     },
// });

// let classes = useStyles();

    class Dashboarder extends Component {

        componentDidMount() {
            this.getMenus();
        }
        
        getMenus = () => {
            console.log(this.props.store.user.id)
            this.props.dispatch({type: 'FETCH_MENUS', payload: this.props.store.user.id})
        }

        render() {
            return (
                <div>
                    <div className="sideBar">
                        <Link className="sideLinkBig" to="/add/menu">
                            Create New Menu
                    </Link>
                        <Link className="sideLinkBig" to="/add/dish">
                            Create New Dish
                    </Link>
                        <Link className="sideLinkSmall" to="/dashboard">
                            Dashboard
                    </Link>
                        <br />
                        <Link className="sideLinkSmall" to="/dishlist">
                            See Dishes
                    </Link>
                    </div>
                    <h2>Dash Component</h2>
                    <button onClick={() => this.getMenus()}>click here</button>

                    {/* {JSON.stringify(this.props.store.menuReducer)} */}

                    {this.props.store.menuReducer.map((menu) => {
                        return(
                            <p>{menu.title}</p>
                        )
                    })}
                    
                </div>
            );
        }
    }

    export default connect(mapStoreToProps)(Dashboarder);