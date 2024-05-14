import React,{useState} from 'react'

export default function Input({ onSearch}) {

    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
      setSearchText(event.target.value);
    };
  
    const handleSearch = () => {
        console.log("search for ",searchText);
      onSearch(searchText);
    };

  return (
    <div>
    <input
      type="text"
      placeholder="Search Github Users"
      value={searchText}
      onChange={handleInputChange}
    />
    <button onClick={handleSearch}>Search</button>
  </div>
  )
}
