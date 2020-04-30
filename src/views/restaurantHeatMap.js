/*
    This file is the component that renders the Restaurant heat map
 */
import React from 'react'; //eslint-disable-line
import ApiHooks from '../hooks/ApiHooks';


const RestaurantHeatMapView = (props) => {
    const {children, value, index, ...other} = props;
    const {getRestaurantHeatMap} = ApiHooks();
    return (
        <div role={"tabfragmentrestuarantheatmap"} //eslint-disable-line
             hidden={value !== index}
             id={`tabfragmentp5map-${index}`}
             aria-labelledby={`tab-${index}`}
             {...other}>


        </div>
    )
}

export default RestaurantHeatMapView