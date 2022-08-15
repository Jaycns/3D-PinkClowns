import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Logo from "./images/logo.png";
import Laptop from "./images/icon-laptop.svg";
import Twitter from "./images/icon-twitter.svg";
import Youtube from "./images/icon-youtube.svg";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/d4c0VhqnItKgDY4Y/scene.splinecode"
      />
      <Content>
        <Nav>
          <li>
            <img src={Logo} alt="logo" />
          </li>
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="./">Download</a>
          </li>
          <li>
            <a href="./">App</a>
          </li>
          <li>
            <a href="./">Login</a>
          </li>
          <li>
            <button>Get Started</button>
          </li>
        </Nav>
        <h1>Collaborate with people</h1>
        <p>
          Bring your team together and build your community by using our
          cross-platform app. We intend to help build strong environments for
          your business and control your workflow to enhance indept specifics.
          Join the private beta.
        </p>
        <button>
          <img src={Laptop} alt="download" />
          Download for mac
        </button>
      </Content>
      <Social>
        <img src={Twitter} alt="twitter" />
        <img src={Youtube} alt="youtube" />
      </Social>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-X: hidden;
  .spline {
    position: absolute;
    right: 0;
    margin: 0;
    transform: translate(0px, -100px) scale(1.1);

    @media screen and (max-width: 1024px) {
      transform: translateX(200px) scale(0.8);
    }
    @media screen and (max-width: 800px) {
      transform: translateX(500px) scale(0.7);
      right: 30%;
    }
    @media screen and (max-width: 600px) {
      transform: translateX(-100px) scale(0.5);
      right: auto;
      left: 50%;
      margin-left: -300px;
    }
    @media screen and (max-width: 475px) {
      transform: translate(-300px, 300px) scale(0.45);
    }
  }
`;
const Content = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    gap: 40px;
  }
  @media screen and (max-width: 800px) {
    gap: 30px;
  }
  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-size: 70px;
    font-weight: bold;
    margin: 0;
    max-width: 500px;
    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 800px) {
      padding-top: 250px;
    }
  }
  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }
  h1,
  p,
  button {
    margin: 0 30px 0 100px;
    @media screen and (max-width: 1024px) {
      margin: 0 30px;
    }
  }
  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);
    border-radius: 14px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    transition: 0.3s;
    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }
`;
const Nav = styled.ul`
  padding: 0;
  margin: 0 30px 0 100px;
  display: flex;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 1024px) {
    margin: 0 30px;
  }
  @media screen and (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
  li {
    list-style: none;
    a {
      text-decoration: none;
      color: white;
      border-radius: 14px;
      padding: 8px 20px;
      transition: 0.3s;
      border: 1px solid rgba(255, 255, 255, 0);
      &:hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
  &:first-child img {
    width: 50px;
  }
`;
const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  &::before {
    content: "";
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #f90880 0%,
      #ef5689 33.57%,
      #dd0683 65.86%,
      #aa0eb2 100%
    );
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
