import { combineReducers } from 'redux'
import global from './global'
import web3 from './web3'
import wallet from './wallet'

export default combineReducers({
  global,
  web3,
  wallet
})