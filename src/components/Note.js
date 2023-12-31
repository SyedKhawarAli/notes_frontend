const Note = ({ note, toggleImaportance }) => {

    const label = note.important ? 'make not important' : 'make important'

    return (
        <li className="note">
            {note.content}
            <button onClick={toggleImaportance}>{label}</button>
        </li>
    )
}

export default Note