import { useState } from 'react';

export default function Myfirsthook() {
      const [clicks, setClicks] = useState(0);
      const myStyle = {
            fontSize: '20px',
      };
      const increment = () => {
            setClicks((clicks) => clicks + 1);
      };
      return (
            <div>
                  <button
                        style={myStyle}
                        onClick={() => {
                              increment();
                        }}
                  >
                        click increment number + 1
                  </button>
                  <span style={myStyle}> {clicks}</span>
            </div>
      );
}
