import React from 'react';

const getSeason = (latitude, month) => {
    if (month => 3 && month <= 9) {
        return latitude > 0 ? 'summer' : 'winter';
    } else {
        return latitude > 0 ? 'winter' : 'summer';
    }
}

const seasonConfig = {
    'summer': {
        text: 'Let\'s hit the beach',
        iconName: 'sun'
    },
    'winter': {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
        <div>
            <i className={`${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`${iconName} icon`}/>
        </div>
    );
}

export default SeasonDisplay;