import { useState } from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';

function App() {
    const [dice, setDice] = useState(getDice());

    function getDice() {
        const diceArr = [];
        for (let i = 0; i < 10; i++) {
            const obj = {
                id: nanoid(),
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            }
            diceArr.push(obj);
        }

        return diceArr;
    }

    function roll() {
        setDice(getDice());
    }

    const diceElements = dice.map(die => (
        <Die key={die.id} value={die.value} isHeld={die.isHeld} />
    ));

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

                <button className="roll-btn" onClick={roll}>Roll</button>
            </div>
        </main>
    )
}

export default App
