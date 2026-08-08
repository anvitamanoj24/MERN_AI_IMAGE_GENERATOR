import React from 'react';
import styled from 'styled-components';
import GenerateImageForm from '../components/GenerateImageForm';

const Container = styled.div`
    padding: 20px 30px;
    padding-bottom: 50px;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll;
    display: flex;
    gap: 20px;
    @media (max-width: 768px) {
        padding: 6px 10px;
    }
    background: ${({ theme }) => theme.background};
`;

const Wrapper = styled.div`
    display: flex;
    gap:8%;
    flex:1;
    justify-content: flex-start;
    max-width: 1200px;
    height:fit-content;
    @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CreatePost = () => {
  return(
    <Container>
      <Wrapper>
        <GenerateImageForm/>
      </Wrapper>
    </Container>
  );
};

export default CreatePost;