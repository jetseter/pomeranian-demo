/*
 * @Author: your name
 * @Date: 2022-03-28 13:47:12
 * @LastEditTime: 2022-03-28 14:03:06
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \patent-plat-webd:\Wild Projects\azure\src\pages\CreateGame.tsx
 */
import { useMutation } from "@apollo/client";
// import { GraphQLError } from "graphql";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CreateGameDocument } from "../generated";

const CreateGame: React.FC = () => {
  const [apiError, setApiError] = useState("");
  const [creating, setCreating] = useState(false);
  const [createGame, { loading, called, data, error }] = useMutation(
    CreateGameDocument
  );

  const history = useHistory();

  useEffect(() => {
    if (creating) {
      createGame()
      .then(() => { console.log(`success`)})
      .catch((error) => {
        console.log(error);
        // @ts-ignore
        setApiError(JSON.stringify(error));
      });
    }
  }, [creating, createGame]);

  useEffect(() => {
    if (!loading && called && !error && data && data.createGame) {
      history.push(`/game/join/${data.createGame.id}`);
    } else if (error) {
      console.error(error);
    }
  }, [loading, called, data, error, history]);

  return (
    <div>
      <h1>Create a new game!</h1>

      { apiError && 
        <div>
          <h2>Error: {apiError}</h2>
        </div>
      }

      { !apiError && 
        <button disabled={creating} onClick={() => setCreating(true)}>
          Start a new game
        </button>
    }
    </div>
  );
};

export default CreateGame;
