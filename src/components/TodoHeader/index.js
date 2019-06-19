import React from 'react'
import PropType from 'prop-types'

export default function TodoHeader(props) {
    
    return (
        <>
            <h1>{props.children}</h1>
            <h3>{props.desc}</h3>
        </>
    )
    
}

TodoHeader.prototype = {
    desc: PropType.string.isRequired,
    children:PropType.isRequired
}
TodoHeader.defaultProps = {
    desc:'如果还有明天'
}
