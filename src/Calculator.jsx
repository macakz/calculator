import React, { useState } from 'react';
import { evaluate } from 'mathjs'

import './Calculator.css'


function Calculator () {
    const [currentDisplay, setCurrentDisplay] = useState(" ");

    const handleReset = () => {
        setCurrentDisplay(" ")
    }
    const calculate = () => {
        const result = evaluate(currentDisplay)
        setCurrentDisplay(result)
    }
    const handleNegative = () => {
        if (currentDisplay.includes('-')) {
            setCurrentDisplay(currentDisplay.split("-").pop())
        } else setCurrentDisplay('-' + currentDisplay)
    }
    
    const handleButton = (e) => {
        const value = e.target.getAttribute('name')
        switch (value) {
            case '=':
                calculate();
                break;
            case '%':
                setCurrentDisplay(currentDisplay / 100)
                break
            case '±':
                handleNegative()
                break
            default:
                setCurrentDisplay(currentDisplay + value);
        }
    }

    return (
        <>
            <div className="container">
                <div className="calculator">
                    <div className="calculator_display">
                        {
                            currentDisplay === " "
                                ? <div>0</div>
                                : <div>{currentDisplay}</div>
                        }
                    </div>
                    <div className="calculator_keys">
                        <button onClick={handleReset} name="AC" className="ac">AC</button>
                        <button onClick={handleButton} name="±" data-type="operator" className="plusMinus">&#xb1;</button>
                        <button onClick={handleButton} name="%" data-type="operator" className="percent">&#x25;</button>
                        <button onClick={handleButton} name="/" data-type="operator" className="divide">&#xf7;</button>
                        <button onClick={handleButton} name="7" data-type="number" className="seven">7</button>
                        <button onClick={handleButton} name="8" data-type="number" className="eight">8</button>
                        <button onClick={handleButton} name="9" data-type="number" className="nine">9</button>
                        <button onClick={handleButton} name="*" data-type="operator" className="multiply">&#xd7;</button>
                        <button onClick={handleButton} name="4" data-type="number" className="four">4</button>
                        <button onClick={handleButton} name="5" data-type="number" className="five">5</button>
                        <button onClick={handleButton} name="6" data-type="number" className="six">6</button>
                        <button onClick={handleButton} name="-" data-type="operator" className="minus">&#x2212;</button>
                        <button onClick={handleButton} name="1" data-type="number" className="one">1</button>
                        <button onClick={handleButton} name="2" data-type="number" className="two">2</button>
                        <button onClick={handleButton} name="3" data-type="number" className="three">3</button>
                        <button onClick={handleButton} name="+" data-type="operator" className="plus">&#x2b;</button>
                        <button onClick={handleButton} name="0" data-type="number" className="zero">0</button>
                        <button onClick={handleButton} name="." data-type="operator" className="decimal">.</button>
                        <button onClick={handleButton} name="=" data-type="operator" className="equals">&#x3d;</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator