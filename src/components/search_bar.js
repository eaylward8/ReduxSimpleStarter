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
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
