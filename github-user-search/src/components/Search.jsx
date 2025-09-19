import { useState } from "react";

function Search() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const handleSearch = async (username) => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        setError(true);
        setUser(null);
        return;
      }
      const data = await res.json();
      setUser(data);
      setError(false);
    } catch (err) {
      setError(true);
      setUser(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub user"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch(e.target.value);
        }}
      />

      {error && <p>Looks like we cant find the user</p>}

      {user && (
        <div>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} width="100" />
        </div>
      )}
    </div>
  );
}

export default Search;
