import styled from '@emotion/styled';
import { Button } from '@mui/material';

const BaseButton = styled(Button)`
  font-size: 2.5rem;
  background-color: rgba(0, 0, 0, 0.3);
  transition: transform 0.1s, border-color 0.7s, color 0.7s;
`;

export const StyledButton = styled(BaseButton)`
  width: 100%;
  margin: 15px 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition: transform 0.1s, border-color 0.7s, color 0.7s;

  &.game {
    color: #c8cf55;
    border: 3px solid #c8cf55;
    font-size: 2.5rem;

    &:hover {
    border-color: #e1e96c;
    color: #e1e96c;
    transform: scale(1.03);
    }
  }

  &.mypage {
    color: #2ede28;
    border: 3px solid #2ede28;
    font-size: 2.5rem;

    &:hover {
    border-color: #bcffbc;
    color: #bcf6bc;
    transform: scale(1.03);
    }
  }

  &.back {
    // border-radius: 2%; // 丸いボタンにする
    // position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    color: #bbf2ef;
    border: 5px solid #bbf2ef;
    top: 350px;
    height: 50px;
    width: 250px;
    font-size: 1.5rem;
    // padding:100px;

    &:hover {
      border-color: #5ff580;
      color: #50f2e7;
    }
  }
`;

export const SmallButton = styled(BaseButton)`
  flex-grow: 1;
  margin: 10px;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.3);
  transition: transform 0.1s, border-color 0.7s, color 0.7s;

  &.ranking {
    color: #ed4a34;
    border: 3px solid #ed4a34;

    &:hover {
    border-color: #ffa9a0;
    color: #ffa9a0;
    transform: scale(1.05);
    }
  }

  &.settings {
    color: #f09d3e;
    border: 3px solid #f09d3e;

    &:hover {
    color: #ffcc80;
    border-color: #ffcc80;
    transform: scale(1.05);
    }
  }

  &.search {
    color: #6dede9;
    border: 3px solid #6dede9;

    &:hover {
    color: #c7ffff;
    border-color: #c7ffff;
    transform: scale(1.05);
    }
  }
`;

export const ButtonIcon = styled.img`
  margin-right: 36px;

  &.small-icon {
    width: 40px;
  }

  &.gameStartButtonIcon {
    width: 60px;
  }

  &.myPageButtonIcon {
    width: 40px;
  }

  &.

  // ... other specific icon styles
`;