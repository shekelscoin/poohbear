const { ethers } = require('hardhat')

const main = async () => {
    const dogeFactory = await hre.ethers.getContractFactory('DogeCoin')
    const dogeContract = await dogeFactory.deploy()
    await dogeContract.deployed()
    console.log('Dogecoin deployed to:', dogeContract.address)
  
    const linkFactory = await hre.ethers.getContractFactory('Link')
    const linkContract = await linkFactory.deploy()
    await linkContract.deployed()
    console.log('Link deployed to:', linkContract.address)
  
    const sheFactory = await hre.ethers.getContractFactory('ShekelsCoin')
    const sheContract = await sheFactory.deploy()
    await sheContract.deployed()
    console.log('ShekelsCoin deployed to:', sheContract.address)
  
    const usdcFactory = await hre.ethers.getContractFactory('Usdc')
    const usdcContract = await usdcFactory.deploy()
    await usdcContract.deployed()
    console.log('USDC deployed to:', usdcContract.address)
  }
  
  ;(async () => {
    try {
      await main()
      process.exit(0)
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  })()
  