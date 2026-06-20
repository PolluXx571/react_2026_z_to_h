import React, { useEffect, useState } from 'react';

function UseEffectExample() {
      const [datas, setDatas] = useState([]);
      const [count, setCount] = useState(0);
      const addCount = () => {
            setCount((prev) => prev + 1);
      };
      useEffect(() => {
            async function getData() {
                  const response = await fetch('https://retoolapi.dev/lf9NwJ/data?_limit=14');
                  const result = await response.json();
                  setDatas(result);
            }
            getData();
      }, [count]);

      return (
            <div>
                  <ul>
                        {datas?.map((data) => (
                              <li key={data.id}>{data.Column}</li>
                        ))}
                  </ul>
                  <h1>{count}</h1>
                  <button
                        onClick={addCount}
                        onMouseDown={(e) => (e.target.style.transform = 'scale(0.95)')}
                        onMouseUp={(e) => (e.target.style.transform = 'scale(1)')}
                        style={{ padding: '10px', border: '1px', background: 'red', transition: 'transform 0.1s' }}
                  >
                        click me
                  </button>
            </div>
      );
}

export default UseEffectExample;
