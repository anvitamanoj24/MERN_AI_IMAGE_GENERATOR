import { SearchOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
    max-width:550px;
    max-height: 20px;
    display: flex;
    width: 90%;
    border: 1px solid ${({ theme }) => theme.text_secondary + 90 };
    color: ${({ theme }) => theme.text_primary};
    border-radius: 8px;
    padding: 12px 16px;
    flex: 1;
    cursor: pointer;
    gap: 6px;
    align-items: center;
    `;

const SearchBar = () => {
    return (
        <SearchBarContainer>
            <SearchOutlined />
            <input
            placeholder="Search with prompt or author..."
            style={{
                border: 'none',
                outline: 'none',
                background: 'transparent',
                width: '100%',
                color: 'inherit',
                fontSize: '16px',
                }} />
        </SearchBarContainer>
    );
};
export default SearchBar;