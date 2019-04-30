// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateGameItem = `subscription OnCreateGameItem {
  onCreateGameItem {
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
export const onUpdateGameItem = `subscription OnUpdateGameItem {
  onUpdateGameItem {
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
export const onDeleteGameItem = `subscription OnDeleteGameItem {
  onDeleteGameItem {
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
export const onCreateNote = `subscription OnCreateNote {
  onCreateNote {
    id
    entryDate
    comment
  }
}
`;
export const onUpdateNote = `subscription OnUpdateNote {
  onUpdateNote {
    id
    entryDate
    comment
  }
}
`;
export const onDeleteNote = `subscription OnDeleteNote {
  onDeleteNote {
    id
    entryDate
    comment
  }
}
`;
export const onCreateReview = `subscription OnCreateReview {
  onCreateReview {
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
export const onUpdateReview = `subscription OnUpdateReview {
  onUpdateReview {
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
export const onDeleteReview = `subscription OnDeleteReview {
  onDeleteReview {
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
