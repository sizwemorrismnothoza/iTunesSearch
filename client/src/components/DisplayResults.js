import React from 'react';

const DisplayResults = ({ searchResult, favorites }) => {
    
    let myFavorites = favorites;

    // Add to favorites
    const handleAddFavorites = (e) => {
        //getting the id of the selected button
        let myId = e.target.id;

        for (let i = 0; i < searchResult.length; i++){
            // getting the object that matches the id, and adding that object to the favorites
            if (searchResult[i].trackId === Number(myId)) {
                myFavorites.push(searchResult[i]);
                sessionStorage.setItem("favorites", JSON.stringify(favorites));
                alert('Added successfully');
            }
        }

             console.log(favorites);
    }

    if (searchResult.length < 0 || searchResult === null) {
        return (
            <h1>No results please try again</h1>
        )
    }

    return (
        <div className='row'>
            {/* Displaying the search results */}
            {searchResult.map((result) => (
                <div key={result.trackId} className="card mb-2 ml-2 mr-2 mt-2" style={{"width":"16.5rem"}} >
                    <img  className='card-img-top' src={result.artworkUrl100} alt="Card"/>
                    <div className="card-body">
                        <h5 className="card-title">{result.artistName} {result.trackName}</h5>
                        <p>Id : {result.trackId}</p>
                        {/* setting the id of the button to the id of the trackId */}
                        <button id={result.trackId} className="btn" onClick={handleAddFavorites}>Add to favorite </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DisplayResults