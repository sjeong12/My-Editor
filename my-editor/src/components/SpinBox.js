function SpinBox() {
  return (
    <div className="spin-box">
      <input type="text" value="0"/>
	    <div className="contorls">
        <button type="button">+</button>
        <button type="button">-</button>
	    </div>
    </div>
  );
}
export default SpinBox;