import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ScrollProgress = ({styles, position}) => {

  const [progress, setScrollProgress] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  let progressBarStyle = {
    background: 'red',
    position: 'fixed',
    top: 0,
    left: 0,
    right:0,
    width: progress + '%',
    height: 15,
    WebkitTransition: 'all .2s ease-out',
    transition: 'all .2s ease-out'
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
      <div className="progress-bar" style={ progressBarStyle }></div>
    </div>
  );
};

ScrollProgress.defaultProps = {
  styles: {},
  position: 'top',
};

ScrollProgress.propTypes = {
  styles: PropTypes.object,
  position: PropTypes.oneOf([
    'top',
    'bottom',
    'left',
    'right',
  ]),
};

export default ScrollProgress;
