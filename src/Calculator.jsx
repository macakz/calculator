import './Calculator.css'
function Calculator () {
    return (
        <>
            <div class="container">
                <div class="calculator">
                    <div class="calculator_display">0</div>
                    <div class="calculator_keys">
                        <button class="ac">AC</button>
                        <button data-type="operator" class="plusMinus">&#xb1;</button>
                        <button data-type="operator" class="percent">&#x25;</button>
                        <button data-type="operator" class="divide">&#xf7;</button>
                        <button data-type="number" class="seven">7</button>
                        <button data-type="number" class="eight">8</button>
                        <button data-type="number" class="nine">9</button>
                        <button data-type="operator" class="multiply">&#xd7;</button>
                        <button data-type="number" class="four">4</button>
                        <button data-type="number" class="five">5</button>
                        <button data-type="number" class="six">6</button>
                        <button data-type="operator" class="minus">&#x2212;</button>
                        <button data-type="number" class="one">1</button>
                        <button data-type="number" class="two">2</button>
                        <button data-type="number" class="three">3</button>
                        <button data-type="operator" class="plus">&#x2b;</button>
                        <button data-type="number" class="zero">0</button>
                        <button data-type="operator" class="decimal">.</button>
                        <button data-type="operator" class="equals">&#x3d;</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator