import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getCrewmateById } from "../utils"

export default function CrewDetail() {
    const { id } = useParams()
    const [crewmate, setCrewmate] = useState(null)

    useEffect(() => {
        const c = getCrewmateById(id)
        setCrewmate(c)
    }, [id])

    if (!crewmate) return <p>Crewmate not found</p>

    return (
        <div className="crew-detail">
            <h1>{crewmate.name}</h1>
            <p>Role: {crewmate.role}</p>
            <p>Devil Fruit: {crewmate.devilFruit}</p>
            <p>Personality: {crewmate.personality}</p>
            <p>Weapon: {crewmate.weapon}</p>
            <p>Backstory: {crewmate.backstory}</p>

             <div className="crew-detail-buttons">
                <Link to={`/update/${crewmate.id}`}>Edit Crewmate</Link>
                <Link to="/">Back to Crew Summary</Link>
            </div>
        </div>
    )
}
