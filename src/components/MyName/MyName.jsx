import React from 'react';
import './MyName.css';
function MyName() {
      const condision = true;
      return (
            <div>
                  <h1>MyName Suleyman</h1>
                  {condision && <span>15 Years Old</span>}
            </div>
      );
}

export default MyName;
