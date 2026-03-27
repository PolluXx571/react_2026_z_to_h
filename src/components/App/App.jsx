import { useState } from 'react';
import MyName from '../MyName/MyName';
import { Email } from '../Email';
import Useimg from '../Useimg';
import Hello from '../Hello';

import './App.css';

function App() {
      const [count, setCount] = useState(0);
      const handleClick = () => {
            alert('hello world');
      };
      const condision = true;
      const styleForButton = {
            color: 'blue',
            fontSize: '20px',
      };
      return (
            condision && (
                  <div>
                        Hello react 1
                        <MyName mySureName='Irigato matoko' />
                        <Hello style={styleForButton} onClick={handleClick} />
                        <Email />
                        <Useimg />
                  </div>
            )
      );
}

export default App;
