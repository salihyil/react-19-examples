import { use } from 'react';
import { getPokemon } from './api';

const Pokemon = () => {
  const pokemon = use(getPokemon());

  return (
    <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
      <code>{JSON.stringify(pokemon, null, 1)}</code>
    </pre>
  );
};

export default Pokemon;
