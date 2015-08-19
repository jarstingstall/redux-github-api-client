import React, { Component } from 'react';
import moment from 'moment';

export default class VideoItem extends Component {
  handleClick(e) {
      e.preventDefault();
      const { video, onVideoSelect } = this.props;
      onVideoSelect(video);
  }

  render() {
    const { video } = this.props;

    return (
      <li style={{ listStyleType: "none", marginBottom: 16 }} className="clearfix">
      <div className="media">
        <div className="media-left">
          <a href="" data-toggle="modal" data-target="#video-player" onClick={this.handleClick.bind(this)}>
            <img style={{marginTop: 5}} className="media-object" src={video.snippet.thumbnails.medium.url} width="196" />
          </a>
        </div>
        <div className="media-body">
          <div><a href="" data-toggle="modal" data-target="#video-player" onClick={this.handleClick.bind(this)}>{video.snippet.title}</a></div>
          <div style={{fontSize: 12}}>
            {moment(video.snippet.publishedAt).calendar()} {video.snippet.channelTitle === '' ? '' : `by ${video.snippet.channelTitle}` }
          </div>
          <div style={{fontSize: 12}}>{video.snippet.description}</div>
        </div>
      </div>
      </li>
    )
  }
}
