import { styled } from "styled-components";
import Apptheme from "./Theme";


//flex directions
export const row = styled.div`
display:flex;
`;

export const column = styled.div`
display:flex;
flex-direction:column;
`;


//Header styles
export const Nav = styled.nav`
display: flex;
justify-content: center;
background-color: ${props => Apptheme.colors.Grey3};
`;

export const Navwrapper = styled(row)`
align-items: center;
gap: 12px;
padding: 20px;
cursor: pointer;
`;

export const Navrightwrapper = styled(column)`
gap: 12px;
`;

export const Logo = styled(row)`

width: 180px;
height: 170px;
border-radius: 100%;
overflow: hidden;

img{
width: 100%;
height: 100%;
object-fit: cover;
}

`;




//home style
export const Sectionwrapper = styled.section`
background-color: ${props => Apptheme.colors.Grey3};
`;

export const Outerwrapper = styled(row)`
align-items:center;
justify-content: center;
padding: 10px 10px;
`;

export const Topwrapper = styled(column)`

gap: 20px;
margin: 10px 0;
padding: 20px 10px;
width: 95%;
border-radius:5px;
background-color: ${props => Apptheme.colors.Grey7};

p{
    text-align: center;
    color: white;
    
}

`;

export const Headerrow = styled(row)`

justify-content: space-around;

form{
    display: flex;
    gap: 10px;
}

input{
width: 250px;
height: 45px;
padding: 8px;
border-radius: 5px;
border: none;
}

button{
    width: 40px;
    border-radius:5px;
    border: 1px solid white;
    background: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
}

.dropdown{
width: 250px;
height: 45px;
padding: 5px 8px;
border-radius: 5px;
cursor: pointer;
}

.history{
display: flex;
gap: 16px;
align-items: center;
height: 40px;
cursor: pointer;
color: white;
}

`;

export const Container = styled(row)`
`;

export const Innercontainer = styled(row)`
flex-wrap:wrap;
justify-content: space-around;
gap: 24px;
margin: 20px 10px;
`;

export const Innercard = styled(column)`
width: 250px;
align-items: center;
gap: 12px;
cursor: pointer;
border-radius: 3px;
padding: 20px 30px;
background-color: ${props => Apptheme.colors.Grey1};
`;

export const Innercolumn = styled(column)`
align-items: start;
gap: 12px;

span{
    font-size: 0.8rem;
}
`;

export const Flag = styled(row)`

max-width: 200px;
height: 200px;
overflow: hidden;

img{
width: 100%;
height: 100%;
object-fit: cover;
}

`;



//details page styles
export const Detailswrapper = styled.section`
display: row;
justify-content: center;

`;

export const Detailscontainer = styled(column)`
justify-content: center;
`;

export const Innerdetails = styled(row)`
align-items: end;
padding:30px 50px;
margin: 40px 0;
width: 100%;
border-radius: 5px;
background-color: ${props => Apptheme.colors.Grey7};
color: white;

li{
    font-size: 0.8rem;
}

span{
    font-size: 0.8rem;
}

`;

export const Innerrow = styled(row)`
gap: 10px;

`;

export const Backtn = styled(row)`

button{
    border-radius: 2px;
    border: 2px solid white;
    max-width: 200px;
}
`;

export const Imagewrapper = styled(row)`

width: 300px;
height: 300px;
border-radius: 5px;
overflow: hidden;

img{
width: 100%;
height: 100%;
object-fit: cover;
}

`;

export const Rightwrapper = styled(column)`
gap: 12px;
padding: 15px 20px;

button a{
    text-decoration: none;
    color:${props => Apptheme.colors.Grey7};
}

li{
    padding: 0;
    list-style: none;
    margin: 0;
}

button{
    height: 45px;
    border-radius: 5px;
    border: none;
    padding: 0 30px;
    font-size: 1rem;
    font-weight:bold;
    cursor: pointer;
    color: ${props => Apptheme.colors.Grey7};
    background-color: ${props => Apptheme.colors.Grey1};
}
`;

export const Leftwrapper = styled(column)`
gap: 24px;
padding: 15px 20px;

button{
    display: flex;
    align-items: center;
   padding: 0 16px;
   margin-bottom: 32px;
    gap: 12px;
    max-width: 150px;
    height: 40px;
    border: none;
    border-radius: 3px;
    font-size: 1rem;
    font-weight:bold;
    cursor: pointer;
    color: ${props => Apptheme.colors.Grey7};
    background-color: ${props => Apptheme.colors.Grey1}; 
}
`;




//Search page styles
export const Searchwrapper = styled.section`
padding:20px 40px;
background-color: ${props => Apptheme.colors.Grey7};
color: white;

p{
    color: ${props => Apptheme.colors.Grey7};
}

h4{
    color: ${props => Apptheme.colors.Grey7};
}
`;

export const Searchtitle = styled(row)`
margin: 10px;
h4{
    color: ${props => Apptheme.colors.Grey1};
}
`;




//history page styles
export const Historywrapper = styled.section`
padding:20px 40px;
height: 100vw;
background-color: ${props => Apptheme.colors.Grey7};
color: white;
`;

export const Historytitle = styled(Searchtitle)``;

export const Historyinner = styled(row)`
align-items:center;
gap: 16px;
cursor: pointer;
`;

export const Historyflag = styled(Flag)`
height: 100px;
width: 100px;
border-radius: 100%;
`;

export const Historycontainer = styled(column)`
gap: 16px;
padding: 24px 40px;
`;


