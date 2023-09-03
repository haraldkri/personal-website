import styled from "styled-components";
import {generateRandomAnimationDuration, generateRandomXOffset} from "./util"
import React, {useState} from "react";

const Star = styled.div<{ $duration: number, $offset: number, $delay: number }>`
  @keyframes fallingStar {
    0% {
      opacity: 0;
      transform: translateY(-50px) translateX(-50px) scale(0.5);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(100vh) translateX(150px) scale(1.2);
    }
  }

  position: absolute;
  width: 3px;
  height: 10px;
  background: white;
  animation: fallingStar 2s infinite;
  opacity: 0;

  animation-duration: ${({$duration}) => $duration}s;
  left: ${({$offset}) => $offset}%;
  animation-delay: ${({$delay}) => $delay}s;

`;

type Props = {
    delay: number
}

const FallingStar = ({delay}: Props) => {
    const [duration] = useState(generateRandomAnimationDuration);
    const [offset] = useState(generateRandomXOffset);

    return <Star $duration={duration} $offset={offset} $delay={delay}/>
}

export default FallingStar