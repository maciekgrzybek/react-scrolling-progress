// Index Page

import styled from 'styled-components';
import ScrollProgress from 'react-scrolling-progress';
import Header from '../components/Header';
import Article from '../components/Article';

export default function ExampleTwo() {
  return (
    <div>
      <ScrollProgress />
      <Header />
      <Container>
        <Article />
        <Article />
        <Article />
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 30px;
`;
