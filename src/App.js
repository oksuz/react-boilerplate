import React from 'react';

export default class App extends React.Component {
  static DEFAULT_MSG = 'Hello';

  list = [
    'Merhaba',
    'Grüß Gott',
    'Namaskar',
    'Zdraveite',
    'Hola',
    'Hafa adai',
    'Nǐ hǎo',
    'Dobro Jutro = Good morning',
    'Dobar dan = Good day',
    'Dobra većer = Good evening',
    'God dag',
    'Hoi = Hi↵Hallo',
    'hyvää päivää',
    'Bonjour',
    'Dia dhuit',
    'Guten tag',
    'Yasou',
    'Shalom',
    'Namaste',
    'Jo napot',
    'Góðan dag',
    'Nde-ewo',
    'Selamat siang',
    'Salve',
    'Konnichiwa',
    'Ahn nyong ha se yo',
    'Salve',
    'Sveiki',
    'Moïen',
    'Bonġu',
    'Niltze',
    'Namastē',
    'Hallo',
    'Salam',
    'Cześć',
    'Olá',
    'Bună ziua',
    'Zdravstvuyte',
    'Zdravo',
    'Ahoj',
    'Hola',
    'Hujambo',
    'Hallå',
    'Ia orna',
    'Sawasdee',
    'Avuxeni',
    'Merhaba',
    'Zdravstvuyte',
    'Assalamo aleikum',
    'xin chào',
    'Shwmae',
    'Sawubona'
  ];

  state = {
    messages: {}
  };

  onChange() {
    const rand = Math.round(Math.random() * this.list.length);
    this.setState({ message: { hello: this.list[rand] } });
  }

  render() {
    const hello = this.state.message?.hello ?? App.DEFAULT_MSG;

    return (
      <div className="welcome-message">
        {hello} world!
        <br />
        {/* <button onClick={this::this.onChange}>change</button> */}
        <button onClick={this.onChange.bind(this)}>change</button>
      </div>
    );
  }
}
