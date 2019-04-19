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
    reviews {
      items {
        likes
        views
        content
        id
        introduction
      }
      nextToken
    }
    achievements {
      items {
        id
        name
        description
      }
      nextToken
    }
    platforms {
      items {
        id
        name
        url
      }
      nextToken
    }
  }
}
`;
export const getImage = `query GetImage($id: ID!) {
  getImage(id: $id) {
    id
    url
    width
    height
    cloudinary_id
  }
}
`;
export const listImages = `query ListImages(
  $filter: ModelImageFilterInput
  $limit: Int
  $nextToken: String
) {
  listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      url
      width
      height
      cloudinary_id
    }
    nextToken
  }
}
`;
export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
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
    reviews {
      items {
        likes
        views
        content
        id
        introduction
      }
      nextToken
    }
    achievements {
      items {
        id
        name
        description
      }
      nextToken
    }
    platforms {
      items {
        id
        name
        url
      }
      nextToken
    }
  }
}
`;
export const listGames = `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      reviews {
        nextToken
      }
      achievements {
        nextToken
      }
      platforms {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPlatform = `query GetPlatform($id: ID!) {
  getPlatform(id: $id) {
    id
    name
    url
  }
}
`;
export const listPlatforms = `query ListPlatforms(
  $filter: ModelPlatformFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlatforms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      url
    }
    nextToken
  }
}
`;
export const getReview = `query GetReview($id: ID!) {
  getReview(id: $id) {
    likes
    views
    content
    id
    introduction
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
      likes
      views
      content
      id
      introduction
    }
    nextToken
  }
}
`;
export const getAchievement = `query GetAchievement($id: ID!) {
  getAchievement(id: $id) {
    id
    name
    description
  }
}
`;
export const listAchievements = `query ListAchievements(
  $filter: ModelAchievementFilterInput
  $limit: Int
  $nextToken: String
) {
  listAchievements(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
    }
    nextToken
  }
}
`;
