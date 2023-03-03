import styled from "styled-components";

function App() {
  return (
    <SadzmoContainer>
      <Bondmeister>
        <BondmeisterImg
          src="./assets/bondmeister.png"
          alt="bondmeister_picture"
        />
      </Bondmeister>
      <Melekh>
        <MelekhImg src="./assets/melekh.png" alt="melekh_picture" />
      </Melekh>
      <Kukla>
        <KuklaImg src="./assets/kukla.png" alt="kukla_picture" />
      </Kukla>
    </SadzmoContainer>
  );
}
const KuklaImg = styled.img`
  width: 100px;
  border-radius: 50%;
  border: 2px solid white;
  @media screen and (min-width: 1024px) {
    width: 250px;
    height: 250px;
  }
`;

const Kukla = styled.div`
  width: 100px;
`;

const Melekh = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const MelekhImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid white;
  @media screen and (min-width: 1024px) {
    width: 250px;
    height: 250px;
  }
`;

const BondmeisterImg = styled.img`
  width: 100px;
  border-radius: 50%;
  border: 2px solid white;
  @media screen and (min-width: 1024px) {
    width: 250px;
    height: 250px;
  }
`;

const Bondmeister = styled.div`
  width: 100%;
`;

const SadzmoContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 30px;
  @media screen and (min-width: 1024px) {
    gap: 150px;
  }
`;

export default App;
