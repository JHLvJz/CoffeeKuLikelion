import styled from 'styled-components';
import CafeBoard from '../components/CafeList/CafeBoard';
import NavBar from '../components/Bar/NavBar';
import TopCafeBoard from '../components/ChargeBox/TopCafeBoard';
import Wrapper from '../styles/boxlayout/Wrapper';

const IntroText = styled.span`
  font-size: 25px;
  font-weight: 600;
`;

const UserHi = styled.div`
  position: relative;
  width: 184px;
  height: 60px;

  top: 28px;
  left: 30px;
`

export default function Home() {
  return (
    <>
      <UserHi>
        <IntroText>홍세린</IntroText>
        <span> 님</span> <br></br>
        <span>오늘 </span>
        <IntroText>커피 </IntroText>
        <span>어때요?</span>
      </UserHi>
      <TopCafeBoard />
      <p style={{fontSize: '20px', fontWeight: 600, marginTop: '80px', marginLeft: '35px' }}>당신의 루틴에 있는 카페</p>
      <CafeBoard />
      <NavBar />
    </>
  )
}
