import React, { useState } from 'react';
import { evaluate } from 'mathjs'

import './Calculator.css'


function Calculator () {
    const [currentDisplay, setCurrentDisplay] = useState(0);

    const handleReset = () => {
        setCurrentDisplay(0)
    }
    const calculate = () => {
        const result = evaluate(currentDisplay);
        setCurrentDisplay(result);
    }
    const handleButton = (e) => {
        const value = e.target.getAttribute('name');
        switch (value) {
            case '=':
                calculate();
                break;
            default:
                setCurrentDisplay(currentDisplay + value);
        }
    }

    return (
        <>
            <div class="container">
                <div class="calculator">
                    <div class="calculator_display">{currentDisplay}</div>
                    <div class="calculator_keys">
                        <button onClick={handleReset} name="AC" class="ac">AC</button>
                        <button onClick={handleButton} name="±" data-type="operator" class="plusMinus">&#xb1;</button>
                        <button onClick={handleButton} name="%" data-type="operator" class="percent">&#x25;</button>
                        <button onClick={handleButton} name="/" data-type="operator" class="divide">&#xf7;</button>
                        <button onClick={handleButton} name="7" data-type="number" class="seven">7</button>
                        <button onClick={handleButton} name="8" data-type="number" class="eight">8</button>
                        <button onClick={handleButton} name="9" data-type="number" class="nine">9</button>
                        <button onClick={handleButton} name="*" data-type="operator" class="multiply">&#xd7;</button>
                        <button onClick={handleButton} name="4" data-type="number" class="four">4</button>
                        <button onClick={handleButton} name="5" data-type="number" class="five">5</button>
                        <button onClick={handleButton} name="6" data-type="number" class="six">6</button>
                        <button onClick={handleButton} name="-" data-type="operator" class="minus">&#x2212;</button>
                        <button onClick={handleButton} name="1" data-type="number" class="one">1</button>
                        <button onClick={handleButton} name="2" data-type="number" class="two">2</button>
                        <button onClick={handleButton} name="3" data-type="number" class="three">3</button>
                        <button onClick={handleButton} name="+" data-type="operator" class="plus">&#x2b;</button>
                        <button onClick={handleButton} name="0" data-type="number" class="zero">0</button>
                        <button onClick={handleButton} name="." data-type="operator" class="decimal">.</button>
                        <button onClick={handleButton} name="=" data-type="operator" class="equals">&#x3d;</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator