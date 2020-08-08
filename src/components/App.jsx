import React, { Component, Children } from 'react'
import Key from "./Key.jsx"
import { numbers } from "../data/data.js"
import { operators } from "../data/data.js"
import Display from "./Display.jsx"

export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            displayLabel:"0",
            operation:""
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let value = e.target.querySelector('p').textContent;
        if(this.state.displayLabel ==="0"){
            this.setState({...this.state, displayLabel:value, operation: this.state.operation + value});
        }else{
            this.setState({...this.state, displayLabel:this.state.displayLabel + value, operation: this.state.operation + value});
        }

        if(/\+|\-|\*|\//.test(this.state.displayLabel)){
            this.setState({...this.state, displayLabel:value, operation: this.state.operation + value});
        }

        if(/\+|\*|\//.test(this.state.displayLabel) && /\+|\*|\//.test(value)){
            this.setState({displayLabel:value, operation: this.state.operation});
        }

        if (/[0-9]|\+|\-|\*|\//.test(value)){
            if(/\./.test(this.state.displayLabel)){
                this.setState({...this.state, displayLabel:this.state.displayLabel + value, operation: this.state.operation + value});
            }else{
                if(/\+|\-|\*|\//.test(value)){
                    this.setState({...this.state, displayLabel:value, operation: this.state.operation + value});
                }
            }
        }else if(/AC/.test(value)){
            this.setState({
                displayLabel:"0",
                operation:""
            })
        }else if (/\./.test(value) && !/\./.test(this.state.displayLabel)) {
                this.setState({...this.state, displayLabel:this.state.displayLabel + value, operation: this.state.operation + value});
            }else{
                this.setState(this.state);
            }

    }
    
    render() {
        const numbersPad = numbers.map(elem =>{
            return <Key key={elem.id} id={elem.id} label={elem.number} className="number" handleClick={this.handleClick} />
        })
        const operatorsPad = operators.map(elem =>{
            return <Key key={elem.id} id={elem.id} label={elem.operator} className="operator" handleClick={this.handleClick} />
        })

        const { displayLabel, operation } = this.state;

        return (
            <div id="calculator">
                <Display displayLabel={ displayLabel } operation={ operation } />

                <div id="numbers-operators">
                    <div id="numbers-container">
                        <Key id="clear" label="AC" handleClick={this.handleClick} />
                        {numbersPad}
                        <Key id="decimal" label="." handleClick={this.handleClick} />
                    </div>
                    <div id="operators-container">
                        {operatorsPad}
                        <Key id="equals" label="="  handleClick={this.handleClick} />
                    </div>
                </div>
                
            </div>
        )
    }
}

