require('normalize.css/normalize.css');
require('styles/App.sass');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">

        <button className='controll true' />
        <button className='controll false' />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
