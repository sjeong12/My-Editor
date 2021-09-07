import { useState } from 'react';

function SpinBox() {
  const [value, setValue] = useState(0);

  const handleFocus = e => e.target.select();
  const handleBlur = () => { if (value === '') setValue(0); }
  const handleChange = e => {
    const onlyNum = e.target.value.replace(/[^0-9]/g, '');
    setValue(onlyNum);
  }

  const onClick = e => {
    if (e.target.id === "inc-btn") setValue(value => Number(value) + 1);
    if (e.target.id === "dec-btn") setValue(value => Number(value) - 1);
  }

  return (
    <div className="spin-box">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
	    <div className="contorls">
        <button id="inc-btn" type="button" onClick={onClick}>+</button>
        <button id="dec-btn" type="button" onClick={onClick}>-</button>
	    </div>
    </div>
  );
}
export default SpinBox;