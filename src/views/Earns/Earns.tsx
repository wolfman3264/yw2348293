import React from 'react'
import {
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom'
import { useWallet } from 'use-wallet'
import styled from 'styled-components'

import Logo from '../../assets/img/logo.png'

import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'

import Icon from '../../assets/img/icon.png'
import Landscape from '../../assets/img/landscapebig.png'
import TallSky from '../../assets/img/tallsky.png'
import Sky from '../../assets/img/skybig.png'

import FarmCards from './components/FarmCards'
import CountDown from './components/CountDown'


const Earns: React.FC = () => {
  const { path } = useRouteMatch()
  const { account, connect } = useWallet()
  return (
    <Switch>
      <StyledCanvas>
        <BackgroundSection>
          <TallStyledSky />
          <StyledLandscape />
        </BackgroundSection>
        <ContentContainer>
          <Page>
            <CardContainer>
              <ButtonContainer>
                <Button size='md'>$War Price</Button>
                <Button size='md'>Supply</Button>
              </ButtonContainer>
              <TextContainer>
                <img src={Icon} width="82px" />
                <LargeText>Select an Earn</LargeText>
                <SmallText>Earn WAR tokens by Farming the fields of Byzantium</SmallText>
              </TextContainer>
              <FarmCards />
              {/*<SectionDivider />
              <CountDownText>Countdown timer until next staking pool opens:</CountDownText>
              <CountDown />
              <InfoContainer>
                <Title>Uniswap WAR/ETH</Title>
                <InfoDivider />
                <InfoLines>
                  <Line>Your Balance: <ShadedLine>{0} ETH-WAR-UNI-V2</ShadedLine></Line>
                  <Line>CurrentlyStaked: <ShadedLine>{0}</ShadedLine></Line>
                  <Line>Rewards Available: <ShadedLine>{0} WAR</ShadedLine></Line>
                </InfoLines>
                <BottomButtonContainer>
                  <Button size='lg'>Stake Tokens</Button>
                  <Button size='lg'>Claim Rewards</Button>
                  <Button size='lg'>Unstake Tokens</Button>
                  <Button size='lg'>Claim & Unstake</Button>
                </BottomButtonContainer>
              </InfoContainer>*/}
            </CardContainer>
          </Page>
        </ContentContainer>
      </StyledCanvas>
    </Switch>
  )
}

const BottomButtonContainer = styled.div`
width: 84%;
margin-left: 8%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
`

const ShadedLine = styled.div`
margin-left: 20px;
color: #97d5ff;
`

const Line = styled.div`
display: flex;
flex-direction: row;
`

const InfoLines = styled.div`
width: 100%;
height: 50%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
text-align: left;
margin: 3%;
font-family: "SF Mono Semibold";
  font-size: 40px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 1px;
  color: #ffffff;
`

const Title = styled.div`
font-family: "Gilroy";
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #ffffff;
  margin-top: 1%;
`

const InfoDivider = styled.div`
margin-top: 1%;
  width: 100%;
  height: 5px;
  background-color: #97d5ff;
`

const InfoContainer = styled.div`
width: 1000px;
  height: 375px;
  border-radius: 8px;
  border: solid 4px #97d5ff;
  background-color: rgba(256,256,256,0.08);
  margin-top: 6vh;
  margin-bottom: 6vh;
`

const CountDownText = styled.div`
margin-top: 6vh;
font-family: "Gilroy";
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #ffffff;
`

const SectionDivider = styled.div`
  width: 1100px;
  height: 2px;
  background-color: #00a1ff;
  margin-top: 6vh;
`

const LargeText = styled.div`
font-family: "Gilroy";
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #ffffff;
`

const SmallText = styled.div`
font-family: "Gilroy";
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #ffffff;
`

const TextContainer = styled.div`
width: 60%;
height: 20vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 3vh;
`

const ButtonContainer = styled.div`
width: 40%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 35vh;
  justify-content: space-around
`

const TallStyledSky = styled.div`
  width: 100%;
  height: 270vh;
  background-image: url(${TallSky});
  background-size: 100% 100%;
  background-repeat: repeat-x;
`

const StyledSky = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${Sky});
  background-size: 100% 100%;
  background-repeat: repeat-x;
`

const StyledLandscape = styled.div`
  width: 100%;
  height: 45vh;
  background-image: url(${Landscape});
  background-size: cover;
  transform: translateY(-1px)
`

const BackgroundSection = styled.div`
  position: absolute;
  width: 100%;
  background-color: #154f9b;
`

const StyledCanvas = styled.div`
  position: absolute;
  width: 100%;
  background-color: #154f9b;
`
const ContentContainer = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
`

export default Earns