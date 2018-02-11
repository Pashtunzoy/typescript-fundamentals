import * as React from 'react';
import { PlaceDetails } from './utils/places';
import { shortUrl } from './utils/string';
import { PlaceSearchResult } from './place-search-result';
import { IAppState as IPlaceSearchResultList } from './app';


export const PlaceSearchResultList: React.SFC<IPlaceSearchResultList> = function({ inProgress, term, results }) {
  let finalResults = results.map((result: any) => {
      return <PlaceSearchResult {...result} key={ result.id }/>
  })
  return (
    <div>
      { inProgress &&
        <li className="blue" >
          Searching for {term ? term : 'donut'}...
        </li>
      }

      {
        finalResults.length < 1 ?
          <li>
            Type something in above to search
          </li>
          :
          finalResults
      }
    </div>
  );
}
