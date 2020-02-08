import React, {Component} from "react";
import styled from "styled-components";
import song from "../../assets/got-song.mp3";
import musicOn from "../../assets/images/music-on.svg";
import musicOff from "../../assets/images/music-off.svg";

const Player = styled.div`
  color: #fff;
  cursor: pointer;
  padding: 20px;
  pointer-events: initial;
  opacity: 0.6;
`;


class MusicPlayer extends Component {
  state = {
    isMusicPlaying: false
  }


  componentDidMount() {
    const { isMusicPlaying } = this.state;
    this.player = new Audio(song);
    this.player.loop = true;

    if(isMusicPlaying) {
      this.player.play();
    }

    document.addEventListener("keydown", event => {
      event.preventDefault();
      const key = event.key;
      switch (key) {
        case "M":
        case "m":
          this.togglePlayer();
          break;
        default:
          break;
      }
    });
  }

  togglePlayer  = () => {
    this.setState({
      isMusicPlaying: this.player.paused
    }, () => {
      this.state.isMusicPlaying ? this.player.play() : this.player.pause();
    });
  }

  render() {
    return (
      <Player onClick={this.togglePlayer}>
        <img src={this.state.isMusicPlaying ? musicOn : musicOff}/>
      </Player>
    )
  }
}

export default MusicPlayer;