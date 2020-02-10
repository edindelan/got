import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import HouseHorizontalSlide from './components/house-horizontal-slide';
import HouseHorizontalSimpleSlide from './components/house-horizontal-simple-slide';
import HouseVerticalSlide from './components/house-vertical-slide';
import Header from '../../components/header';
import houses from '../../data/housesLocalData';
import { silentUrlChange } from '../../utils';

import {
  SliderContainer,
  LeftSide,
  RightSide,
  SliderControls,
  NextSlide,
  PreviousSlide,
} from './styles';
import '../../App.scss';

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      activeSlide: 0,
      horizontalSlider1Nav: null,
      horizontalSlider2Nav: null,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.changeSlideWithKeyboard);
    const { match: { params } } = this.props;

    this.setState({
      horizontalSlider1Nav: this.horizontalSlider1,
      horizontalSlider2Nav: this.horizontalSlider2,
    });

    if (params.id) {
      this.setState({
        activeSlide: params.id,
      }, () => {
        this.verticalSlider.slickGoTo(params.id);
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.changeSlideWithKeyboard);
  }

  changeSlideWithKeyboard = (event) => {
    event.preventDefault();
    const { key } = event;
    switch (key) {
      case 'A':
      case 'a':
      case 'ArrowLeft':
        this.changeSlide('left');
        break;
      case 'D':
      case 'd':
      case 'ArrowRight':
        this.changeSlide('right');
        break;
      default:
        break;
    }
  }

  changeSlide = (direction = 'left') => {
    direction === 'left' ? this.verticalSlider.slickPrev() : this.verticalSlider.slickNext();
  }

  getCurrentSlideData = () => {
    const { activeSlide } = this.state;
    return this.verticalSlider ? this.verticalSlider.props.children[activeSlide].props.data : {};
  }

  handleSliderAfterChange = (current) => {
    this.setState({
      activeSlide: current,
    }, () => {
      const { activeSlide } = this.state;
      silentUrlChange(`/slide/${activeSlide}`);
    });
  };

  render() {
    const {
      horizontalSlider1Nav,
      horizontalSlider2Nav,
    } = this.state;
    const horizontalSliderSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      draggable: false,
    };
    const verticalSliderSettings = {
      afterChange: this.handleSliderAfterChange,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: -1,
      arrows: false,
      vertical: true,
      draggable: false,
    };
    const { backgroundColor } = this.getCurrentSlideData();
    return (
      <>
        <Header color={backgroundColor} />
        <SliderContainer>
          <LeftSide>
            <Slider
              {...verticalSliderSettings}
              asNavFor={horizontalSlider1Nav}
              ref={(vs) => { this.verticalSlider = vs; }}
            >
              {
                houses.map((house, index) => (
                  <HouseVerticalSlide
                    key={house.id}
                    index={index}
                    data={house}
                  />
                ))
              }
            </Slider>
            <SliderControls color={backgroundColor}>
              <NextSlide onClick={() => this.changeSlide('left')} />
              <PreviousSlide onClick={() => this.changeSlide('right')} />
            </SliderControls>
            <Slider
              {...horizontalSliderSettings}
              asNavFor={horizontalSlider2Nav}
              ref={(hs1) => { this.horizontalSlider1 = hs1; }}
            >
              {
                houses.map((house, index) => (
                  <HouseHorizontalSimpleSlide
                    key={house.id}
                    index={index}
                    data={house}
                  />
                ))
              }
            </Slider>
          </LeftSide>
          <RightSide color={backgroundColor}>
            <Slider
              {...horizontalSliderSettings}
              ref={(hs2) => { this.horizontalSlider2 = hs2; }}
            >
              {
                houses.map((house, index) => (
                  <HouseHorizontalSlide
                    key={house.id}
                    index={index}
                    data={house}
                  />
                ))
              }
            </Slider>
          </RightSide>
        </SliderContainer>
      </>
    );
  }
}

export default Homepage;

Homepage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
