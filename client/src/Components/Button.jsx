import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`

width: ${props => props.full ? '100%' : null};

min-width: 64px; border: 0;

border-radius: 4px;

padding: 8px 16px; outline: none;

background-color: yellow; color: grey;

font-size: 0.875rem; font-weight: 500;

line-height: 1.5;

letter-spacing: 0.02857 rem; cursor: pointer;

transition: all 0.2s;

&:hover { 
    background-color: #e9e946;
}
` ;
function Button({children,...props}) {
    return (

        <StyledButton {...props}>
            {children}
        </StyledButton >

    );
}

export default Button;