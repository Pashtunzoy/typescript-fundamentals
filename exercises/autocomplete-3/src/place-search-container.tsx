import * as React from 'react';
import { autocomplete } from './autocomplete';
import { shortUrl } from './utils/string';
import { PlaceDetails } from './utils/places';
import { PlaceSearchResult } from './place-search-result';
import { PlaceSearchResultList } from './place-search-result-list';

interface IPlaceSearchContainer {
  term: string;
  inProgress: boolean;
  results: PlaceDetails[];
}


export class PlaceSearchContainer extends React.Component<{}, IPlaceSearchContainer> {
  constructor() {
    super();
    this.state = {
      term: '',
      inProgress: false,
      results: []
    };
    // Event handler for changes to search term
    this.beginSearch = this.beginSearch.bind(this);
  }
  /**
   * Event handler for changes to the serch term
   *
   * @param {InputEvent} evt from the search field
   *
   * @memberof PlaceSearch
   * @return {undefined}
   */
  async beginSearch(term: string) {
    // Initiate a search using the ./autocomplete.ts module
    this.setState({term, inProgress: true});
    let results = await autocomplete(term);
    // When the promise it returns resolves, update your state accordingly
    this.setState({results: results, inProgress: false});
  }

  /**
   * Render the html for this component
   *
   * @param {JSX.Element} elem element
   * @param {Object} container component state
   * @returns {undefined}
   *
   * @memberof PlaceSearch
   */
  render() {
    return (
      <PlaceSearchResultList 
        onSearchTermChanged={this.beginSearch}
        {...this.state} 
      />
    );
  }
}
