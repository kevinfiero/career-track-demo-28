import React, { Component } from 'react';
import ColorControls from '../components/color/colorControls';
import ColorDisplay from '../components/color/colorDisplay';


export default class ColorPicker extends Component{
  state = {
    bgColor: '#FF0000',
    fgColor: '#0000FF',
    text: ''
  }

  handleBgColorChange = ({ target }) => {
    this.setState({ bgColor: target.value })
  }

  handleFgColorChange = ({ target }) => {
    this.setState({ fgColor: target.value })
  }

  handleTextColorChange = ({ target }) => {
    this.setState({ text: target.value })
  }

  render() {
    const { bgColor, fgColor, text } = this.state;
    return (
      <>
        <ColorControls 
          bgColor={bgColor}
          fgColor={fgColor}
          text={text}
          onBgColorChange={this.handleBgColorChange}
          onFgColorChange={this.handleFgColorChange}
          onTextChange={this.handleTextColorChange}
        />
        <ColorDisplay 
          bgColor={bgColor}
          fgColor={fgColor}
          text={text}
        />
      </>
    );
  }

}
