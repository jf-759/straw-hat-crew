import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCrewmateById, updateCrewmate, deleteCrewmate } from "../utils";

const ROLE_OPTIONS = ["Captain", "Navigator", "Swordsman", "Sniper", "Cook", "Doctor", "Shipwright", "Musician", "Archer"];
const WEAPON_OPTIONS = ["Sword", "Gun", "Staff", "Bare Hands", "Cooking Knife", "None"];

export default function UpdateCrewmate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState(null);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [devilFruit, setDevilFruit] = useState("");
  const [personality, setPersonality] = useState("");
  const [weapon, setWeapon] = useState("");
  const [backstory, setBackstory] = useState("");

  useEffect(() => {
    const c = getCrewmateById(id);
    if (c) {
      setCrewmate(c);
      setName(c.name);
      setRole(c.role);
      setDevilFruit(c.devilFruit);
      setPersonality(c.personality);
      setWeapon(c.weapon);
      setBackstory(c.backstory);
    }
  }, [id]);

  if (!crewmate) return <p>Crewmate not found</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCrew = {
      ...crewmate,
      name,
      role,
      devilFruit,
      personality,
      weapon,
      backstory
    };
    updateCrewmate(updatedCrew);
    navigate("/");
  };

  const handleDelete = () => {
    deleteCrewmate(crewmate.id);
    navigate("/");
  };

  return (
    <div>
      <h1>Update Crewmate</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <div>
          <h3>Role</h3>
          {ROLE_OPTIONS.map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => setRole(option)}
              className={role === option ? "selected" : ""}
            >
              {option}
            </button>
          ))}
        </div>

        <input type="text" value={devilFruit} onChange={(e) => setDevilFruit(e.target.value)} />
        <input type="text" value={personality} onChange={(e) => setPersonality(e.target.value)} />

        <div>
          <h3>Weapon</h3>
          {WEAPON_OPTIONS.map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => setWeapon(option)}
              className={weapon === option ? "selected" : ""}
            >
              {option}
            </button>
          ))}
        </div>

        <textarea value={backstory} onChange={(e) => setBackstory(e.target.value)} />

        <button type="submit">Update</button>
        <button type="button" onClick={handleDelete}>Delete Crewmate</button>
      </form>
    </div>
  );
}
