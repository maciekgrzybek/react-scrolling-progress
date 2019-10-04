// Article Component

import styled from 'styled-components';

export default function Article() {
  return (
    <ArticleRow>
      <div className="article-img" />
      <div className="article-content">
        <h3>Article Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere rhoncus lacinia. Morbi vulputate urna vel enim viverra tempor. Etiam vel egestas erat, eget porta nisi. Nulla ac euismod nisi, non eleifend sapien. Curabitur vitae magna sed metus elementum mattis at facilisis tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam euismod ipsum id dui congue varius id nec eros. Nam suscipit, nunc sit amet sodales rutrum, quam velit fermentum massa, quis imperdiet quam ipsum a dui. Maecenas risus lorem, placerat ac eleifend a, molestie vel ante.
        </p>
      </div>
    </ArticleRow>
  );
}

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto 200px auto;
  padding: 0 30px;
`;

const ArticleRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 50px;
    align-items: center;
    &:last-of-type {
      margin-bottom: 200px;
    }
    div.article-img {
      width: 35%;
      height: 300px;
      background: #cccccc;
    }
    div.article-content {
      width: calc(65% - 50px);
    }
    @media all and (max-width: 768px) {
      div.article-img {
        width: 100%;
      }
      div.article-content {
        width: 100%;
      }
    }
`;
