import { Suspense } from 'react';

import './App1.css';
import ScrimbaReact19 from './scrimba-react-19';
import Pokemon from './scrimba-react-19/pokemon';

function App1() {
  return (
    <div className='container '>
      <ScrimbaReact19 />
      <Suspense fallback={<h1 className='text-2xl text-center font-bold mt-5'>Loading...</h1>}>
        <Pokemon />
      </Suspense>
    </div>
  );
}

export default App1;
