require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/GUUdz9l3M8NNhpS84rnU-D33fO92O6TJ',
      accounts: [
        'aae4b86696f1c25cedc0fb82800335eae76332457b66183718107ffe4b67584b',
      ],
    },
  },
}
