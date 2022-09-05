import React from 'react';
// @ts-ignore
import BaseVideo from '../../assets/connect.mp4';
type RegVideoProps = {};
type VideoProps = {
  src?: string;
  title?: string;
};

export const RegVideo = (props: RegVideoProps) => {
  return (
    <div className='regular-video'>
      <video controls autoPlay muted loop>
        <source src={BaseVideo} type='video/mp4' />
      </video>
    </div>
  );
};

export const Video: React.FC<BaseVideo> = ({ title, src }: VideoProps) => {
  return (
    <div className='iframe-wrapper'>
      <div className='video'>
        <iframe
          src={src}
          title={title}
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          frameBorder='0'
          allowFullScreen={true}
        />
      </div>
    </div>
  );
};

Video.defaultProps = {
  title: 'best tutorial',
  src: 'https://www.youtube.com/embed/-8ORfgUa8ow',
};
