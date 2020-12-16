import React from 'react';

const Loading = (props) => {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}

Loading.defaultProps = {
  message: 'Loading...'
}

export default Loading;