import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  border: 1px solid red;
  padding: 8px;
`;

const Input = ({ ...props }) => {
  return (
    <StyledWrapper>
      <input {...props}></input>
    </StyledWrapper>
  );
};

export default Input;
