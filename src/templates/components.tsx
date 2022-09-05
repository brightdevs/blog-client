import React from 'react';
import { RegVideo, Video } from '../components/Complete';

const components = {
  p: (props: any) => {
    console.log('**', props.children.type);

    if (props.children.type === 'div') {
      return <div {...props} />;
    }
    if (props.children.type === 'code') {
      return <div className='inlineCode'>{props.children} </div>;
    }

    return <>{props.children}</>;
  },
  // add RegVideo
  RegVideo: () => <RegVideo />,
  Video: () => <Video />,
  InlineCode: (props: any) => <div>{props.children} </div>,
  //   inlineCode: (props: any) => <code className='code' {...props} />,
};

export default components;
