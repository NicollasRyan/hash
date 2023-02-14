import styled from "styled-components";

export const BoxBorard = styled.div`
  width: 400px;
  height: 400px;
  background: white;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Span = styled.span`
  width: 33.33333%;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 70px;
  font-weight: bold;
  outline: 1px solid #ccc;

  &:hover {
    background: #f6f6f6;
    cursor: pointer;
  }

  &::after {
    content: "";
    display: none;
    width: 180%;
    height: 10px;
    background: black;
    position: absolute;
  }

  &.horizontal {
    &::after {
      display: block;
    }
  }
  &.vertical {
    &::after {
      display: block;
      rotate: 90deg;
    }
  }

  &.diagonal-1 {
    &::after {
      display: block;
      rotate: 45deg;
    }
  }

  &.diagonal-2 {
    &::after {
      display: block;
      rotate: 135deg;
    }
  }
`;
