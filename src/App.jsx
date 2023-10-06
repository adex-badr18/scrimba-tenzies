import { useState } from 'react';
import './App.css';
import Die from './components/Die';

function App() {
    const [dice, setDice] = useState(getDice());

    function getDice() {
        const diceArr = [];
        for (let i = 0; i < 10; i++) {
            diceArr.push(Math.ceil(Math.random() * 6));
        }

        return diceArr;
    }

    const diceElements = dice.map((die, index) => <Die key={index} value={die} />)

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

                <button className="roll-btn">Roll</button>
            </div>
        </main>
    )
}

export default App
