import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import CrewCard from "../components/CrewCard"
import { getCrewmates, saveCrewmates } from "../utils"

export default function CrewSummary() {
    const [crewmates, setCrewmates] = useState([])

    useEffect(() => {
        const data = getCrewmates()
        setCrewmates(
          data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )
        )
    }, [])

    const handleDelete = (id) => {
        const updated = crewmates.filter(c => c.id !== id)
        setCrewmates(updated)
        saveCrewmates(updated)
    }

    return (
        <div>
            <h1>Straw Hat Crew Summary</h1>
            <Link to="/create">Add New Crewmate</Link>
            <div className="crew-list">
                {crewmates.map(c => (
                    <CrewCard key={c.id} crewmate={c} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    )
}
