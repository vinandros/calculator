import React from 'react'
import PropTypes from 'prop-types'

function Display(props) {
    return (
        <div id="display-screen">
            <p id="operation">{ props.operation }</p>
            <p id="display">{ props.displayLabel }</p>
        </div>
    )
}

Display.propTypes = {
    displayLabel: PropTypes.string.isRequired,
    operation: PropTypes.string.isRequired
}

export default Display

