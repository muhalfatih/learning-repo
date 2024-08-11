import { useState } from "react";

export default function Player({ name, symbol }) {
    const [ isEditing, setIsEditing ] = useState(false)

    const handleEditClick = () => {
        console.log(isEditing);
        setIsEditing(!isEditing);
    }

    let playerName = isEditing ? <input type="text" required /> : <span className="player-name">{name}</span>;
    let buttonEdit = isEditing ? 'Save' : 'Edit';

    return (
    <li>
        <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{buttonEdit}</button>
        </span> 
    </li>
  );
}