import React from 'react'
import ReactDOM from 'react-dom'
import "./styles/styles.scss";

function Wrapper() {
    return (
        <div>
            <h1>Hi</h1>
        </div>
    )
}

ReactDOM.render(<Wrapper />, document.getElementById("root"))
