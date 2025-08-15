import './App.css';
import React from 'react';
import biga from './images/biga.png';

class ErrPage extends React.Component {
    render() {
        return (
            <div className="App">
                <header className={"justify-center flex flex-col items-center text-gray-200"}>
                    <p>404</p>
                    <img src={biga} className="App-logo" alt="biga"/>
                </header>
            </div>
        );
    }

}

export default ErrPage;
