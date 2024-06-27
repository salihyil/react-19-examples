import { useActionState, useOptimistic, useRef } from 'react';

import { updateNameInDB } from './api';
import Button from './button';

function ScrimbaReact19() {
  const buttonRef = useRef(null);
  const [state, actionFunction, isPending] = useActionState(updateName, {
    error: null,
    name: JSON.parse(localStorage.getItem('name')) || 'Anonymous user',
  });

  const [optimisticName, setOptimisticName] = useOptimistic(state, (state, newName) => ({
    ...state,
    name: newName,
    sending: true,
  }));

  async function updateName(prevState, formData) {
    setOptimisticName(formData.get('name'));
    try {
      const newName = await updateNameInDB(formData.get('name'));
      return { name: newName, error: null };
    } catch (error) {
      return { error, name: prevState.name };
    }
  }

  return (
    <div className='text-center'>
      <p className='username'>
        Current user: <span>{optimisticName.name}</span>
      </p>
      {optimisticName.sending && <p className='sending'>optimisticName Sending...</p>}
      <form action={actionFunction}>
        <input className='text-black' type='text' name='name' required />
        <Button ref={buttonRef} type='submit'>
          Update
        </Button>
        {!isPending && state.error && <p className='error'>{state.error.message}</p>}
      </form>
    </div>
  );
}
export default ScrimbaReact19;
