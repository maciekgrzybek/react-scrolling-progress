import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import throttle from './helpers/throttle';

const ScrollProgress = ({
  styles, position, className, backgroundColor, barSize,
}) => {
  const [progress, setScrollProgress] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  const setDynamicStyles = () => {
    const xAxisStyle = {
      left: 0,
      right: 0,
      width: `${progress}%`,
      height: barSize,
    };
    const yAxisStyle = {
      top: 0,
      width: barSize,
      height: `${progress}%`,
    };

    switch (position) {
      case 'top':
        return {
          top: 0,
          ...xAxisStyle,
        };
      case 'bottom':
        return {
          bottom: 0,
          ...xAxisStyle,
        };
      case 'left':
        return {
          left: 0,
          ...yAxisStyle,
        };
      case 'right':
        return {
          right: 0,
          ...yAxisStyle,
        };
      default:
        return {};
    }
  };

  const progressBarStyle = {
    background: backgroundColor,
    position: 'fixed',
    transition: 'all .2s ease-out',
    zIndex: 999,
    ...setDynamicStyles(),
    ...styles,
  };

  const updateWindowHeight = () => {
    setViewportHeight(document.documentElement.clientHeight);
  };

  const setProgress = () => {
    const html = document.documentElement;
    // eslint-disable-next-line prefer-destructuring
    const body = document.body;
    const scrollTop = html.scrollTop || body.scrollTop;
    const scrollHeight = html.scrollHeight || body.scrollHeight;
    const percent = (scrollTop / (scrollHeight - viewportHeight)) * 100;
    setScrollProgress(percent);
  };

  useEffect(() => {
    updateWindowHeight();
    setProgress();
  }, []);

  const handleScroll = () => {
    throttle(setProgress, 300)();
  };

  const handleResize = () => {
    throttle(() => {
      updateWindowHeight();
      setProgress();
    }, 300)();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    return () => window.removeEventListener('scroll', handleScroll, false);
  });

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize, false);
  }, []);
  return <div className={className} style={progressBarStyle} />;
};

ScrollProgress.defaultProps = {
  styles: {},
  position: 'top',
  className: 'progress-bar',
  backgroundColor: 'black',
  barSize: 20,
};

ScrollProgress.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  styles: PropTypes.object,
  position: PropTypes.oneOf([
    'top',
    'bottom',
    'left',
    'right',
  ]),
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  barSize: PropTypes.number,
};

export default ScrollProgress;
