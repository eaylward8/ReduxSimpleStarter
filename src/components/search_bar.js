import React, { Component } from 'react';

// functional component
// const SearchBar = () => {
//   return <input />;
// }

// class-based component
class SearchBar extends Component {
  constructor(props) {
    super(props); // super refers to Component; calls the parent constructor
    this.state = { term: '' }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
