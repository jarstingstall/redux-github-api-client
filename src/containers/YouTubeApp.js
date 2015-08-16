import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import SearchResults from '../components/SearchResults';
import StatusBar from '../components/StatusBar';
import { fetchVideos } from '../actions';

class YouTubeApp extends Component {

  handleSearch(search) {
    const { dispatch } = this.props;
    dispatch(fetchVideos(search));
  }

  render() {
    const { videos, isFetching, searchTerm } = this.props;

    return (
      <div className="container-fluid">
        <div className="row" style={{marginTop: 32}}>
          <SearchBar onSearch={this.handleSearch.bind(this)} />
          <div className="col-md-6 col-md-offset-3" style={{marginTop: 32}}>
            {isFetching ?
              <StatusBar type="warning" message="Loading..."/> :
              <div>
                {searchTerm === '' ? '' : <StatusBar type="success" message={`Displaying search results for "${searchTerm}"`} />}
                <VideoList videos={videos}/>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state =>
  ({
    videos: state.videos,
    isFetching: state.isFetching,
    searchTerm: state.searchTerm
  }))
  (YouTubeApp);
