import { useState } from 'react';
import MyName from '../MyName/MyName';
import { Email } from '../Email';

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
                  </div>
            )
      );
}

export default App;
