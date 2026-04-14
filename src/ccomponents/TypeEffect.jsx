import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const TypeEffect = () => {
  return (
    
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
         // wait 1s before replacing "Mice" with "Hamsters"
        'Learn',
        1000,
        'Code',
        1000,
        'build',
        1000,
        'Repeat',
        1000,
      ]}
      wrapper="span"
      speed={50}
      className='text-xl md:text-4xl lg:text-7xl  text-blue-500'
      // style={{fontSize: "2rem"}}
      repeat={Infinity}
    />
  );
};
export default TypeEffect