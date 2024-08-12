import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        console.log(isEditing);
        setIsEditing(editing => !editing);
    }

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }    

    let editableplayerName = isEditing ? <input type="text" value={playerName} onChange={handleChange} required /> : <span className="player-name">{playerName}</span>;
    let buttonEdit = isEditing ? 'Save' : 'Edit';

    return (
    <li>
        <span className="player">
        {editableplayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{buttonEdit}</button>
        </span> 
    </li>
  );
}