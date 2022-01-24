import styled from "styled-components";
function Sections(){
    return(
        <Wrap>
           <ItemText>
               <h1>Model S</h1>
               <p>Order Online for Touchless Delivery</p>
           </ItemText>
           <Buttons>
           <ButtonGroup>
               <LeftButton>
                  Custom Order
               </LeftButton>
               <RightButton>
                    Existing Inventory
               </RightButton>
           </ButtonGroup>
           <DownArrow src="./images/down-arrow.svg"></DownArrow>
           </Buttons>
        </Wrap>
    );
}
export default Sections;

const Wrap = styled.div`
width:100vw;
height:100vh;
background-image:url('/images/model-s.jpg');
background-size:cover;
background-position:center;
background-repeat: no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`

const ItemText = styled.div`
text-align:center;
padding-top:15vh
`
const ButtonGroup= styled.div`
display:flex;
margin-bottom:30px;
`

const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
width:250px;
height:40px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.4;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;

`

const RightButton = styled(LeftButton)``

const DownArrow= styled.img`
height:40px;
text-align:center;
padding-left:250px;
animation: animateDown infinite 1.5s;
overflow-x:hidden;
`

const Buttons = styled.div``