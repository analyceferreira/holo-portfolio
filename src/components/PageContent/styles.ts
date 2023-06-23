import styled, { css } from 'styled-components'

export const Content = styled.div`
    ${({ theme }) => css`
        max-width: ${theme.spacings.content};
        /* background-color: aqua; */
        width: 100%;
        height: 100%;
        z-index: 5;
    `};
`;