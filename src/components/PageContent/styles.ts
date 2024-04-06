import styled, { css } from 'styled-components'

export const Content = styled.div`
    ${({ theme }) => css`
        max-width: ${theme.spacings.content};
        /* background-color: aqua; */
        width: 100%;
        height: 50%;
        z-index: 5;
    `};
`;