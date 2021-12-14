import React from 'react' 
import styled from 'styled-components';

const StyledEntryCard = styled.div`
width:100%;
max-width: 450px;
padding: 50px;
margin-bottom: 40px;
background-color: #ffffff;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 roba(0, 0, 0, 0.06);
text-align: center;
h2 {
    font-weight:500;
    margin-bottom: 50px;
}
span {
    display: block;
    margin-top: 40px;
    color : #888888;
    font-size: 14px;
}
a{
    margin-left: 4px;
    color: #d7d700;
}
`;
function EntryCard({ children }) {

return (

<StyledEntryCard> {children} </StyledEntryCard>

);

}

export default EntryCard;