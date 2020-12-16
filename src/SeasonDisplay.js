import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const seasonConfig = {
  winter: {
    message: `Brr, it's chilly!`,
    icon: 'snowflake'
  },
  summer: {
    message: `Let's hit the beach!`,
    icon: 'umbrella-beach'
  }
}

const SeasonDisplay = (props) => {
  let season = getSeason(props.lat, new Date().getMonth)
  let { message, icon } = seasonConfig[season]

  return (
    <div>
      <i className={`far fa-${icon}`}></i>
      <h2>{message}</h2>
      <i className={`far fa-${icon}`}></i>
    </div>
  );
}

export default SeasonDisplay;