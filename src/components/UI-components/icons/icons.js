import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const icons = (props)=>{
    let icon ;
    switch (props.name){
        case "wifi":
            icon = <FontAwesomeIcon icon="wifi" />;
            break;
        case "forest-view":
            icon = <FontAwesomeIcon icon="tree" />;
            break;
        case "breakfast":
            icon = <FontAwesomeIcon icon="utensils" />;
            break;
        case "parking":
            icon = <FontAwesomeIcon icon="parking" />;
            break;
        case "gym":
            icon = <FontAwesomeIcon icon="dumbbell" />;
            break;
        case "sea-view":
            icon = <FontAwesomeIcon icon="umbrella-beach" />;
            break;
        case "airport shuttle":
            icon = <FontAwesomeIcon icon="plane-arrival" />;
            break;
        case "private pool":
            icon = <FontAwesomeIcon icon="swimming-pool" />;
            break;
        case "snow":
            icon = <FontAwesomeIcon icon="snowflake" />;
            break;
        case "mountain-view":
            icon = <FontAwesomeIcon icon="mountain" />;
            break;
        case "bath":
            icon = <FontAwesomeIcon icon="bath" />;
            break;
        case "shower":
            icon = <FontAwesomeIcon icon="shower" />;
            break;
    }

    return (
        {icon}
    );
}

export default icons;