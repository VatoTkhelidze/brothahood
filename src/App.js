import styled from "styled-components";

function App() {
  return (
    <SadzmoContainer>
      <Bondmeister>
        <BondmeisterImg
          src="./assets/bondmeister.png"
          alt="bondmeister_picture"
        />
        <BondmeisterInfo>
          <Name>ბონდმეისტერი</Name>
        </BondmeisterInfo>
      </Bondmeister>
      <Melekh>
        <MelekhInfo>
          <Name>მელეხი</Name>
        </MelekhInfo>
        <MelekhImg src="./assets/melekh.png" alt="melekh_picture" />
      </Melekh>
      <Kukla>
        <KuklaImg src="./assets/kukla.png" alt="kukla_picture" />
        <KuklaInfo>
          <Name>კუკლა</Name>
        </KuklaInfo>
      </Kukla>
    </SadzmoContainer>
  );
}
const KuklaInfo = styled.div``;

const MelekhInfo = styled.div``;

const BondmeisterInfo = styled.div``;

const Name = styled.span`
  font-size: 20px;
`;

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
  display: flex;
  gap: 20px;
  width: 100%;
`;

const Melekh = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
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
  display: flex;
  gap: 20px;
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
