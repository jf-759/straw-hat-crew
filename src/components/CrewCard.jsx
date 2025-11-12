import { Link } from "react-router-dom"

export default function CrewCard({ crewmate, onDelete }) {
    return (
        <div className="crew-card">
            <h2>{crewmate.name}</h2>
            <p>Role: {crewmate.role}</p>
            <p>Devil Fruit: {crewmate.devilFruit}</p>
            <p>Personality: {crewmate.personality}</p>
            <p>Weapon: {crewmate.weapon}</p>
            <Link to={`/crew/${crewmate.id}`}>View</Link>
            <Link to={`/update/${crewmate.id}`}>Edit</Link>
            <button onClick={() => onDelete(crewmate.id)}>Delete</button>
        </div>
    )
}