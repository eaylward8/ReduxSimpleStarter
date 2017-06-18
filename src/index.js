import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDPELmjGbuO10VXJozDBM3tcHgMr7ARN7U';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'unforgivable'}, (videos) => {
      this.setState({ videos }); // same as this.setState({ videos: videos })
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// take component's generated html and insert into DOM
ReactDOM.render(<App />, document.querySelector('.container'));
