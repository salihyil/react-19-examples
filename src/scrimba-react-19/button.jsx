import PropTypes from 'prop-types';
import { useFormStatus } from 'react-dom';

function Button({ children, ref, ...props }) {
  const status = useFormStatus();
  console.log(status); //submit butona basınca: {pending: true, data: FormData, method: 'get', action: ƒ}
  function handleClick() {
    console.log(ref.current.clientHeight);
    ref.current.style.height = '44px';
  }
  return (
    <button ref={ref} onClick={handleClick} disabled={status.pending} {...props}>
      {status.pending ? 'Submitting...' : children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  ref: PropTypes.any,
};

export default Button;
