import React, { useState } from "react";

function HookObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      HookObject
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({...name,  firstName: e.target.value })}
        >
          {/* firstName :{" "} */}
        </input>
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({...name, lastName: e.target.value })}
        >
          {/* lastName :{" "} */}
        </input>
        <h1> F Name :{name.firstName}</h1>
        <h1> L Name :{name.lastName}</h1>
      </form>
    </div>
  );
}

export default HookObject;
