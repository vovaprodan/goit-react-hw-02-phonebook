import React from "react";

export const Filter = ({ value, onChange}) => {
    return <div>
        <label>
    Find contacts by name
  <br />  <input type="text" name="text" value={value} onChange={onChange} required />
  </label>
</div>
}