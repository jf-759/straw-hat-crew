import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCrewmate } from "../utils";

const ROLE_OPTIONS = ["Captain", "Navigator", "Swordsman", "Sniper", "Cook", "Doctor", "Shipwright", "Musician", "Archer"];
const WEAPON_OPTIONS = ["Sword", "Gun", "Staff", "Bare Hands", "Cooking Knife", "None"];

export default function CreateCrewmate() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [devilFruit, setDevilFruit] = useState("");
  const [personality, setPersonality] = useState("");
  const [weapon, setWeapon] = useState("");
  const [backstory, setBackstory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCrew = {
      id: Date.now(),
      name,
      role,
      devilFruit,
      personality,
      weapon,
      backstory,
      createdAt: new Date()
    };
    addCrewmate(newCrew);
    navigate("/");
  };

  return (
    <div>
      <h1>Create New Crewmate</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <div className="attribute-buttons">
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

        <input
          type="text"
          placeholder="Devil Fruit"
          value={devilFruit}
          onChange={(e) => setDevilFruit(e.target.value)}
        />
        <input
          type="text"
          placeholder="Personality"
          value={personality}
          onChange={(e) => setPersonality(e.target.value)}
        />

        <div className="attribute-buttons">
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

        <textarea
          placeholder="Backstory"
          value={backstory}
          onChange={(e) => setBackstory(e.target.value)}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
