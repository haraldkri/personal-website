import React from 'react';
import logo from './logo.svg';
import './App.css';
import FallingStar from './FallingStar'


function App() {
    return (
        <div className="App">
            {
                Array.from({length: 32}).map((_item, index) => {
                    return <FallingStar delay={index * .1}/>
                })
            }
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Harald Kriebisch
                </p>
            </header>

        </div>
    );
}

export default App;
