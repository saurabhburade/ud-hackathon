import { ChainId } from "./chainIds";
export default {
  multicall: {
    [ChainId.ETHEREUM]: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
    [ChainId.ROPSTEN]: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
    [ChainId.RINKEBY]: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
    [ChainId.GÖRLI]: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
    [ChainId.KOVAN]: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
    [ChainId.ARBITRUM]: "0x80C7DD17B01855a6D2347444a0FCC36136a314de",
    [ChainId.ARBITRUM_TESTNET]: "0xa501c031958F579dB7676fF1CE78AD305794d579",
    [ChainId.CELO]: "0x9aac9048fC8139667D6a2597B902865bfdc225d3",
    [ChainId.FANTOM]: "0x22D4cF72C45F8198CfbF4B568dBdB5A85e8DC0B5",
    [ChainId.MATIC]: "0x02817C1e3543c2d908a590F5dB6bc97f933dB4BD",
    [ChainId.XDAI]: "0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287",
    [ChainId.BSC]: "0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B",
    [ChainId.AVALANCHE]: "0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3",
    [ChainId.HECO]: "0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3",
    [ChainId.HARMONY]: "0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3",
    [ChainId.OKEX]: "0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3",
    [ChainId.PALM]: "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F",
    [ChainId.MOONRIVER]: "0x270f2F35bED92B7A59eA5F08F6B3fd34c8D9D9b5",
    [ChainId.FUSE]: "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F",
    [ChainId.TELOS]: "0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3",
    [ChainId.MOONBEAM]: "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F",
  },
  portfolio: {
    56: "0xa60aA3E6fe00477a026E47d10292D239C97131Bc",
  },
  oracles: {
    [ChainId.ETHEREUM]: "0x07D91f5fb9Bf7798734C3f606dB065549F6893bb",
    [ChainId.BSC]: "0xfbD61B037C325b959c0F6A7e69D8f37770C2c550",
    [ChainId.MATIC]: "0x7F069df72b7A39bCE9806e3AfaF579E54D8CF2b9",
    [ChainId.KOVAN]: "0x29BC86Ad68bB3BD3d54841a8522e0020C1882C22",
    [ChainId.OPTIMISM]: "0x11DEE30E710B8d4a8630392781Cc3c0046365d4c",
    [ChainId.ARBITRUM]: "0x735247fb0a604c0adC6cab38ACE16D0DbA31295F",
    [ChainId.AVALANCHE]: "0xBd0c7AaF0bF082712EbE919a9dD94b2d978f79A9",
    [ChainId.XDAI]: "0x142DB045195CEcaBe415161e1dF1CF0337A4d02E",
    [ChainId.FANTOM]: "0xE8E598A1041b6fDB13999D275a202847D9b654ca",
    1313161554: "0xE4E0552452e5cC1306A2bF5B2Fd9b1eA19418795",
  },
  balanceFetcher: {
    [ChainId.ETHEREUM]: "0xb1f8e55c7f64d203c1400b9d8555d050f94adf39",
    [ChainId.ROPSTEN]: "0x8D9708f3F514206486D7E988533f770a16d074a7",
    [ChainId.RINKEBY]: "0x3183B673f4816C94BeF53958BaF93C671B7F8Cf2",
    [ChainId.KOVAN]: "0x55ABBa8d669D60A10c104CC493ec5ef389EC92bb",
    [ChainId.BSC]: "0x2352c63A83f9Fd126af8676146721Fa00924d7e4",
    [ChainId.BSC_TESTNET]: "0x2352c63A83f9Fd126af8676146721Fa00924d7e4",
    [ChainId.MATIC]: "0x2352c63A83f9Fd126af8676146721Fa00924d7e4",
    [ChainId.ARBITRUM]: "0x151E24A486D7258dd7C33Fb67E4bB01919B7B32c",
    [ChainId.AVALANCHE]: "0xD023D153a0DFa485130ECFdE2FAA7e612EF94818",
    [ChainId.FANTOM]: "0x07f697424ABe762bB808c109860c04eA488ff92B",
  },
  busd: {
    56: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
  },
  wbnb: {
    56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  },
  weth: {
    56: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
  },
  btc: {
    56: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
  },
  usdc: {
    [ChainId.ETHEREUM]: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    [ChainId.ROPSTEN]: "0x0D9C8723B343A8368BebE0B5E89273fF8D712e3C",
    [ChainId.KOVAN]: "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede",
    [ChainId.MATIC]: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    [ChainId.MATIC_TESTNET]: "0x742DfA5Aa70a8212857966D491D67B09Ce7D6ec7",
    [ChainId.FANTOM]: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
    [ChainId.BSC]: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    [ChainId.HARMONY]: "0x985458E523dB3d53125813eD68c274899e9DfAb4",
    [ChainId.HECO]: "0x9362Bbef4B8313A8Aa9f0c9808B80577Aa26B73B",
    [ChainId.OKEX]: "0xc946DAf81b08146B1C7A8Da2A851Ddf2B3EAaf85",
    [ChainId.XDAI]: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
    [ChainId.ARBITRUM]: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    [ChainId.AVALANCHE]: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
    [ChainId.MOONRIVER]: "0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D",
    [ChainId.CELO]: "0xef4229c8c3250C675F21BCefa42f58EfbfF6002a",
    [ChainId.TELOS]: "0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b",
    [ChainId.FUSE]: "0x620fd5fa44BE6af63715Ef4E65DDFA0387aD13F5",
    [ChainId.MOONBEAM]: "0x8f552a71EFE5eeFc207Bf75485b356A0b3f01eC9",
    [ChainId.OPTIMISM]: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
    [ChainId.KAVA]: "0xfA9343C3897324496A05fC75abeD6bAC29f8A40f",
  },
  usdt: {
    [ChainId.ETHEREUM]: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    [ChainId.ROPSTEN]: "0x110a13FC3efE6A245B50102D2d79B3E76125Ae83",
    [ChainId.KOVAN]: "0x07de306FF27a2B630B1141956844eB1552B956B5",
    [ChainId.MATIC]: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    [ChainId.FANTOM]: "0x049d68029688eAbF473097a2fC38ef61633A3C7A",
    [ChainId.BSC]: "0x55d398326f99059fF775485246999027B3197955",
    [ChainId.HARMONY]: "0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f",
    [ChainId.HECO]: "0xa71EdC38d189767582C38A3145b5873052c3e47a",
    [ChainId.OKEX]: "0x382bB369d343125BfB2117af9c149795C6C65C50",
    [ChainId.XDAI]: "0x4ECaBa5870353805a9F068101A40E0f32ed605C6",
    [ChainId.ARBITRUM]: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    [ChainId.AVALANCHE]: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
    [ChainId.CELO]: "0x88eeC49252c8cbc039DCdB394c0c2BA2f1637EA0",
    [ChainId.MOONRIVER]: "0xB44a9B6905aF7c801311e8F4E76932ee959c663C",
    [ChainId.TELOS]: "0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73",
    [ChainId.FUSE]: "0xFaDbBF8Ce7D5b7041bE672561bbA99f79c532e10",
    [ChainId.MOONBEAM]: "0x8e70cd5b4ff3f62659049e74b6649c6603a0e594",
    [ChainId.OPTIMISM]: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
    [ChainId.KAVA]: "0xB44a9B6905aF7c801311e8F4E76932ee959c663C",
  },
};
