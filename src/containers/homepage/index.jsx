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
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.changeSlideWithKeyboard);
    const { match: { params } } = this.props;

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
    const VerticalSliderSettings = {
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
              {...VerticalSliderSettings}
              asNavFor={this.horizontalSlider1}
              ref={(vs) => { this.verticalSlider = vs; }}
            >
              {
                houses.map((house) => (
                  <HouseVerticalSlide
                    key={house.id}
                    data={house}
                  />
                ))
              }
            </Slider>
            <SliderControls color={backgroundColor}>
              <NextSlide onClick={() => this.changeSlide('right')} />
              <PreviousSlide onClick={() => this.changeSlide('left')} />
            </SliderControls>
            <Slider
              {...horizontalSliderSettings}
              asNavFor={this.horizontalSlider2}
              ref={(hs1) => { this.horizontalSlider1 = hs1; }}
            >
              {
                houses.map((house, index) => (
                  <HouseHorizontalSimpleSlide
                    key={house.id}
                    index={index}
                    data={house}
                    {...this.state}
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
                houses.map((house) => (
                  <HouseHorizontalSlide
                    key={house.id}
                    data={house}
                    {...this.state}
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
