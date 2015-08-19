import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import SearchResults from '../components/SearchResults';
import StatusBar from '../components/StatusBar';
import VideoPlayerModal from '../components/VideoPlayerModal';
import { fetchVideos, playVideo, closeModal } from '../actions';

class YouTubeApp extends Component {

  handleSearch(search) {
    this.props.dispatch(fetchVideos(search));
  }

  handleVideoSelect(video) {
    this.props.dispatch(playVideo(video));
  }

  handleModalClose() {
    this.props.dispatch(closeModal());
  }

  render() {
    const {
      videos,
      isFetching,
      searchTerm,
      currentlyPlaying,
      modalIsOpen
    } = this.props;

    return (
      <div className="container-fluid">
        <div className="row" style={{marginTop: 32}}>
          <SearchBar onSearch={this.handleSearch.bind(this)} />
          <div className="col-md-6 col-md-offset-3" style={{marginTop: 32}}>
            {isFetching ?
              <StatusBar type="warning" message="Loading..."/> :
              <div>
                {searchTerm === '' ? '' : <StatusBar type="success" message={`Displaying search results for "${searchTerm}"`} />}
                <VideoList videos={videos} onVideoSelect={this.handleVideoSelect.bind(this)} />
              </div>
            }
          </div>
        </div>
        <VideoPlayerModal video={currentlyPlaying} isOpen={modalIsOpen} onModalClose={this.handleModalClose.bind(this)}/>
      </div>
    )
  }
}

export default connect(state =>
  ({
    videos: state.videos,
    isFetching: state.isFetching,
    searchTerm: state.searchTerm,
    currentlyPlaying: state.currentlyPlaying,
    modalIsOpen: state.modalIsOpen
  }))
  (YouTubeApp);
