import React from 'react'

const Note = ({id, title}) => {

    return(
        <tr>
            <td>{id}</td>
            <td>{title}</td>
        </tr>
    )
}

export default Note