import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum GameState {
  WaitingForPlayers = "WaitingForPlayers",
  Started = "Started",
  Completed = "Completed",
}

export type Question = {
  __typename?: "Question";
  id: Scalars["ID"];
  question: Scalars["String"];
  correctAnswer: Scalars["String"];
  answers: Array<Scalars["String"]>;
};

export type Player = {
  __typename?: "Player";
  id: Scalars["ID"];
  name: Scalars["String"];
  game: Game;
  games: Array<Game>;
};

export type PlayerGameArgs = {
  gameId?: Maybe<Scalars["ID"]>;
};

export type Game = {
  __typename?: "Game";
  id: Scalars["ID"];
  state?: Maybe<GameState>;
  players: Array<Player>;
  questions: Array<Question>;
};

export type PlayerResult = {
  __typename?: "PlayerResult";
  name: Scalars["String"];
  question: Scalars["String"];
  submittedAnswer: Scalars["String"];
  correctAnswer: Scalars["String"];
  answers: Array<Scalars["String"]>;
  correct?: Maybe<Scalars["Boolean"]>;
};

export type Query = {
  __typename?: "Query";
  game?: Maybe<Game>;
  games: Array<Game>;
  playerResults: Array<PlayerResult>;
};

export type QueryGameArgs = {
  id: Scalars["ID"];
};

export type QueryPlayerResultsArgs = {
  gameId: Scalars["ID"];
  playerId: Scalars["ID"];
};

export type Mutation = {
  __typename?: "Mutation";
  createGame?: Maybe<Game>;
  addPlayerToGame: Player;
  startGame?: Maybe<Game>;
  submitAnswer?: Maybe<Player>;
};

export type MutationAddPlayerToGameArgs = {
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type MutationStartGameArgs = {
  id: Scalars["ID"];
};

export type MutationSubmitAnswerArgs = {
  gameId: Scalars["ID"];
  playerId: Scalars["ID"];
  questionId: Scalars["ID"];
  answer: Scalars["String"];
};

export type AddPlayerScreenMutationVariables = Exact<{
  id: Scalars["ID"];
  name: Scalars["String"];
}>;

export type AddPlayerScreenMutation = { __typename?: "Mutation" } & {
  addPlayerToGame: { __typename?: "Player" } & Pick<Player, "id">;
  startGame?: Maybe<
    { __typename?: "Game" } & Pick<Game, "id"> & {
        players: Array<{ __typename?: "Player" } & Pick<Player, "id" | "name">>;
      }
  >;
};

export type SubmitAnswerMutationVariables = Exact<{
  gameId: Scalars["ID"];
  playerId: Scalars["ID"];
  questionId: Scalars["ID"];
  answer: Scalars["String"];
}>;

export type SubmitAnswerMutation = { __typename?: "Mutation" } & {
  submitAnswer?: Maybe<{ __typename?: "Player" } & Pick<Player, "id">>;
};

export type CreateGameMutationVariables = Exact<{ [key: string]: never }>;

export type CreateGameMutation = { __typename?: "Mutation" } & {
  createGame?: Maybe<{ __typename?: "Game" } & Pick<Game, "id">>;
};

export type PlayerResultsQueryVariables = Exact<{
  gameId: Scalars["ID"];
  playerId: Scalars["ID"];
}>;

export type PlayerResultsQuery = { __typename?: "Query" } & {
  playerResults: Array<
    { __typename?: "PlayerResult" } & Pick<
      PlayerResult,
      "correct" | "question" | "answers" | "correctAnswer" | "submittedAnswer"
    >
  >;
};

export type GetGameQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetGameQuery = { __typename?: "Query" } & {
  game?: Maybe<
    { __typename?: "Game" } & {
      questions: Array<
        { __typename?: "Question" } & Pick<
          Question,
          "id" | "question" | "answers"
        >
      >;
    }
  >;
};

export const AddPlayerScreenDocument: DocumentNode<
  AddPlayerScreenMutation,
  AddPlayerScreenMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addPlayerScreen" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addPlayerToGame" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "name" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "name" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "startGame" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "players" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const SubmitAnswerDocument: DocumentNode<
  SubmitAnswerMutation,
  SubmitAnswerMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "submitAnswer" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "gameId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "playerId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "questionId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "answer" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "submitAnswer" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gameId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "gameId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "playerId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "playerId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "questionId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "questionId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "answer" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "answer" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const CreateGameDocument: DocumentNode<
  CreateGameMutation,
  CreateGameMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateGame" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createGame" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const PlayerResultsDocument: DocumentNode<
  PlayerResultsQuery,
  PlayerResultsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "playerResults" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "gameId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "playerId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "playerResults" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gameId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "gameId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "playerId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "playerId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "correct" } },
                { kind: "Field", name: { kind: "Name", value: "question" } },
                { kind: "Field", name: { kind: "Name", value: "answers" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "correctAnswer" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "submittedAnswer" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const GetGameDocument: DocumentNode<
  GetGameQuery,
  GetGameQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getGame" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "game" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "questions" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "question" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "answers" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
