import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 4px 24px;
    margin: 0 0.3em 0.3em 0;
    box-sizing: border-box;
    border-radius: 2em;
    background-color: #4eb5f1;
    color: white;
    transition: all 0.2s;

    &:hover {
        background-color: red;
    }
`;

export default StyledButton;