import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root'));
Modal.injectCSS();

export default class VideoPlayerModal extends Component {
  render() {
    const { video, isOpen } = this.props;

    return (
      <Modal isOpen={isOpen}>
      <button type="button" className="close" onClick={this.props.onModalClose}>
        <span>&times;</span>
      </button>
        {video.snippet &&
        <iframe width="580"
                height="400"
                src={`http://www.youtube.com/embed/${video.id.videoId}`}
                frameborder="0">
        </iframe>}

      </Modal>
    )
  }
}
