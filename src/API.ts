/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateGameItemInput = {
  id?: string | null,
  name?: string | null,
  likes?: number | null,
  rating?: number | null,
};

export type UpdateGameItemInput = {
  id: string,
  name?: string | null,
  likes?: number | null,
  rating?: number | null,
};

export type DeleteGameItemInput = {
  id?: string | null,
};

export type CreateNoteInput = {
  id?: string | null,
  entryDate?: string | null,
  comment?: string | null,
  gameItemNotesId?: string | null,
};

export type UpdateNoteInput = {
  id: string,
  entryDate?: string | null,
  comment?: string | null,
  gameItemNotesId?: string | null,
};

export type DeleteNoteInput = {
  id?: string | null,
};

export type CreateReviewInput = {
  id?: string | null,
  score?: number | null,
  content?: string | null,
  reviewGameId?: string | null,
};

export type UpdateReviewInput = {
  id: string,
  score?: number | null,
  content?: string | null,
  reviewGameId?: string | null,
};

export type DeleteReviewInput = {
  id?: string | null,
};

export type ModelGameItemFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  likes?: ModelIntFilterInput | null,
  rating?: ModelIntFilterInput | null,
  and?: Array< ModelGameItemFilterInput | null > | null,
  or?: Array< ModelGameItemFilterInput | null > | null,
  not?: ModelGameItemFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelNoteFilterInput = {
  id?: ModelIDFilterInput | null,
  entryDate?: ModelStringFilterInput | null,
  comment?: ModelStringFilterInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
};

export type ModelReviewFilterInput = {
  id?: ModelIDFilterInput | null,
  score?: ModelIntFilterInput | null,
  content?: ModelStringFilterInput | null,
  reviewGameId?: ModelIDFilterInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
};

export type CreateGameItemMutationVariables = {
  input: CreateGameItemInput,
};

