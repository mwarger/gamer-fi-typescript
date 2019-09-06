// tslint:disable
// this is an auto generated file. This will be overwritten

export const createGameItem = `mutation CreateGameItem($input: CreateGameItemInput!) {
  createGameItem(input: $input) {
    id
    name
    likes
    reviews {
      items {
        id
        score
        content
        reviewGameId
      }
      nextToken
    }
    notes {
      items {
        id
        entryDate
        comment
      }
      nextToken
    }
  }
}
`;
export const updateGameItem = `mutation UpdateGameItem($input: UpdateGameItemInput!) {
  updateGameItem(input: $input) {
    id
    name
    likes
    reviews {
      items {
        id
        score
        content
        reviewGameId
      }
      nextToken
    }
    notes {
      items {
        id
        entryDate
        comment
      }
      nextToken
    }
  }
}
`;
export const deleteGameItem = `mutation DeleteGameItem($input: DeleteGameItemInput!) {
  deleteGameItem(input: $input) {
    id
    name
    likes
    reviews {
      items {
        id
        score
        content
        reviewGameId
      }
      nextToken
    }
    notes {
      items {
        id
        entryDate
        comment
      }
      nextToken
    }
  }
}
`;
export const createReview = `mutation CreateReview($input: CreateReviewInput!) {
  createReview(input: $input) {
    id
    score
    content
    game {
      id
      name
      likes
      reviews {
        nextToken
      }
      notes {
        nextToken
      }
    }
    reviewGameId
  }
}
`;
export const updateReview = `mutation UpdateReview($input: UpdateReviewInput!) {
  updateReview(input: $input) {
    id
    score
    content
    game {
      id
      name
      likes
      reviews {
        nextToken
      }
      notes {
        nextToken
      }
    }
    reviewGameId
  }
}
`;
export const deleteReview = `mutation DeleteReview($input: DeleteReviewInput!) {
  deleteReview(input: $input) {
    id
    score
    content
    game {
      id
      name
      likes
      reviews {
        nextToken
      }
      notes {
        nextToken
      }
    }
    reviewGameId
  }
}
`;
export const createNote = `mutation CreateNote($input: CreateNoteInput!) {
  createNote(input: $input) {
    id
    entryDate
    comment
  }
}
`;
export const updateNote = `mutation UpdateNote($input: UpdateNoteInput!) {
  updateNote(input: $input) {
    id
    entryDate
    comment
  }
}
`;
export const deleteNote = `mutation DeleteNote($input: DeleteNoteInput!) {
  deleteNote(input: $input) {
    id
    entryDate
    comment
  }
}
`;
