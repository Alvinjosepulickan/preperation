import React, { useState } from 'react'

const ButtonComponent = () => {
    const [isDisabled, setIsDisabled] = useState(true);

  // Toggle the button state when clicked
  const toggleButtonState = () => {
    setIsDisabled((prevState) => !prevState); // Toggle the state
  };

  return (
    <div>
      {/* Button controlled by isDisabled state */}
      <button onClick={toggleButtonState}>{isDisabled? 'Enable': 'Disable'} button</button>
      { isDisabled &&<button disabled={isDisabled}>Button Enabled</button>}
    </div>
  );
}

export default ButtonComponent