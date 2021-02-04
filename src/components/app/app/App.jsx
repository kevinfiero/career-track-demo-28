import React from 'react';
import ColorControls from './color/colorControls';
import ColorDisplay from './color/ColorDisplay';

export default function App() {
  return (
    <>
      <ColorControls 
        bgColor="red" 
        fgColor="blue" 
        text="Hello!" 
        onBgColorChange={() => console.log('bg changed!')}
        onFgColorChange={() => console.log('fg changed!')}
        onTextChange={() => console.log('text changed!')} 
      />
      <ColorDisplay bgColor="red" fgColor="blue" text="Hello!" />
    </>
  )
}
