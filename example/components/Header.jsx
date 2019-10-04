// Header Page

import Link from 'next/link';
import styled from 'styled-components';

const Header = () => (
  <Container>
    <HeaderTag>
      <h1>React Scrolling Progress</h1>
      <Navigation>
        <li>
          <Link href="/">
            <button>Example 1</button>
          </Link>
        </li>
      </Navigation>
    </HeaderTag>
  </Container>
);

export default Header;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 30px;
`;

const HeaderTag = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 0;
  h1 {
    font-size: 24px;
    font-weight: 300;
    margin: 0;
  }
`;

const Navigation = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
    button {
      display: block;
      padding: 10px;
      border: none;
      appearance: none;
      font-size: 14px;
      cursor: pointer;
    }
  }
`;

