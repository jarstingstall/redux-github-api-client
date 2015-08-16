import React, { Component } from 'react';

export default class VideoItem extends Component {
  render() {
    const { video } = this.props;
    const styles = {
      textAlign: "center",
      listStyleType: "none",
      padding: 16,
      marginBottom: 32
    };

    return (
      <li style={styles}>
        <h4>{video.snippet.title}</h4>
        <iframe width="400" height="300" src={`http://www.youtube.com/embed/${video.id.videoId}`}></iframe>
      </li>
    )
  }
}
