import { useState } from 'react';

function SpinBox() {
  const [value, setValue] = useState(0);

  const handleFocus = e => e.target.select();
  const handleChange = e => {
    const onlyNum = e.target.value.replace(/[^0-9]/g, '');
    if (Number(onlyNum) < Number.MAX_SAFE_INTEGER)
      setValue(Number(onlyNum));
    else
      setValue(Number.MAX_SAFE_INTEGER);
  }

  const onClick = e => {
    if (e.target.id === "inc-btn" && value < Number.MAX_SAFE_INTEGER)
      setValue(value => value + 1);
    if (e.target.id === "dec-btn" && value > 0)
      setValue(value => value - 1);
  }

  return (
    <div className="spin-box">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
      />
	    <div className="contorls">
        <button id="inc-btn" type="button" onClick={onClick}>+</button>
        <button id="dec-btn" type="button" onClick={onClick}>-</button>
	    </div>
    </div>
  );
}
export default SpinBox;