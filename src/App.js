// App.js
import React from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import SortBar from './Components/SortBar';
import BotSpecs from './Components/BotSpecs';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bots: [],
      yourBotArmy: [],
      selectedBot: null,
    };
  }

  componentDidMount() {
    // Fetch data from the local server
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => this.setState({ bots: data }))
      .catch((error) => console.error('Error fetching data:', error));
  }

  handleEnlistBot = (bot) => {
    // Check if the bot is not already enlisted
    if (!this.state.yourBotArmy.includes(bot)) {
      this.setState((prevState) => ({
        yourBotArmy: [...prevState.yourBotArmy, bot],
      }));
    }
  };

  handleReleaseBot = (bot) => {
    this.setState((prevState) => ({
      yourBotArmy: prevState.yourBotArmy.filter((b) => b.id !== bot.id),
    }));
  };

  handleDeleteBot = (bot) => {
    // Delete the bot from the backend
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => this.handleReleaseBot(bot))
      .catch((error) => console.error('Error deleting bot:', error));
  };

  handleSelectBot = (bot) => {
    this.setState({ selectedBot: bot });
  };

  handleGoBack = () => {
    this.setState({ selectedBot: null });
  };

  render() {
    const { bots, yourBotArmy, selectedBot } = this.state;

    return (
      <div>
        <h1>Bot Battlr</h1>
        {selectedBot ? (
          <BotSpecs bot={selectedBot} onGoBack={this.handleGoBack} onEnlist={this.handleEnlistBot} />
        ) : (
          <div>
            <SortBar />
            <BotCollection bots={bots} onEnlist={this.handleEnlistBot} onSelect={this.handleSelectBot} />
          </div>
        )}
        <YourBotArmy bots={yourBotArmy} onRelease={this.handleReleaseBot} onDelete={this.handleDeleteBot} />
      </div>
    );
  }
}

export default App;
