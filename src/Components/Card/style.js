import styled from 'styled-component'

export const CardCustom = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 40%;

    &hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

export const Image = styled.img`
    width: 100%;
`

export const Content = styled.div`
    padding: 2px 16px;
`