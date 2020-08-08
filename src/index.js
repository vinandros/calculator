import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import "./styles/styles.scss";

function Wrapper() {
    return (
        <Fragment>
            <App />
        </Fragment>
    )
}

ReactDOM.render(<Wrapper />, document.getElementById("root"))
