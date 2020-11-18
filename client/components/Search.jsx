import React, { useState } from 'react';

const Search = (props) => {
  const [value, setValue] = useState('');

  function handleInput(input) {
    setValue(input);
    props.getSearch(input);
  }

  return (
    <div className="container">
      <input
        id="search"
        type="text"
        className="round"
        placeholder="Search Reviews"
        value={value}
        onChange={(e) => { handleInput(e.target.value); }}
      />
    </div>
  );
};

export default Search;
