import React, { Component } from 'react';
import song from '../../assets/got-song.mp3';
import musicOn from '../../assets/images/music-on.svg';
import musicOff from '../../assets/images/music-off.svg';
import { Player } from './styles';


class MusicPlayer extends Component {
  constructor() {
    super();
    this.state = {
      isMusicPlaying: false,
    };

    const isMusicPlaying = JSON.parse(localStorage.getItem('isMusicPlaying'));
    localStorage.setItem('isMusicPlaying', isMusicPlaying !== null ? isMusicPlaying : true);
  }

  componentDidMount() {
    const isMusicPlaying = JSON.parse(localStorage.getItem('isMusicPlaying'));

    this.setState({
      isMusicPlaying,
    });

    this.createPlayer();

    if (isMusicPlaying) {
      this.player.play();
    }

    document.addEventListener('keydown', this.toggleMusicWithKeyboard);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.toggleMusicWithKeyboard);
  }

  createPlayer = () => {
    const isMusicPlaying = JSON.parse(localStorage.getItem('isMusicPlaying'));
    this.player = new Audio(song);
    this.player.loop = true;
    this.player.autoplay = true;
    isMusicPlaying || this.player.pause();
  }

  toggleMusicWithKeyboard = (event) => {
    event.preventDefault();
    const { key } = event;
    switch (key) {
      case 'M':
      case 'm':
        this.togglePlayer();
        break;
      default:
        break;
    }
  }

  togglePlayer = () => {
    this.setState({
      isMusicPlaying: this.player.paused,
    }, () => {
      const { isMusicPlaying } = this.state;
      isMusicPlaying ? this.player.play() : this.player.pause();
      localStorage.setItem('isMusicPlaying', isMusicPlaying);
    });
  }

  render() {
    const { isMusicPlaying } = this.state;
    return (
      <Player onClick={this.togglePlayer}>
        <img src={isMusicPlaying ? musicOn : musicOff} alt="" />
      </Player>
    );
  }
}

export default MusicPlayer;
