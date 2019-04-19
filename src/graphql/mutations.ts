// tslint:disable
// this is an auto generated file. This will be overwritten

export const createImage = `mutation CreateImage($input: CreateImageInput!) {
  createImage(input: $input) {
    id
    url
    width
    height
    cloudinary_id
  }
}
`;
export const updateImage = `mutation UpdateImage($input: UpdateImageInput!) {
  updateImage(input: $input) {
    id
    url
    width
    height
    cloudinary_id
  }
}
`;
export const deleteImage = `mutation DeleteImage($input: DeleteImageInput!) {
  deleteImage(input: $input) {
    id
    url
    width
    height
    cloudinary_id
  }
}
`;
export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
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
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
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
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
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
export const createPlatform = `mutation CreatePlatform($input: CreatePlatformInput!) {
  createPlatform(input: $input) {
    id
    name
    url
  }
}
`;
export const updatePlatform = `mutation UpdatePlatform($input: UpdatePlatformInput!) {
  updatePlatform(input: $input) {
    id
    name
    url
  }
}
`;
export const deletePlatform = `mutation DeletePlatform($input: DeletePlatformInput!) {
  deletePlatform(input: $input) {
    id
    name
    url
  }
}
`;
export const createReview = `mutation CreateReview($input: CreateReviewInput!) {
  createReview(input: $input) {
    likes
    views
    content
    id
    introduction
  }
}
`;
export const updateReview = `mutation UpdateReview($input: UpdateReviewInput!) {
  updateReview(input: $input) {
    likes
    views
    content
    id
    introduction
  }
}
`;
export const deleteReview = `mutation DeleteReview($input: DeleteReviewInput!) {
  deleteReview(input: $input) {
    likes
    views
    content
    id
    introduction
  }
}
`;
export const createAchievement = `mutation CreateAchievement($input: CreateAchievementInput!) {
  createAchievement(input: $input) {
    id
    name
    description
  }
}
`;
export const updateAchievement = `mutation UpdateAchievement($input: UpdateAchievementInput!) {
  updateAchievement(input: $input) {
    id
    name
    description
  }
}
`;
export const deleteAchievement = `mutation DeleteAchievement($input: DeleteAchievementInput!) {
  deleteAchievement(input: $input) {
    id
    name
    description
  }
}
`;
