import React from "react";
import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const glow = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 100% 0; }
  100% { background-position: 0 0; }
`;

const animateOutline = keyframes`
  0% { outline-width: 1px; outline-offset: 0; outline-color: rgba(0, 130, 206, 0); }
  10% { outline-color: rgba(0, 130, 206, 0.75); }
  50% { outline-width: 7px; outline-offset: 4px; outline-color: rgba(0, 130, 206, 0); }
  100% { outline-width: 7px; outline-offset: 4px; outline-color: rgba(102, 102, 102, 0); }
`;

const svgAnimation = keyframes`
  from { stroke-dashoffset: 0; }
  to { stroke-dashoffset: 1000; }
`;

const Card = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 100px auto;
  border-radius: 8px;
`;

const Inner = styled.div`
  padding: 25px;
  background: #222;
  color: #fff;
  border-radius: 8px;
`;

const Example1 = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    display: block;
    background: linear-gradient(
      90deg,
      hsla(197, 100%, 64%, 1) 0%,
      hsla(339, 100%, 55%, 1) 100%
    );
    height: 500px;
    width: 500px;
    position: absolute;
    animation: ${rotate} 8s linear infinite;
    z-index: 0;
  }
`;

const Example2 = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    display: block;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(102, 102, 102, 0.75) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    height: 300px;
    width: 100px;
    position: absolute;
    animation: ${rotate} 5s linear infinite;
    z-index: 0;
    top: 50%;
    transform-origin: top center;
  }
`;

const Example3 = styled.div`
  position: relative;
  border-radius: 8px;
  padding: 4px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      45deg,
      #ff595e,
      #ffca3a,
      #8ac926,
      #1982c4,
      #6a4c93,
      #ff6700
    );
    background-size: 400%;
    z-index: -1;
    animation: ${glow} 20s linear infinite;
    border-radius: 8px;
  }

  &::after {
    filter: blur(25px);
    transform: translate3d(0, 0, 0);
  }
`;

const Example4 = styled.div`
  outline-width: 1px;
  outline-offset: 0;
  outline-color: rgba(0, 130, 206, 0.75);
  outline-style: solid;
  animation: ${animateOutline} 4s ease infinite;
`;

const Example5 = styled.div`
  position: relative;

  svg {
    position: absolute;
  }

  .line {
    stroke-dasharray: 260;
    stroke-width: 1px;
    fill: transparent;
    stroke: rgba(78, 255, 13, 0.3);
    animation: ${svgAnimation} 2.5s linear infinite;
  }
`;

const Cards: React.FC = () => {
  return (
    <div>
      <Card>
        <Example1>
          <Inner>
            <h3>Example 1</h3>
            <p>Rotating gradient border</p>
          </Inner>
        </Example1>
        <Example2>
          <Inner>
            <h3>Example 2</h3>
            <p>Sliding gradient line</p>
          </Inner>
        </Example2>
        <Example3>
          <Inner>
            <h3>Example 3</h3>
            <p>Glowing gradient border</p>
          </Inner>
        </Example3>
        <Example4>
          <Inner>
            <h3>Example 4</h3>
            <p>Animated outline</p>
          </Inner>
        </Example4>
        <Example5>
          <Inner>
            <h3>Example 5</h3>
            <svg width="100%" height="100%">
              <rect className="line" width="100%" height="100%" />
            </svg>
          </Inner>
        </Example5>
      </Card>
    </div>
  );
};

export default Cards;
