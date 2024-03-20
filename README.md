# Lottery Project
This is a solidity introduction project to create a simple contract Lottery which will be test locally. 
The contract has 1 constructor to get the address that deploy this contract, 1 modifier which can be called in other function which will act as a restriction, and the following 4 function:

**Enter** - this is a function for user to enter to the pool

**Random** - this is a helper function to return a pseudo random number

**pickWinner** - this is a function to pick a winner from the entered player list and send all the ether within the pool to the winner

**getPlayers** - this is a function to get all the addresses that has entered this lottery game

## Usage
**Run on Remix.io**: Just copy the Inbox.sol in contracts folder and paste the code to remix.io to quickly test this project.

**Deploy to blockchain**: 
Replace mneumonic with your own mneumonic, and testnet_api with your own api key.
```bash
npm install
node deploy.js
```

## Run test 
```bash
cd test
node Inbox.test.js
```

## Show your support
Give a ⭐ if this project helped you!
