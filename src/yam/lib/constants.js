import BigNumber from 'bignumber.js/bignumber';

export const SUBTRACT_GAS_LIMIT = 100000;

const ONE_MINUTE_IN_SECONDS = new BigNumber(60);
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60);
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24);
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365);

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
};

//erc20 list/xixi
export const addressMap = {
    
  /*uniswapFactory : "0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95",
  uniswapFactoryV2: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
  */

  link_pool: "0xcce4158494ae8296E3936823058B17e03eEBa6c3",
  snx_pool: "0xcce4158494ae8296E3936823058B17e03eEBa6c3",
  yfi_pool: "0xcce4158494ae8296E3936823058B17e03eEBa6c3",
  comp_pool: "0xcce4158494ae8296E3936823058B17e03eEBa6c3",
  omg_pool: "0xcce4158494ae8296E3936823058B17e03eEBa6c3",
  bzrx_pool: "0xcce4158494ae8296E3936823058B17e03eEBa6c3",
  uni_pool: "0xcce4158494ae8296E3936823058B17e03eEBa6c3",
  lend_pool: "0xcce4158494ae8296E3936823058B17e03eEBa6c3",
  wnxm_pool: "0xcce4158494ae8296E3936823058B17e03eEBa6c3",
  mkr_pool: "0xcce4158494ae8296E3936823058B17e03eEBa6c3",
  srm_pool: "0xcce4158494ae8296E3936823058B17e03eEBa6c3",
  farm_pool: "0xcce4158494ae8296E3936823058B17e03eEBa6c3",

  link: "0x2e475b3a66fb9bfd0087321aa3217562f4150a98",
  snx: "0x2e475b3a66fb9bfd0087321aa3217562f4150a98",
  yfi: "0x2e475b3a66fb9bfd0087321aa3217562f4150a98",
  comp: "0x2e475b3a66fb9bfd0087321aa3217562f4150a98",
  omg: "0x2e475b3a66fb9bfd0087321aa3217562f4150a98",
  bzrx: "0x2e475b3a66fb9bfd0087321aa3217562f4150a98",
  uni: "0x2e475b3a66fb9bfd0087321aa3217562f4150a98",
  lend: "0x2e475b3a66fb9bfd0087321aa3217562f4150a98",
  wnxm: "0x2e475b3a66fb9bfd0087321aa3217562f4150a98",
  mkr: "0x2e475b3a66fb9bfd0087321aa3217562f4150a98",
  srm: "0x2e475b3a66fb9bfd0087321aa3217562f4150a98",
  farm: "0x2e475b3a66fb9bfd0087321aa3217562f4150a98",

/*
link: "0x514910771af9ca656af840dff83e8264ecf986ca",
snx: "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
yfi: "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
comp: "0xc00e94cb662c3520282e6f5717214004a7f26888",
omg: "0xd26114cd6ee289accf82350c8d8487fedb8a0c07",
lend: "0x80fb784b7ed66730e8b1dbd9820afd29931aab03",
uni: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
wnxm: "0x0d438f3b5175bebc262bf23753c1e53d03432bde",
mkr: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
bzrx: "0x56d811088235f11c8920698a204a5010a788f4b3",
srm: "0x476c5e26a75bd202a9683ffd34359c0cc15be0ff", // 6 decimals
farm: "0xa0246c9032bc3a600820415ae600c6388619a14d",
*/

  UNIRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  Pricing: "0xD61BF18a0A2747642B8E015EbA1545810f4B9cA1", // kovan
}
