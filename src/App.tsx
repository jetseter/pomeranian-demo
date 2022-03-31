/*
 * @Author: your name
 * @Date: 2022-03-28 13:47:12
 * @LastEditTime: 2022-03-28 15:50:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \patent-plat-webd:\Wild Projects\azure\src\App.tsx
 */
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateGame from "./pages/CreateGame";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import JoinGame from "./pages/JoinGame";
import PlayGame from "./pages/PlayGame";
import CompleteGame from "./pages/CompleteGame";

const client = new ApolloClient({
  uri: "https://graphql-perm.azurewebsites.net/api/graphql?code=dVuCTkOhU3hQnTnDysVT/PvHBBUsPIzn/nVXr7RxqXGaIvEDFXgX/w==",
  cache: new InMemoryCache(),
});

function AppGame() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Route path="/" exact component={CreateGame} />
          <Route path="/game/join/:id" component={JoinGame} />
          <Route path="/game/play/:id/:playerId" component={PlayGame} />
          <Route path="/game/finish/:id/:playerId" component={CompleteGame} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default AppGame;
