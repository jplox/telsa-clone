import styled from "styled-components";
import Sections from "./Sections";
function Home() {
  return (
    <Container>
      <Sections
        title="Model S"
        description="Order online for touchless delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="existing inventory"
      ></Sections>
      <Sections
        title="Model Y"
        description="Order online for touchless delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="existing inventory"
      ></Sections>
      <Sections
        title="Model 3"
        description="Order online for touchless delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="existing inventory"
      ></Sections>
      <Sections
        title="Model X"
        description="Order online for touchless delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="existing inventory"
      ></Sections>
      <Sections
      title='Lower Cost Solar Panel'
      description="Money back gurantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Sections
      title ="Accessories"
      backgroundImg='accessories.jpg'
      leftBtnText="Shop Now"
      />
    </Container>
  );
}
export default Home;

const Container = styled.div`
  height: 100vh;
`;
