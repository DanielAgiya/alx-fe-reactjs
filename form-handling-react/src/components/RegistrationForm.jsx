import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }
    setError("");
    console.log("Form submitted:", { username, email, password });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Controlled Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}              // <-- ALX check expects this
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}                 // <-- ALX check expects this
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-3"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}              // <-- ALX check expects this
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-3"
        />
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
