import styled, { keyframes, css } from "styled-components";
import PropTypes from "prop-types";
import React from "react";

export const Container = styled.div`
  padding-left: 35px;
`;
export const ElementWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
`;
export const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  border: 1px solid #666;
  margin-right: 15px;
  transition: height 0.5s, color 0.3s;
`;
export const Letter = styled.div`
  font-family: "HyundaiSansTextKR";
  color: transparent;
  transition: transform 0.5s, color 0.3s;
`;
