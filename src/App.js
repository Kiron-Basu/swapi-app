/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './App.css';
import SpeakerIcon from './components/SpeakerIcon/SpeakerIcon';
import SearchBar from './components/SearchBar/SearchBar';
import CrawlContainer from './containers/CrawlContainer/CrawlContainer';
// import actions
import { requestFilmSearch, searchFieldChange } from './store/actions';

// redux connections
const mapStateToProps = state => ({
  searchField: state.search.searchField,
  crawlText: state.filmText.crawlText,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchFieldChange: (event) => dispatch(searchFieldChange(event.target.value)), // made mistake of not doing .target.value --> 'text' instead
  onSubmitSearch: (query) => dispatch(requestFilmSearch(query)),
});
// PureComponent implemented however will not re-render any non-shallow state structures
class App extends PureComponent {
  render() {
    console.log(this.props.searchField);
    const { onSubmitSearch, onSearchFieldChange } = this.props; // destructuring method from mapto..disaptch
    return (
      <div>
        <SpeakerIcon />
        <SearchBar submitSearch={() => onSubmitSearch(this.props.searchField)} onChange={onSearchFieldChange} />
        {this.props.crawlText ? <CrawlContainer crawlText={this.props.crawlText} /> : null }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
