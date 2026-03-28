import React, { useState } from 'react';
import './MyName.css';
function MyName({ mySureName }) {
      const condision = true;
      const [isBlueMode, setIsBlueMode] = useState(true);
      // color changer function
      const toogleTheme = () => {
            setIsBlueMode(!isBlueMode);
      };
      return (
            /** logic color changer */

            <div style={{ background: isBlueMode ? 'lightblue' : 'red', color: isBlueMode ? 'black' : 'white' }}>
                  {/** in button our click handler color changer  */}
                  <button onClick={toogleTheme}>color Changer</button>
                  <h1>MyName Suleyman</h1>
                  {condision && <span>15 Years Old</span>}
                  <div>my Surname is {mySureName} </div>
            </div>
      );
}

export default MyName;
