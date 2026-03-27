import React from 'react';
import './MyName.css';
function MyName({ mySureName }) {
      const condision = true;
      return (
            <div>
                  <h1>MyName Suleyman</h1>
                  {condision && <span>15 Years Old</span>}
                  <div>my Surname is {mySureName} </div>
            </div>
      );
}

export default MyName;
