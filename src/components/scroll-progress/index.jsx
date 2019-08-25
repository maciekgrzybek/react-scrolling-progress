import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ScrollProgress = ({styles, position, className, backgroundColor, barSize}) => {

  const [progress, setScrollProgress] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  const setDynamicStyles = () => {
    let xAxisStyle = {
      left: 0,
      right:0,
      width: progress + '%',
      height: barSize,
    };
    let yAxisStyle = {
      top: 0,
      width: barSize,
      height: progress + '%',
    }
    switch (position) {
      case 'top':
        return {
          top: 0,
          ...xAxisStyle
        }
      case 'bottom':
        return {
          bottom: 0,
          ...xAxisStyle
        }
      case 'left':
        return {
          left: 0,
          ...yAxisStyle
        }
      case 'right':
        return {
          right: 0,
          ...yAxisStyle
        }
      default:
        return;
    }
  }

  let progressBarStyle = {
    background: backgroundColor,
    position: 'fixed',
    transition: 'all .2s ease-out',
    zIndex: 999,
    ...setDynamicStyles(),
    ...styles,
  }
  
  useEffect(() => {
    updateWindowHeight();
    setProgress();
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  });

  useEffect(() => {
    console.log('hehe')
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleScroll = () => {
    setProgress();
  }
  
  const handleResize = () => {
    updateWindowHeight();
    setProgress();
  }

  const updateWindowHeight = () => {
		setHeight(document.documentElement.clientHeight);
	}

  const setProgress = () => {
    const html = document.documentElement;
    const body = document.body;
    const scrollTop = html.scrollTop || body.scrollTop;
    const scrollHeight = html.scrollHeight || body.scrollHeight;
    const percent = (scrollTop / (scrollHeight - height)) * 100;
		setScrollProgress(percent);
  }

  return (
    <div style={{
      height: 3000,
      background: 'yellow',
    }}
    >
      <div className={className} style={ progressBarStyle }></div>
    </div>
  );
};

ScrollProgress.defaultProps = {
  styles: {},
  position: 'top',
  className: 'progress-bar',
  backgroundColor: 'black',
  barSize: 45,
};

ScrollProgress.propTypes = {
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
