import React, { Component } from 'react'
import './Calculator.css'

import Button from '../Button/Button'
import Display from '../Display/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch (e) {
                values[0] = this.state.values[0]
            }

            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }
    }

    render() {
        return (
            <div className="calculator">
               <Display value={this.state.displayValue} />
                <Button text="AC" callBack={this.clearMemory} triple />
                <Button text="/" callBack={this.setOperation} operation />
                <Button text="7" callBack={this.addDigit} />
                <Button text="8" callBack={this.addDigit} />
                <Button text="9" callBack={this.addDigit} />
                <Button text="*" callBack={this.setOperation} operation />
                <Button text="4" callBack={this.addDigit} />
                <Button text="5" callBack={this.addDigit} />
                <Button text="6" callBack={this.addDigit} />
                <Button text="-" callBack={this.setOperation} operation />
                <Button text="1" callBack={this.addDigit} />
                <Button text="2" callBack={this.addDigit} />
                <Button text="3" callBack={this.addDigit} />
                <Button text="+" callBack={this.setOperation} operation />
                <Button text="0" callBack={this.addDigit} double />
                <Button text="." callBack={this.addDigit} />
                <Button text="=" callBack={this.setOperation} operation />
            </div>
        )
    }
}