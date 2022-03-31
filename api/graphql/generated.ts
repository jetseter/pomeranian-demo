import { GraphQLResolveInfo } from "graphql";
import { QuestionModel, GameModel, UserModel } from "./data/types";
import { ApolloContext } from "./apolloContext";
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
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & { [P in K]-?: NonNullable<T[P]> };
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  GameState: GameState;
  Question: ResolverTypeWrapper<QuestionModel>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Player: ResolverTypeWrapper<UserModel>;
  Game: ResolverTypeWrapper<GameModel>;
  PlayerResult: ResolverTypeWrapper<PlayerResult>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Question: QuestionModel;
  ID: Scalars["ID"];
  String: Scalars["String"];
  Player: UserModel;
  Game: GameModel;
  PlayerResult: PlayerResult;
  Boolean: Scalars["Boolean"];
  Query: {};
  Mutation: {};
};

export type QuestionResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Question"] = ResolversParentTypes["Question"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  question?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  correctAnswer?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  answers?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Player"] = ResolversParentTypes["Player"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  game?: Resolver<
    ResolversTypes["Game"],
    ParentType,
    ContextType,
    RequireFields<PlayerGameArgs, never>
  >;
  games?: Resolver<Array<ResolversTypes["Game"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GameResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Game"] = ResolversParentTypes["Game"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes["GameState"]>, ParentType, ContextType>;
  players?: Resolver<Array<ResolversTypes["Player"]>, ParentType, ContextType>;
  questions?: Resolver<
    Array<ResolversTypes["Question"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerResultResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["PlayerResult"] = ResolversParentTypes["PlayerResult"]
> = {
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  question?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  submittedAnswer?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  correctAnswer?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  answers?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  correct?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  game?: Resolver<
    Maybe<ResolversTypes["Game"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGameArgs, "id">
  >;
  games?: Resolver<Array<ResolversTypes["Game"]>, ParentType, ContextType>;
  playerResults?: Resolver<
    Array<ResolversTypes["PlayerResult"]>,
    ParentType,
    ContextType,
    RequireFields<QueryPlayerResultsArgs, "gameId" | "playerId">
  >;
};

export type MutationResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createGame?: Resolver<Maybe<ResolversTypes["Game"]>, ParentType, ContextType>;
  addPlayerToGame?: Resolver<
    ResolversTypes["Player"],
    ParentType,
    ContextType,
    RequireFields<MutationAddPlayerToGameArgs, "id" | "name">
  >;
  startGame?: Resolver<
    Maybe<ResolversTypes["Game"]>,
    ParentType,
    ContextType,
    RequireFields<MutationStartGameArgs, "id">
  >;
  submitAnswer?: Resolver<
    Maybe<ResolversTypes["Player"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationSubmitAnswerArgs,
      "gameId" | "playerId" | "questionId" | "answer"
    >
  >;
};

export type Resolvers<ContextType = ApolloContext> = {
  Question?: QuestionResolvers<ContextType>;
  Player?: PlayerResolvers<ContextType>;
  Game?: GameResolvers<ContextType>;
  PlayerResult?: PlayerResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = ApolloContext> = Resolvers<ContextType>;
