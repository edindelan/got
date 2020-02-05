import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import "./App.scss";
import HouseHorizontalSlide from "./components/house-horizontal-slide";
import HouseHorizontalSimpleSlide from "./components/house-horizontal-simple-slide";
import HouseVerticalSlide from "./components/house-vertical-slide";
import AudioPlayer from "./components/audio-player";

import house1 from "./assets/images/houses/house1.png";
import house2 from "./assets/images/houses/house2.png";
import house3 from "./assets/images/houses/house3.png";
import logo from "./assets/images/got-logo.png";

const MainContainer = styled.div`
  height: 100vh;
  position: relative;
`;

const FirstHalf = styled.div`
   height: 100%;
   width: 40%;
   display: flex; 
   align-items: center;
   justify-content: flex-end;
   position: relative;
`;

const SecondHalf = styled.div`
   height: 100%;
   width: 60%;
   background-color: ${({color}) => color ? color : "#000"};
   transition: background-color .2s linear;
   display: flex;
   align-items: center; 
`;

const SliderContainer = styled.div`
   height: 100%;
   display: flex;
   overflow: hidden;
`;

const Header = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 20vw;
  background-color: ${({color}) => color ? color : "#000"};
  transition: background-color .2s linear;
  padding: 1vw 2vw;
  img {
    width: 100%;
  }
`;

const SliderControls = styled.div`
  z-index: 9999;
  position: absolute;
  bottom: 25px;
  right: -25px;
  color: ${({color}) => color ? color : "#000"};
  transition: background-color .2s linear;
`;

const ArrowControlBox = styled.div`
  width: 50px;
  height: 50px;
  background: #666;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:before {
     font-size: 18px;
     line-height: 0px;
  }
  
`;

const NextSlide = styled(ArrowControlBox)`
  &:before {
     content: '▶';
  }
  
`;
const PreviousSlide = styled(ArrowControlBox)`
  &:before {
     content: '◀';
  }
`;

const houses = [
  {
    image: house1,
    name: "Stark",
    backgroundColor: "red",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    image: house2,
    name: "Lanister",
    backgroundColor: "blue",
    description: "Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    image: house3,
    name: "Ludilo",
    backgroundColor: "yellow",
    description: "Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  }
]


class App extends Component {
  state = {
    activeSlide: 0,
    nav1: null,
    nav2: null,
    nav3: null,
  };

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      nav3: this.slider3,
    });

    document.addEventListener("keydown", (event) => {
      event.preventDefault();
      const key = event.key;
      switch (key) {
        case "A":
        case "a":
        case "ArrowLeft":
          this.changeSlide('left');
          break;
        case "D":
        case "d":
        case "ArrowRight":
          this.changeSlide('right');
          break;
        case "ArrowUp":
          // Up pressed
          break;
        case "ArrowDown":
          // Down pressed
          break;
      }
    });
  }

  changeSlide = (direction = "left") => {
    direction === "left" ? this.slider1.slickNext() : this.slider1.slickPrev();
  }

  getCurrentSlideData = () => {
    return this.state.nav1 ? this.state.nav1.props.children[this.state.activeSlide].props.data : {};
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
    };
    const settings2 = {
      afterChange: current => this.setState({ activeSlide: current }, () => {window.history.pushState({}, null, "/slide/" + this.state.activeSlide);}),
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: -1,
      arrows: false,
      vertical: true,
    };
    const currentSlideData = this.getCurrentSlideData();
    console.log('Current slide', currentSlideData);
    return (
      <MainContainer>
        <Header>
          <Logo color={currentSlideData.backgroundColor}>
            <img src={logo}/>
          </Logo>
          <AudioPlayer/>
        </Header>
        <SliderContainer>
          <FirstHalf>
            <Slider {...settings2} asNavFor={this.state.nav3} ref={slider => (this.slider1 = slider)}>
              {
                houses.map((house, index) => <HouseVerticalSlide
                  key={index}
                  data={house}
                />)
              }
            </Slider>
            <SliderControls color={currentSlideData.backgroundColor}>
              <NextSlide onClick={() => this.changeSlide('left')}/>
              <PreviousSlide onClick={() => this.changeSlide('right')}/>
            </SliderControls>
            <Slider {...settings} asNavFor={this.state.nav2} ref={slider => (this.slider3 = slider)}>
              {
                houses.map((house, index) => <HouseHorizontalSimpleSlide
                  key={index}
                  index={index}
                  data={house}
                  {...this.state}
                />)
              }
            </Slider>
          </FirstHalf>
          <SecondHalf color={currentSlideData.backgroundColor}>
            <Slider {...settings} ref={slider => (this.slider2 = slider)}>
              {
                houses.map((house, index) => <HouseHorizontalSlide
                  key={index}
                  index={index}
                  data={house}
                  {...this.state}
                />)
              }
            </Slider>
          </SecondHalf>
        </SliderContainer>
      </MainContainer>
    );
  }
}

export default App;
