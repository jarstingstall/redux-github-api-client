import React, { Component } from 'react';
import VideoItem from './VideoItem';

export default class VideoList extends Component {
  render() {
    const { videos, onVideoSelect } = this.props;

    return (
      <ul>
        {videos.map(video =>
          <VideoItem video={video} onVideoSelect={onVideoSelect}/>
        )}
      </ul>
    )
  }
}
