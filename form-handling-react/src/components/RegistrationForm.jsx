import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // <-- ALX expects setErrors

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!username) newErrors.username = "Username is required"; // <-- individual checks
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors); // <-- ALX expects setErrors

    // Stop submission if any errors exist
    if (Object.keys(newErrors).length > 0) return;

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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full mb-1"
        />
        {errors.username && <p className="text-red-500 text-sm mb-2">{errors.username}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-1"
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-1"
        />
        {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password}</p>}

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
