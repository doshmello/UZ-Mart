import React, { useState, useEffect } from 'react';

function LiveUserFilter() {
  const [listItems, setListItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://randomuser.me/api?results=50");
      const { results } = await res.json();
      setUsers(results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filteredItems = users.filter(user => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      const location = `${user.location.city}, ${user.location.country}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase()) || location.includes(searchTerm.toLowerCase());
    });
    setListItems(filteredItems);
  }, [searchTerm, users]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <header className="header">
        <h2 className="title">Search for Accounts</h2>
        <small className="subtitle">Search by name and/or product</small>
        <input
          type="text"
          id="filter"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </header>

      <ul id="result" className="user-list">
        {listItems.length > 0 ? (
          listItems.map((user, index) => (
            <li key={index}>
              <div className="user-container">
                <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
                <div className="user-info">
                  <h4>{`${user.name.first} ${user.name.last}`}</h4>
                  <p>{`${user.location.city}, ${user.location.country}`}</p>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li>
            <h3>Loading...</h3>
          </li>
        )}
      </ul>
    </div>
  );
}

export default LiveUserFilter;
