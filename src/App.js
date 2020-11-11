import { Component } from "react";
import "./App.css";
import { ArticleList } from "./components/ArticleList";
import { MainMenu } from "./components/MainMenu";
import { NavMenu } from "./components/NavMenu";
import { SearchBar } from "./components/SearchBar";
import { SideBar } from "./components/SideBar";

export class App extends Component {
  state = {
    menuItems: [
      { title: 'Google', link: 'https://google.com' },
      { title: 'Apple', link: 'https://apple.com/br' },
      { title: 'Microsoft', link: 'https://microsoft.com' },
      { title: 'PUC Minas', link: 'https://pucminas.br' },
    ],
    articleItems:[
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png",
        title: "Artigo 01",
        text: "Meu primeiro artigo",
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        title: "Artigo 02",
        text: "Meu segundo artigo",
      },
      { 
        image: "https://logodownload.org/wp-content/uploads/2014/04/microsoft-logo-2.png",
        title: "Artigo 03",
        text: "Meu terceiro artigo",
      },
      {
        image: "https://i.pinimg.com/originals/9c/3d/6d/9c3d6d0a0b6d4d4005141d0220952b62.jpg",
        title: "Artigo 04",
        text: "Meu quarto artigo",
      },
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

        <div className="main-body">
          <div className="main-article">
            <ArticleList items={this.state.articleItems} /><br />
          </div>
          <div className="main-sidebar">
            <SideBar />
          </div>
        </div>
      </>
    );
  }
}
