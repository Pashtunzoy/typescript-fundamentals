import * as React from 'react';
import { PlaceDetails } from './utils/places';
export const PlaceSearchResult: React.SFC<PlaceDetails> = (pd) => {
  return (
    <li className="search-result">
      <img src={pd.icon} alt={`${pd.name} image`} className="icon"/>
      <h3>{pd.name}</h3>
      {/* <h4>Rating: {pd.rating}</h4> */}
      <p>
        <a href={pd.url} target="_blank">{pd.vicinity}</a>
        -
        {pd.website && <a href={pd.website} target="_blank">{pd.website}</a>}
      </p>
    </li>
  );
};