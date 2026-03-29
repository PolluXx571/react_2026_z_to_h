import { useState } from 'react';

export default function Home({ message, myFunc }) {
      const [world, setWorld] = useState('Hello');
      const [value, setValue] = useState('');
      const handleclick = () => {
            setWorld((prev) => (prev === 'Hello' ? 'peace' : 'Hello'));
      };
      const wrotedValue = (event) => {
            setValue(event.target.value);
      };
      return (
            <div>
                  <div>Home Page</div>
                  <button
                        onClick={() => {
                              alert('The key was pressed');
                        }}
                  >
                        press the button
                  </button>
                  <p>Hello {world}</p>
                  <button onClick={handleclick}>Change world to Peace or to World</button>
                  <p>Word from App Component === {message}</p>
                  <button
                        onClick={() => {
                              myFunc();
                        }}
                  >
                        click for message from App component
                  </button>{' '}
                  <br />
                  <input type='text' placeholder='write Some thing' onChange={wrotedValue} />
                  <p>Here y're text: {value} </p>
            </div>
      );
}
