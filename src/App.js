import { Component } from "react";
import "./App.css";
import { MainMenu } from "./components/MainMenu";
import { NavMenu } from "./components/NavMenu";
import { SearchBar } from "./components/SearchBar";

export class App extends Component {
  state = {
    menuItems: [
      { title: 'Google', link: 'https://google.com' },
      { title: 'Apple', link: 'https://apple.com/br' },
      { title: 'Microsoft', link: 'https://microsoft.com' },
      { title: 'PUC Minas', link: 'https://pucminas.br' },
    ],
  }

  render() {
    return (
      <>
        <header className="main-header">
          <div className="main-logo">
            <h1>Logo</h1>
          </div>

          <div className="header-info">
            <MainMenu />
            <SearchBar />
          </div>
        </header>

        <NavMenu items={this.state.menuItems} />
      </>
    );
  }
}
