import React, { useEffect, useState } from 'react';

function UseEffectExample() {
      const [datas, setDatas] = useState([]);

      useEffect(() => {
            async function getData() {
                  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
                  const result = await response.json();
                  setDatas(result);
            }
            getData();
      }, []);

      return (
            <div>
                  <ul>
                        
                        {datas?.map((data) => (
                              <li key={data.id}>{data.title}</li>
                        ))}
                  </ul>
            </div>
      );
}

export default UseEffectExample;
