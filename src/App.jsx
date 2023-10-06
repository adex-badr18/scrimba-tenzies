import { useState } from 'react';
import './App.css';
import Die from './components/Die';

function App() {
    function getTenRandomNumbers() {
        const diceArr = [];
        for (let i = 0; i < 10; i++) {
            diceArr.push(Math.floor(Math.random() * 6) + 1);
        }

        return diceArr;
    }

    const diceElements = getTenRandomNumbers().map((number, index) => <Die key={index} value={number} />)

    return (
        <main className='container'>
            <div className="tenzies--container">
                <h1 className="title">Tenzies</h1>
                <p>
                    Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
                </p>

                <div className="dice-container">
                    {diceElements}
                </div>
            </div>
        </main>
    )
}

export default App
