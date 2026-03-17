import { useState } from 'react';
import MyName from '../MyName/MyName';

import './App.css';

function App() {
      const [count, setCount] = useState(0);

      return (
            <>
                  <div>
                        Hello react 1
                        <MyName />
                  </div>
            </>
      );
}

export default App;
