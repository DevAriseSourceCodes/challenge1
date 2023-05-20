import { useState } from "react";
import styled from "styled-components";
import watchers from "./data";
import PlusIcon from "./assets/plus-icon.png";

type BallProp = {
  rotate: number;
};

function App() {
  const [max_watchers] = useState(9);
  const [watcher, setWatcher] = useState(0);

  const handleAddProfile = () => {
    setWatcher(watcher + 1);
  };

  function handleWatcher(watcher = 0) {
    let watcherArray = [...watchers.slice(0, watcher)];

    if (watcherArray.length < max_watchers) {
      watcherArray = [
        ...watcherArray,
        {
          image: PlusIcon,
          id: "addIcon",
          name: "Add profile",
          addProfile: true,
        },
      ];
    }
    const deg = 360 / watcherArray.length;

    return { watcherArray, deg };
  }
}

const Wrapper = styled.div`
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  /* border: 2px solid red; */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  display: relative;

  h1 {
    position: absolute;
    top: 20px;
    font-weight: 600;
    font-size: clamp(2rem, 5vw, 3.5rem);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;

  @media screen and (min-width: 500px) {
    max-width: 500px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
`;

const BallContainer = styled.div<BallProp>`
  position: absolute;
  width: 80%;
  height: 80%;

  &.centerBall {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  transform: rotate(${({ rotate }: BallProp) => `-${rotate}deg`});
  transition: transform 0.7s linear;
`;

const Ball = styled.div<BallProp>`
  border-radius: 50%;
  width: 25%;
  height: 25%;
  margin: 0 auto;

  .content {
    transform: rotate(${({ rotate }: BallProp) => `${rotate}deg`});
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: inherit;

    img {
      width: 100%;
      border-radius: inherit;
      height: 100%;
    }

    p {
      position: absolute;
      bottom: -25px;
      font-style: 1.3rem;
      width: max-content;
      padding: 0px 30px;
    }
  }

  .content.profile {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 40%;
      width: 40%;
    }
  }
`;

const BallBtn = styled(Ball)`
  border: 2px solid white;
  .content {
    cursor: pointer;
    background-color: transparent;
  }
`;
