import React from 'react'
import Note from './Note'

const Notes = ({notes}) => {

    const row = () => notes.map(note => <Note id={note.id} title={note.title} />) 
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {row()}
            </tbody>
        </table>
    )
}

export default Notes