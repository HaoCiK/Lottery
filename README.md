# Lottery Project

This project is a simple Ethereum-based lottery game with a React frontend. The project is divided into two main parts: the Ethereum smart contract and the React frontend.

## Ethereum Smart Contract

The Ethereum part of the project is located in the `ethereum` directory. It includes a Solidity contract for the lottery game. The contract has one constructor to get the address that deploys this contract, one modifier which can be called in other functions as a restriction, and the following four functions:

- **Enter**: This function allows a user to enter the pool.
- **Random**: This is a helper function to return a pseudo-random number.
- **pickWinner**: This function picks a winner from the entered player list and sends all the ether within the pool to the winner.
- **getPlayers**: This function retrieves all the addresses that have entered this lottery game.

### Usage
**Run on Remix.io**: Just copy the Inbox.sol in contracts folder and paste the code to remix.io to quickly test this project.

**Deploy to blockchain**: 
Replace mneumonic with your own mneumonic, and testnet_api with your own api key.
```bash
cd ethereum
npm install
node deploy.js
```

### Run test 
```bash
cd ethereum/test
node Inbox.test.js
```

## React Frontend

The frontend part of the project is located in the `frontend` directory. It’s a React application that interacts with the Ethereum smart contract.

### Usage
To run the frontend locally, navigate to the `frontend/lottery-react` directory and run the following commands:
```bash
cd frontend/lottery-react
npm install
npm start
```

This will start the React development server, and you can open the application in your web browser at http://localhost:3000.

## Frontend Snapshot

Here's what the frontend of the Lottery application looks like:

![Lottery Frontend](https://i.imgur.com/hhy7HHV.png)

## Show your support
Give a ⭐ if this project helped you!





