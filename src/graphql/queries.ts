// tslint:disable
// this is an auto generated file. This will be overwritten

export const popularGames = `query PopularGames {
  popularGames {
    id
    name
    popularity
    url
    summary
    cover {
      id
      url
      width
      height
      cloudinary_id
    }
  }
}
`;
export const getGameItem = `query GetGameItem($id: ID!) {
  getGameItem(id: $id) {
    id
    name
    likes
    rating
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
export const listGameItems = `query ListGameItems(
  $filter: ModelGameItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listGameItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      likes
      rating
      reviews {
        nextToken
      }
      notes {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getNote = `query GetNote($id: ID!) {
  getNote(id: $id) {
    id
    entryDate
    comment
  }
}
`;
export const listNotes = `query ListNotes(
  $filter: ModelNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      entryDate
      comment
    }
    nextToken
  }
}
`;
export const getReview = `query GetReview($id: ID!) {
  getReview(id: $id) {
    id
    score
    content
    game {
      id
      name
      likes
      rating
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
export const listReviews = `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      score
      content
      game {
        id
        name
        likes
        rating
      }
      reviewGameId
    }
    nextToken
  }
}
`;
