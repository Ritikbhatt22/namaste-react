import React, { useState } from "react";

function ChipsInput() {
  const [value, setValue] = useState("");
  const [listElem, setElemValue] = useState([]);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setValue('');
      setElemValue([...listElem, value]);
    }
  }
  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center", margin:"40px 0"}}>
      <h2>Chips Input</h2>
      <input
        type="text" 
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="chips">
        { listElem  ?
          
            listElem.map((val, id) => {
              return (
                <div key = {id+1}>
                    <span className="chips-value"> {val} <button className="button-elem" value ={val} onClick={(e)=>{
                      let templist = listElem.filter((va)=>{
                          return e.target.value !== va;
                      });
                      setElemValue(templist);
                    }} aria-label="Clear input"> × </button> </span>
                </div>
              )
            }) : []
          
        }
      </div>
    </div>
  );
}

export default ChipsInput;