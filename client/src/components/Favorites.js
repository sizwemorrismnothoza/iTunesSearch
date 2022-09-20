import React  from 'react'
import { Link, Outlet } from 'react-router-dom';

const Favorites = ({ setFavorites }) => {

  let myFavorites =[];
  // I am using session storage as a work around for an issue i had.
  // I am able to get it to work without the session storage, when passing down the favorites as props to the 
  // Favorite component, the prop gets updated no problem. But the browser doesn't rerender the page, 
  // it requires me to reload the page manually.  Any suggestions?
  if (sessionStorage.getItem("hasCodeRunBefore") === null) { 
    myFavorites = [];
    sessionStorage.setItem("favorites", JSON.stringify(myFavorites));
    sessionStorage.setItem("hasCodeRunBefore", true);
  } else {
    myFavorites = JSON.parse( sessionStorage.getItem('favorites'));
  }

  const handleRemoveFavorites = (e) => { 
  
    let myId = e.target.id;
    
    for (let i = 0; i < myFavorites.length; i++){
      if (myFavorites[i].trackId === Number(myId)) {
        let fillteredArr =  myFavorites.filter(function (value, index, arr) {
          return value.trackId !== Number(myId);
        })
        setFavorites(fillteredArr);
        sessionStorage.setItem("favorites", JSON.stringify(fillteredArr));
        alert("deleted successfully");
      }
    }
  }

  return (
    <div className='container'>
      <Link to={"/"}> Back</Link>
      <h1>Favorites</h1>
     <div className='row'>
            {myFavorites.map((result) => (
                <div key={result.trackId} className="card mb-2 ml-2 mr-2 mt-2" style={{"width":"16.5rem"}} >
                    <img  className='card-img-top' src={result.artworkUrl100} alt="Card"/>
                    <div className="card-body">
                        <h5 className="card-title">{result.artistName} {result.trackName}</h5>
                        <p>Id : { result.trackId}</p>
                        <button id={result.trackId} className="btn" onClick={handleRemoveFavorites}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
      <Outlet />
    </div>
  )
}

export default Favorites