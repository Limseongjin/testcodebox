import React, { useState } from "react";

function UserFormFunction() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </label>
    </>
  );
}

export default UserFormFunction;
