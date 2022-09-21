import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import DisplayResults from './DisplayResults';

const Search = ({favorites}) => {

    const [searchResult, setSearchResult] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [mediaType, setMediaType] = useState('');

    // Available media type
    const mediaTypeOptions = [{
        "id": "0",
        "type": "all"
    }, {
        "id": "1",
        "type": "movie"
    }, {
        "id": "2",
        "type": "podcast"
    }, {
        "id": "3",
        "type": "music"
    }, {
        "id": "4",
        "type": "musicVideo"
    }, {
        "id": "5",
        "type": "audiobook"
    }, {
        "id": "6",
        "type": "shortFilm"
    }, {
        "id": "7",
        "type": "tvShow"
    }, {
        "id": "8",
        "type": "software"
    }, {
        "id": "9",
        "type": "ebook"
    }];

    // Setting the media type to the selected value and the search term to the value of the input
    const handleMediaTypeChange = (e) => setMediaType(e.target.value);
    const handleSearchInput = (e) => setSearchInput(e.target.value);

    // Request options for the fetch method,
    const requestOptions = {
      method: "POST",
        headers: { 'Content-Type': 'application/json' },
    //   sending the media type and search term to the backend, the backend will handle the get request to iTune
      body: JSON.stringify({
        "term": searchInput,
        "mediaType": mediaType
      })
    };

    const handleSearch = async () => {
        let response = await fetch('/search', requestOptions);
        let data = await response.json();
        setSearchResult(data.results);
    }

    return (
        <div>
            {/* Search fields */}
            <div className='row'>
                <div className='col-md-10'>
                    <h1 className='display-4'>iTunes Search</h1>
                    <select className='form-control mb-2 ml-auto mr-auto' onChangeCapture={handleMediaTypeChange} style={{"width":"15rem"}}>
                        {mediaTypeOptions.map((type) => (
                            <option key={type.id}  >{type.type }</option>
                        ))}
                    </select>
                    <input type={"text"}
                        className='form-control mb-2 ml-auto mr-auto'
                        style={{ "width": "25rem" }}
                        placeholder='Search'
                        onChange={handleSearchInput} />
                    <input
                        type={"button"}
                        className='form-control mb-2 ml-auto mr-auto'
                        style={{ "width": "15rem", "cursor": "pointer", "backgroundColor": "#DAF7A6", "color": "#1C2833" }}
                        value={"Search"}
                        onClick={handleSearch} />
                </div>

                {/* Link to favorites */}
                <div className='col-md-2'>
                    <Link to={"/favorites"} > <h3 className='display-4'>Favorites</h3></Link>
                </div>
            </div>

            {/* Search results */}
            <div className='row'>
                <div className='col'>
                    <DisplayResults  searchResult={searchResult} favorites={favorites} />
                </div>
            </div>
            <Outlet />
        </div>
  )
}

export default Search