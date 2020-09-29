import React, { useCallback, useEffect, useState } from 'react'
import {
	Route,
	Switch,
	useRouteMatch,
} from 'react-router-dom'
import styled from 'styled-components'

import Button from '../../components/Button'
import Card from '../../components/Card'
import CardContent from '../../components/CardContent'
import CardIcon from '../../components/CardIcon'
import Page from '../../components/Page'
import checkedIcon from '../../assets/img/checked.png'
import uncheckedIcon from '../../assets/img/unchecked.png'

import { getAPR, getPoolEndTime } from '../../yamUtils'
import useYam from '../../hooks/useYam'
import { useWallet } from 'use-wallet'

import Landscape from '../../assets/img/landscapebig.png'
import Sky from '../../assets/img/skybig.png'
import TallSky from '../../assets/img/tallsky.png'
import useFarms from '../../hooks/useFarms'
import useFarm from '../../hooks/useFarm'
import { Farm } from '../../contexts/Farms'
import Cookie from 'universal-cookie'
import axios from 'axios'

function isMobile() {
	if (window.innerWidth < window.innerHeight) {
		return true
	}
	else {
		return false
	}
}

let cookie = new Cookie()


const Versus = ({ battles }) => {
	let [farms] = useFarms()
	const yam = useYam()
	const { account, connect } = useWallet()
	console.log(battles);

	const [checked1, setChecked1] = useState(cookie.get(battles[0]._id))
	const [checked2, setChecked2] = useState(cookie.get(battles[1]._id))
	const battle1 = {
		farm1: farms.find(farm => farm.id === battles[0].pool1.name),
		farm2: farms.find(farm => farm.id === battles[0].pool2.name)
	}
	const battle2 = {
		farm1: farms.find(farm => farm.id === battles[1].pool1.name),
		farm2: farms.find(farm => farm.id === battles[1].pool2.name)
	}


	const pick1 = (g) => {
		cookie.set(battles[0]._id, g)
		setChecked1(g)
	}

	const pick2 = (g) => {
		cookie.set(battles[1]._id, g)
		setChecked2(g)
	}

	const castVote = async () => {
		let vote1
		let vote2
		console.log(checked1, checked2);
		if (!checked1 || !checked2)
			return
		if (checked1 == 1)
			vote1 = battle1.farm1.id
		if (checked1 == 2)
			vote1 = battle1.farm2.id
		if (checked2 == 1)
			vote2 = battle2.farm1.id
		if (checked2 == 2)
			vote2 = battle2.farm2.id
		console.log(vote1, vote2);
		const signature = await yam.web3.eth.personal.sign(JSON.stringify({
			address: account,
			vote: [
				{
					vote: vote1,
					_id: battles[0]._id,
				},
				{
					vote: vote2,
					_id: battles[1]._id,
				}
			]
		}), account).catch(err => console.log(err))
		console.log(signature);
		axios.post('http://localhost:5000/api/vote', {
			address: account,
			vote: [
				{
					vote: vote1,
					_id: battles[0]._id,
				},
				{
					vote: vote2,
					_id: battles[1]._id,
				}
			],
			sig: signature
		}).then(res => {
			console.log(res);
		}).catch(err => {
			console.log(err);
		})
	}

	return (
		<>
			<VSContentContainer>
				<VersusItem>
					<VersusCard>
						<StyledContent>
							<CardIcon>{battle1.farm1.icon}</CardIcon>
							<StyledTitle>{battle1.farm1.name}</StyledTitle>
							{checked1 == 1 ? (
								<ButtonContainer onClick={() => pick1(1)}>
									<img src={checkedIcon} width="40%" />
								</ButtonContainer>
							) : (
									<ButtonContainer onClick={() => pick1(1)}>
										<img src={uncheckedIcon} width="40%" />
									</ButtonContainer>
								)}
						</StyledContent>
					</VersusCard>
                    VS
					<VersusCard>
						<StyledContent>
							<CardIcon>{battle1.farm2.icon}</CardIcon>
							<StyledTitle>{battle1.farm2.name}</StyledTitle>
							{checked1 == 2 ? (
								<ButtonContainer onClick={() => pick1(2)}>
									<img src={checkedIcon} width="40%" />
								</ButtonContainer>
							) : (
									<ButtonContainer onClick={() => pick1(2)}>
										<img src={uncheckedIcon} width="40%" />
									</ButtonContainer>
								)}
						</StyledContent>
					</VersusCard>
				</VersusItem>
				<VersusItem>
					<VersusCard>
						<StyledContent>
							<CardIcon>{battle2.farm1.icon}</CardIcon>
							<StyledTitle>{battle2.farm1.name}</StyledTitle>
							{checked2 == 1 ? (
								<ButtonContainer onClick={() => pick2(1)}>
									<img src={checkedIcon} width="40%" />
								</ButtonContainer>
							) : (
									<ButtonContainer onClick={() => pick2(1)}>
										<img src={uncheckedIcon} width="40%" />
									</ButtonContainer>
								)}
						</StyledContent>
					</VersusCard>
                    VS
					<VersusCard>
						<StyledContent>
							<CardIcon>{battle2.farm2.icon}</CardIcon>
							<StyledTitle>{battle2.farm2.name}</StyledTitle>
							{checked2 == 2 ? (
								<ButtonContainer onClick={() => pick2(2)}>
									<img src={checkedIcon} width="40%" />
								</ButtonContainer>
							) : (
									<ButtonContainer onClick={() => pick2(2)}>
										<img src={uncheckedIcon} width="40%" />
									</ButtonContainer>
								)}
						</StyledContent>
					</VersusCard>
				</VersusItem>
			</VSContentContainer>
			{account && <Button size="lg" onClick={castVote}>Cast Your Votes</Button>}
		</>
	)
}

const ButtonContainer = styled.div`

`
const VSContentContainer = styled.div`
margin-top: 1vh;
width: 600px;
height: 600px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
font-family: Alegreya;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #ffffff;
`

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`

const StyledDetails = styled.div`
  text-align: center;
`

const StyledDetail = styled.div`
font-family: Alegreya;
font-size: 20px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1;
letter-spacing: normal;
color: #ffffff;
`

const StyledTitle = styled.h4`
margin: 0;
font-family: Alegreya;
font-size: 25px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1;
letter-spacing: normal;
text-align: center;
color: #ffffff;
  padding: 0;
`

const VersusCard = styled.div`
width: 220px;
  height: 247px;
  border-radius: 8px;
  border: solid 2px #0095f0;
  background-color: #003677
`

const VersusItem = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
font-size: 30px;
`

export default Versus