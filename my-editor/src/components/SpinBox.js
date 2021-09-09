import { useRef, useState } from 'react';

function SpinBox() {
  const [value, setValue] = useState(0);
  const timerRef = useRef(null);

  const handleFocus = e => e.target.select();
  const handleChange = e => {
    const onlyNum = e.target.value.replace(/[^0-9]/g, '');
    if (Number(onlyNum) < Number.MAX_SAFE_INTEGER)
      setValue(Number(onlyNum));
    else
      setValue(Number.MAX_SAFE_INTEGER);
  }
  const handleMouseDown = (e) => spinNum(e);
  const handleMouseUp = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };
  const handleClick = e => {
    if (e.target.id === "inc-btn")
      setValue(value => value < Number.MAX_SAFE_INTEGER ? value + 1 : value);
    if (e.target.id === "dec-btn")
      setValue(value => value > 0 ? value - 1 : value);
  }
  const spinNum = (e, delay = 500) => {
    handleClick(e);
    timerRef.current = setTimeout(() => {
      return spinNum(e, delay > 100 ? delay * 0.7 : 100);
    }, delay);
  }

  return (
    <div className="spin-box">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
      />
	    <div className="contorls"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <button id="inc-btn" type="button">+</button>
        <button id="dec-btn" type="button">-</button>
	    </div>
    </div>
  );
}
export default SpinBox;