import "./App.css";
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const spanStyle = css`
  background-color: gray;
  color: white;
  font-size: 2vw;
  // emotion.js는 styled-components처럼 브라우저에서 열었을 때 className을 임의로 생성해준다.
  // @emotion/babel-plugin을 사용하면 커스터마이징 가능하다.
  label: spanStyle;
`;

function App() {
  return (
    <div>
      <span css={spanStyle}>hello world</span>
    </div>
  );
}

export default App;
