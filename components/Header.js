import React, { useContext, useEffect } from 'react'
import logo from '../assets/logo.png'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { AppleMetaContext } from '../context/AppleMetaContext'

const styles = {
  container: 'flex w-screen h-16 bg-black px-24 py-3 mb-5 fixed',
  leftHeader: 'flex flex-1',
  logo: 'object-cover cursor-pointer',
  searchWrapper: 'flex flex-1',
  searchInputContainer:
    'text-white items-center flex  flex-1 -ml-64 border border-gray-400 mr-64 hover:bg-[#1E2123] duration-300 p-3 rounded-lg',
  searchIcon: 'text-gray-400 text-3xl mr-3',
  searchInputWrapper: 'text-gray-400 text-lg w-full',
  searchInput: 'bg-transparent outline-none w-full',
  rightHeader: 'flex items-center justify-end text-white gap-8',
  menuItem: 'cursor-pointer font-bold hover:text-green-500 duration-300',
}

const Header = () => {
  const {
    connectWallet,
    signOut,
    currentAccount,
    isAuthenticated,
    formattedAccount,
    swapTokens,
  } = useContext(AppleMetaContext)

  return (
    <div className={styles.container}>
      <div className={styles.leftHeader}>
        <Image src={logo} alt="shekelscoin" height={50} width={50} className={styles.logo} />
      </div>
      <div className={styles.searchWrapper}>
        <div className={styles.searchInputContainer}>
          <AiOutlineSearch className={styles.searchIcon} />
          <div className={styles.searchInputWrapper}>
            <input placeholder='Search...' className={styles.searchInput} />
          </div>
        </div>
      </div>
      
      <div className={styles.rightHeader}>
        <div className={styles.menuItem} onClick={swapTokens}>
          Rewards
      </div>
        <div className={styles.menuItem}></div>
        <a
          href="https://thebittimes.com/token-SHE-BSC-0x4Ab912f576D64A4f65422a03dc69452dccD0dE5d.html"
          target="_blank"
          rel="noreferrer"
        >          
          
        <div className={styles.menuItem}>Info</div> 
        </a>    
       
         <a
          href="https://commerce.coinbase.com/checkout/37053968-b97b-4b48-8d4d-8471267a4794"
          target="_blank"
          rel="noreferrer"
        >          
          
        <div className={styles.menuItem}>Invest</div> 
        </a>  
        <div className={styles.menuItem}>Messages</div>
        {isAuthenticated && (
          <>
            <div className={styles.menuItem}>{formattedAccount}</div>
            <div className={styles.menuItem} onClick={() => signOut()}>
              Logout
            </div>
          </>
        )}

        {!isAuthenticated && (
          <div className={styles.menuItem} onClick={() => connectWallet()}>
            Login
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
