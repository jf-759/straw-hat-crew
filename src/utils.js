const STORAGE_KEY = "strawHatCrew";

export function getCrewmates() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveCrewmates(crewmates) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(crewmates));
}

export function addCrewmate(crewmate) {
  const crew = getCrewmates();
  crew.unshift(crewmate); 
  saveCrewmates(crew);
}

export function getCrewmateById(id) {
  return getCrewmates().find(c => c.id === Number(id));
}

export function updateCrewmate(updatedCrewmate) {
  const crew = getCrewmates().map(c =>
    c.id === updatedCrewmate.id ? updatedCrewmate : c
  );
  saveCrewmates(crew);
}

export function deleteCrewmate(id) {
  const crew = getCrewmates().filter(c => c.id !== Number(id));
  saveCrewmates(crew);
}
