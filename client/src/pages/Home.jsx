import React from 'react';
import styled from 'styled-components';
import Searchbar from '../components/Searchbar';
import ImageCard from '../components/cards/ImageCard';

const Container = styled.div`
    height: 100%;
    overflow-y: scroll;
    background: ${({ theme }) => theme.bg};
    padding: 30px 30px;
    padding-bottom: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    @media (max-width: 768px) {
        padding: 6px 10px;
    }
    background: ${({ theme }) => theme.background};
`;

const Headline = styled.div`
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Span = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.secondary};
    `;

const Wrapper = styled.div`
    display: flex;
    max-width: 1400px;
    justify-content: center;
    width: 100%;
    padding: 32px 0;
    align-items: center;
`;

const CardWrapper = styled.div`
    display: grid;
    gap: 20px;
    width: 100%;
    justify-items: center;
    
    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 640px) and (max-width: 1199px) {
        grid-template-columns: repeat(3, 1fr);
    }
        @media (max-width: 639px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;


const Home = () => {
    const item = {
        photo: "https://images.unsplash.com/photo-1785711930095-7a6fb14b2492?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Anuv Jain",
        prompt: "A beautiful landscape with mountains and a river",
    };
  return (
    <Container>
        <Headline>
            Discover, create, and share your own posts!
            <Span>Generated with AI</Span>
        </Headline>
        <Searchbar/>
        <Wrapper>
            <CardWrapper>
                <ImageCard item={item}/>
                <ImageCard item={item}/>
                <ImageCard item={item}/>
                <ImageCard item={item}/>
                <ImageCard item={item}/>
                <ImageCard item={item}/>
                <ImageCard item={item}/>
                <ImageCard item={item}/>
            </CardWrapper>
        </Wrapper>
    </Container>
  );
};

export default Home;