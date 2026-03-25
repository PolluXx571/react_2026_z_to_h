import { useState } from 'react';
import MyName from '../MyName/MyName';
import { Email } from '../Email';
import Useimg from '../Useimg';

import './App.css';

function App() {
      const [count, setCount] = useState(0);

      const condision = true;
      return (
            condision && (
                  <div>
                        Hello react 1
                        <MyName />
                        <Email />
                        <Useimg />
                  </div>
            )
      );
}

export default App;
