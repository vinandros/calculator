import React from 'react'
import PropTypes from 'prop-types'

function Key(props) {
    return (
        <div id={props.id} className={props.className} onClick={props.handleClick}>
            <p>{props.label}</p>
        </div>
    )
}

Key.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    handleClick: PropTypes.func.isRequired
}

export default Key

