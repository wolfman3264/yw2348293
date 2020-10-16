import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import './swal.css'
import { Chart } from 'react-charts'

function isMobile() {
	if (window.innerWidth < window.innerHeight) {
		return true
	}
	else {
		return false
	}
}

function getGeckoId(coin) {
	coin = coin.toLowerCase();
	switch (coin) {
		// case "link":
		// 	return "link";
		case "snx":
			return "aave-snx";
		case "yfi":
			return "yearn-finance";
		case "comp":
			return "compound-governance-token";
		case "chads":
			return "chads-vc";
		case "wbtc":
			return "wrapped-bitcoin";
		case "uni":
			return "uniswap";
		case "wnxm":
			return "wrapped-nxm";
		case "mkr":
			return "maker";
		case "bzrx":
			return "bzx-protocol";
		case "srm":
			return "serum";
		case "farm":
			return "harvest-finance";
		case "based":
			return "based-money";
		case "send":
			return "social-send";
		case "hate":
			return "heavens-gate";
		case "stbu":
			return "stobox-token";
		case "yfl":
			return "yflink";
		// case "rope":
		// 	return "rope";
		case "z":
			//cannot find
			return "";
		// case "cream":
		// 	return "";
		case "value":
			return "value-liquidity";
		default:
			return (coin);
	}
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

const calcPercentChange = (start, end) => {
	let final = 0;
	console.log("startr", start, end)
	if (start > end) {
		final = -100 * (start - end) / start;
	} else if (start < end) {
		final = 100 * (end - start) / start
	}
	return final.toFixed(1);
}

const FarmGraph = ({ farm, order }) => {
	const [price, setPrice] = useState(null);
	const [marketCap, setMarketCap] = useState(null);
	const [graphData, setGraphData] = useState(null);
	const [recentChange, setRecentChange] = useState(null);

	if (!price || !marketCap || !graphData) {
		axios.get(`https://api.coingecko.com/api/v3/coins/${getGeckoId(farm.id)}/market_chart?vs_currency=usd&days=1`).then(res => {
			const { market_caps, prices } = res.data;
			console.log("jfia", market_caps, prices)
			setMarketCap(numberWithCommas(market_caps[market_caps.length - 1][1].toFixed(0)));
			setPrice(numberWithCommas(prices[prices.length - 1][1].toFixed(2)));
			let chartData = [];
			// For using 2 days (24 data points)
			// const start = Math.floor(prices.length / 2);
			// for (let i = start; i < prices.length; i++) {
			// 	chartData.push([i, prices[i][1]]);
			// }
			for (let i = 0; i < prices.length; i++) {
				chartData.push([i, prices[i][1]]);
			}
			setRecentChange(calcPercentChange(prices[0][1], prices[prices.length - 1][1]))
			setGraphData(chartData);
		})
	}

	const axes = React.useMemo(() => [
		{
			primary: true, type: 'time', position: 'bottom', show: false
		},
		{
			type: 'linear', position: 'left', showGrid: false, showTicks: false, show: false,
		}
	])
	const data = React.useMemo(() => [
		{
			data: graphData
		}
	])
	const series = React.useMemo(
		() => ({
			showPoints: false,
		}),
		[]
	);

	console.log("farm", farm)

	return (
		<StyledContent>
			{order === 1 ?
				<CardIcon1>{farm.icon}</CardIcon1>
				:
				<CardIcon2>{farm.icon}</CardIcon2>
			}
			<CardData>
				<StyledTitle>{farm.id}</StyledTitle>
				<Text>${price}</Text>
				<SubTitle>Market Cap</SubTitle>
				<Text>${marketCap}</Text>
				<SubTitle>Recent Change</SubTitle>
				{recentChange >= 0 ?
					<GreenText>+{recentChange}%</GreenText>
					:
					<RedText>{recentChange}%</RedText>
				}
				{graphData &&
					<ChartContainer>
						<Chart data={data} axes={axes} series={series} />
					</ChartContainer>
				}
			</CardData>
		</StyledContent>
	)
}

const CardIcon1 = styled.div`
	font-size: 35px;
	height: 50px;
	width: 50px;
	background-color: #BAE7E3;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0px auto 16px;
`
const CardIcon2 = styled.div`
	font-size: 35px;
	height: 50px;
	width: 50px;
	background-color: #FFF6F9;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0px auto 16px;
`

const ChartContainer = styled.div`
height: 50px;
width: 170px;
margin-bottom: 20px;`

const CardData = styled.div`
margin-left: 10px;
`

const StyledContent = styled.div`
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	height: 100%;
`

const StyledTitle = styled.div`
font-family: "Gilroy";
font-size: 25px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1;
letter-spacing: normal;
text-align: center;
color: #ffffff;
	text-align: left;
margin-bottom: 5px;
`

const SubTitle = styled.div`
font-family: "Gilroy";
margin-bottom: 5px;
font-size: 16px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1;
letter-spacing: normal;
text-align: center;
color: #ffffff;
	text-align: left;
`
const Text = styled.div`
font-family: "Gilroy";
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1;
letter-spacing: normal;
text-align: center;
color: #ffffff;
	text-align: left;
	margin-bottom: 10px;
	letter-spacing: 1px;
`
const GreenText = styled.div`
font-family: "Gilroy";
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1;
letter-spacing: normal;
text-align: center;
color: #ffffff;
	text-align: left;
	margin-bottom: 10px;
	letter-spacing: 1px;
	color: #38ff00;
`
const RedText = styled.div`
font-family: "Gilroy";
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1;
letter-spacing: normal;
text-align: center;
color: #ffffff;
	text-align: left;
	margin-bottom: 10px;
	letter-spacing: 1px;
	color: #ff4343;

`

export default FarmGraph;