import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faWifi,
    faTree,
    faUtensils,
    faParking,
    faDumbbell,
    faUmbrellaBeach,
    faPlaneArrival,
    faSwimmingPool,
    faSnowflake,
    faMountain,
    faShower,
    faBath,
    faMapMarkerAlt,
    faHeart,

} from '@fortawesome/free-solid-svg-icons';
const icons = (props)=>{

    const StyleIcon = styled(FontAwesomeIcon)`
        color:${props.color};
        padding: 0 7px;
        transform: scale(1.3);

        :hover{
            color:${props.hoverColor};
        }
    `;
    let iconService ;
    switch (props.service){
        case "wifi":
            iconService = (<StyleIcon icon={faWifi} />);
            break;
        case "forest-view":
            iconService = (<StyleIcon icon={faTree} />);
            break;
        case "breakfast":
            iconService = (<StyleIcon icon={faUtensils} />);
            break;
        case "parking":
            iconService = (<StyleIcon icon={faParking} />);
            break;
        case "gym":
            iconService = (<StyleIcon icon={faDumbbell} />);
            break;
        case "sea-view":
            iconService = (<StyleIcon icon={faUmbrellaBeach} />);
            break;
        case "airport shuttle":
            iconService = (<StyleIcon icon={faPlaneArrival} />);
            break;
        case "private pool":
            iconService = (<StyleIcon icon={faSwimmingPool} />);
            break;
        case "snow":
            iconService = (<StyleIcon icon={faSnowflake} />);
            break;
        case "mountain-view":
            iconService = (<StyleIcon icon={faMountain} />);
            break;
        case "bath":
            iconService = (<StyleIcon icon={faBath} />);
            break;
        case "shower":
            iconService = (<StyleIcon icon={faShower} />);
            break;
        case "location":
            iconService = (<StyleIcon icon={faMapMarkerAlt} />);
            break;
        case "heart":
            iconService = (<StyleIcon icon={faHeart} />);
            break;
        default:
            iconService= <p>Error</p>
    }

    return (
        iconService
    );
}

export default icons;