export type CreateGameItemMutation = {
  createGameItem:  {
    __typename: "GameItem",
    id: string,
    name: string | null,
    likes: number | null,
    rating: number | null,
    reviews:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        score: number | null,
        content: string | null,
        reviewGameId: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    notes:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        entryDate: string | null,
        comment: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateGameItemMutationVariables = {
  input: UpdateGameItemInput,
};

export type UpdateGameItemMutation = {
  updateGameItem:  {
    __typename: "GameItem",
    id: string,
    name: string | null,
    likes: number | null,
    rating: number | null,
    reviews:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        score: number | null,
        content: string | null,
        reviewGameId: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    notes:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        entryDate: string | null,
        comment: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteGameItemMutationVariables = {
  input: DeleteGameItemInput,
};

export type DeleteGameItemMutation = {
  deleteGameItem:  {
    __typename: "GameItem",
    id: string,
    name: string | null,
    likes: number | null,
    rating: number | null,
    reviews:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        score: number | null,
        content: string | null,
        reviewGameId: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    notes:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        entryDate: string | null,
        comment: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
};

export type CreateNoteMutation = {
  createNote:  {
    __typename: "Note",
    id: string,
    entryDate: string | null,
    comment: string | null,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
};

export type UpdateNoteMutation = {
  updateNote:  {
    __typename: "Note",
    id: string,
    entryDate: string | null,
    comment: string | null,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
};

export type DeleteNoteMutation = {
  deleteNote:  {
    __typename: "Note",
    id: string,
    entryDate: string | null,
    comment: string | null,
  } | null,
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput,
};

export type CreateReviewMutation = {
  createReview:  {
    __typename: "Review",
    id: string,
    score: number | null,
    content: string | null,
    game:  {
      __typename: "GameItem",
      id: string,
      name: string | null,
      likes: number | null,
      rating: number | null,
      reviews:  {
        __typename: "ModelReviewConnection",
        nextToken: string | null,
      } | null,
      notes:  {
        __typename: "ModelNoteConnection",
        nextToken: string | null,
      } | null,
    } | null,
    reviewGameId: string | null,
  } | null,
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput,
};

export type UpdateReviewMutation = {
  updateReview:  {
    __typename: "Review",
    id: string,
    score: number | null,
    content: string | null,
    game:  {
      __typename: "GameItem",
      id: string,
      name: string | null,
      likes: number | null,
      rating: number | null,
      reviews:  {
        __typename: "ModelReviewConnection",
        nextToken: string | null,
      } | null,
      notes:  {
        __typename: "ModelNoteConnection",
        nextToken: string | null,
      } | null,
    } | null,
    reviewGameId: string | null,
  } | null,
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput,
};

export type DeleteReviewMutation = {
  deleteReview:  {
    __typename: "Review",
    id: string,
    score: number | null,
    content: string | null,
    game:  {
      __typename: "GameItem",
      id: string,
      name: string | null,
      likes: number | null,
      rating: number | null,
      reviews:  {
        __typename: "ModelReviewConnection",
        nextToken: string | null,
      } | null,
      notes:  {
        __typename: "ModelNoteConnection",
        nextToken: string | null,
      } | null,
    } | null,
    reviewGameId: string | null,
  } | null,
};

export type PopularGamesQuery = {
  popularGames:  Array< {
    __typename: "Game",
    id: string,
    name: string | null,
    popularity: number | null,
    url: string | null,
    summary: string | null,
    cover:  {
      __typename: "Image",
      id: string | null,
      url: string | null,
      width: number | null,
      height: number | null,
      cloudinary_id: string | null,
    } | null,
  } > | null,
};

export type GetGameItemQueryVariables = {
  id: string,
};

export type GetGameItemQuery = {
  getGameItem:  {
    __typename: "GameItem",
    id: string,
    name: string | null,
    likes: number | null,
    rating: number | null,
    reviews:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        score: number | null,
        content: string | null,
        reviewGameId: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    notes:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        entryDate: string | null,
        comment: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListGameItemsQueryVariables = {
  filter?: ModelGameItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGameItemsQuery = {
  listGameItems:  {
    __typename: "ModelGameItemConnection",
    items:  Array< {
      __typename: "GameItem",
      id: string,
      name: string | null,
      likes: number | null,
      rating: number | null,
      reviews:  {
        __typename: "ModelReviewConnection",
        nextToken: string | null,
      } | null,
      notes:  {
        __typename: "ModelNoteConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote:  {
    __typename: "Note",
    id: string,
    entryDate: string | null,
    comment: string | null,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      entryDate: string | null,
      comment: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetReviewQueryVariables = {
  id: string,
};

export type GetReviewQuery = {
  getReview:  {
    __typename: "Review",
    id: string,
    score: number | null,
    content: string | null,
    game:  {
      __typename: "GameItem",
      id: string,
      name: string | null,
      likes: number | null,
      rating: number | null,
      reviews:  {
        __typename: "ModelReviewConnection",
        nextToken: string | null,
      } | null,
      notes:  {
        __typename: "ModelNoteConnection",
        nextToken: string | null,
      } | null,
    } | null,
    reviewGameId: string | null,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsQuery = {
  listReviews:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      score: number | null,
      content: string | null,
      game:  {
        __typename: "GameItem",
        id: string,
        name: string | null,
        likes: number | null,
        rating: number | null,
      } | null,
      reviewGameId: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateGameItemSubscription = {
  onCreateGameItem:  {
    __typename: "GameItem",
    id: string,
    name: string | null,
    likes: number | null,
    rating: number | null,
    reviews:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        score: number | null,
        content: string | null,
        reviewGameId: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    notes:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        entryDate: string | null,
        comment: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateGameItemSubscription = {
  onUpdateGameItem:  {
    __typename: "GameItem",
    id: string,
    name: string | null,
    likes: number | null,
    rating: number | null,
    reviews:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        score: number | null,
        content: string | null,
        reviewGameId: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    notes:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        entryDate: string | null,
        comment: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteGameItemSubscription = {
  onDeleteGameItem:  {
    __typename: "GameItem",
    id: string,
    name: string | null,
    likes: number | null,
    rating: number | null,
    reviews:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        score: number | null,
        content: string | null,
        reviewGameId: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    notes:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        entryDate: string | null,
        comment: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote:  {
    __typename: "Note",
    id: string,
    entryDate: string | null,
    comment: string | null,
  } | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote:  {
    __typename: "Note",
    id: string,
    entryDate: string | null,
    comment: string | null,
  } | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote:  {
    __typename: "Note",
    id: string,
    entryDate: string | null,
    comment: string | null,
  } | null,
};

export type OnCreateReviewSubscription = {
  onCreateReview:  {
    __typename: "Review",
    id: string,
    score: number | null,
    content: string | null,
    game:  {
      __typename: "GameItem",
      id: string,
      name: string | null,
      likes: number | null,
      rating: number | null,
      reviews:  {
        __typename: "ModelReviewConnection",
        nextToken: string | null,
      } | null,
      notes:  {
        __typename: "ModelNoteConnection",
        nextToken: string | null,
      } | null,
    } | null,
    reviewGameId: string | null,
  } | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview:  {
    __typename: "Review",
    id: string,
    score: number | null,
    content: string | null,
    game:  {
      __typename: "GameItem",
      id: string,
      name: string | null,
      likes: number | null,
      rating: number | null,
      reviews:  {
        __typename: "ModelReviewConnection",
        nextToken: string | null,
      } | null,
      notes:  {
        __typename: "ModelNoteConnection",
        nextToken: string | null,
      } | null,
    } | null,
    reviewGameId: string | null,
  } | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview:  {
    __typename: "Review",
    id: string,
    score: number | null,
    content: string | null,
    game:  {
      __typename: "GameItem",
      id: string,
      name: string | null,
      likes: number | null,
      rating: number | null,
      reviews:  {
        __typename: "ModelReviewConnection",
        nextToken: string | null,
      } | null,
      notes:  {
        __typename: "ModelNoteConnection",
        nextToken: string | null,
      } | null,
    } | null,
    reviewGameId: string | null,
  } | null,
};
