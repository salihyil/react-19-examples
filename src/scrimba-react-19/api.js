export async function updateNameInDB(newName) {
  // Sleep for 1500ms to mimic an API call round trip
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (newName.toLowerCase().includes('error')) {
    throw new Error('Failed to update name');
  }
  localStorage.setItem('name', JSON.stringify(newName));
  return newName;
}

export const getPokemon = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  return res.json();
};
