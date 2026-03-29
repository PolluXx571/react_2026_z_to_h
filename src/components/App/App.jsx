import { useState } from 'react';
import MyName from '../MyName/MyName';
import './App.css';
import Myfirsthook from '../Hooks/Myfirsthook';
import Home from '../Home/Home';
import Formik from '../Form/Formik';
import Rendering from '../ConditionalRendering/Rendering';

function App() {
      const handleClick = () => {
            alert('I am function alert passed as a prop from the App component.');
      };
      const someWords = 'I am text passed from App Component';
      const condision = true;
      const styleForButton = {
            color: 'blue',
            fontSize: '20px',
      };
      return (
            condision && (
                  <div>
                        Hello react 1
                        <Myfirsthook />
                        <MyName mySureName='Irigato matoko' />
                        <Home message={someWords} myFunc={handleClick} />
                        <Formik />
                        <Rendering />
                  </div>
            )
      );
}

export default App;
