import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import web3 from './web3';
import lottery from './lottery';
import Layout from './components/Layout/Layout';
import ParticipateForm from './components/ParticipateForm/ParticipateForm';
import WinnerPicker from './components/WinnerPicker/WinnerPicker';
import MessageBar from './components/MessageBar/MessageBar';

function App() {
  
  const [manager, setManager] = useState("");
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState("");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // web3.eth.getAccounts().then(console.log);
    async function fetchData() {
      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);

      setManager(manager);
      setPlayers(players);
      setBalance(balance);
    }

    fetchData();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    setMessage("Waiting on transaction success...")

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(value, "ether"),
    });

    setMessage("You have been entered!")
  }

  async function handleClick() {
    const accounts = await web3.eth.getAccounts();

    setMessage("Waiting on transaction success ...");

    await lottery.methods.pickWinner().send({
      from: accounts[0],
    });

    setMessage("A winner has been picked!");
  }

  return (
    <div className="App">
      <Layout>
        <p>
          This contract is managed by {manager}. There are currently {" "} {players.length} people entered, competing to win {" "} {web3.utils.fromWei(balance, "ether")} ether!
        </p>
        <ParticipateForm handleSubmit={handleSubmit} value={value} setValue={setValue} />
        <WinnerPicker handleClick={handleClick} />
        <MessageBar message={message} />
      </Layout>
    </div>
  );
}

export default App;
