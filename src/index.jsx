/* eslint-disable import/no-extraneous-dependencies */
import { render } from 'react-dom';
import ScrollProgress from './components/scroll-progress';

const root = document.getElementById('root');

render(
  ( 
    <div style={{
      height: 3000,
      background: 'lightpink',
    }}>
    <ScrollProgress />
    </div>

  ), root,
);
