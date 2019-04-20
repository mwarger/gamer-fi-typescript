/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateImageInput = {
  id?: string | null,
  url?: string | null,
  width?: number | null,
  height?: number | null,
  cloudinary_id?: string | null,
};

export type UpdateImageInput = {
  id: string,
  url?: string | null,
  width?: number | null,
  height?: number | null,
  cloudinary_id?: string | null,
};

export type DeleteImageInput = {
  id?: string | null,
};

export type CreateGameInput = {
  id?: string | null,
  name?: string | null,
  popularity?: number | null,
  url?: string | null,
  summary?: string | null,
};

export type UpdateGameInput = {
  id: string,
  name?: string | null,
  popularity?: number | null,
  url?: string | null,
  summary?: string | null,
};

export type DeleteGameInput = {
  id?: string | null,
};

export type CreatePlatformInput = {
  id?: string | null,
  name?: string | null,
  url?: string | null,
  gamePlatformsId?: string | null,
};

export type UpdatePlatformInput = {
  id: string,
  name?: string | null,
  url?: string | null,
  gamePlatformsId?: string | null,
};

export type DeletePlatformInput = {
  id?: string | null,
};

export type CreateReviewInput = {
  likes?: number | null,
  views?: number | null,
  content?: string | null,
  id?: string | null,
  introduction?: string | null,
  gameReviewsId?: string | null,
};

export type UpdateReviewInput = {
  likes?: number | null,
  views?: number | null,
  content?: string | null,
  id: string,
  introduction?: string | null,
  gameReviewsId?: string | null,
};

export type DeleteReviewInput = {
  id?: string | null,
};

export type CreateAchievementInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  gameAchievementsId?: string | null,
};

export type UpdateAchievementInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  gameAchievementsId?: string | null,
};

export type DeleteAchievementInput = {
  id?: string | null,
};

export type ModelImageFilterInput = {
  id?: ModelIDFilterInput | null,
  url?: ModelStringFilterInput | null,
  width?: ModelIntFilterInput | null,
  height?: ModelIntFilterInput | null,
  cloudinary_id?: ModelStringFilterInput | null,
  and?: Array< ModelImageFilterInput | null > | null,
  or?: Array< ModelImageFilterInput | null > | null,
  not?: ModelImageFilterInput | null,
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

export type ModelGameFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  popularity?: ModelFloatFilterInput | null,
  url?: ModelStringFilterInput | null,
  summary?: ModelStringFilterInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelFloatFilterInput = {
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

export type ModelPlatformFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  url?: ModelStringFilterInput | null,
  and?: Array< ModelPlatformFilterInput | null > | null,
  or?: Array< ModelPlatformFilterInput | null > | null,
  not?: ModelPlatformFilterInput | null,
};

export type ModelReviewFilterInput = {
  likes?: ModelIntFilterInput | null,
  views?: ModelIntFilterInput | null,
  content?: ModelStringFilterInput | null,
  id?: ModelIDFilterInput | null,
  introduction?: ModelStringFilterInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
};

export type ModelAchievementFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelAchievementFilterInput | null > | null,
  or?: Array< ModelAchievementFilterInput | null > | null,
  not?: ModelAchievementFilterInput | null,
};

export type CreateImageMutationVariables = {
  input: CreateImageInput,
};

export type CreateImageMutation = {
  createImage:  {
    __typename: "Image",
    id: string,
    url: string | null,
    width: number | null,
    height: number | null,
    cloudinary_id: string | null,
  } | null,
};

export type UpdateImageMutationVariables = {
  input: UpdateImageInput,
};

export type UpdateImageMutation = {
  updateImage:  {
    __typename: "Image",
    id: string,
    url: string | null,
    width: number | null,
    height: number | null,
    cloudinary_id: string | null,
  } | null,
};

export type DeleteImageMutationVariables = {
  input: DeleteImageInput,
};

export type DeleteImageMutation = {
  deleteImage:  {
    __typename: "Image",
    id: string,
    url: string | null,
    width: number | null,
    height: number | null,
    cloudinary_id: string | null,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
};

export type CreateGameMutation = {
  createGame:  {
    __typename: "Game",
    id: string,
    name: string | null,
    popularity: number | null,
    url: string | null,
    summary: string | null,
    cover:  {
      __typename: "Image",
      id: string,
      url: string | null,
      width: number | null,
      height: number | null,
      cloudinary_id: string | null,
    } | null,
    reviews:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        likes: number | null,
        views: number | null,
        content: string | null,
        id: string | null,
        introduction: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    achievements:  {
      __typename: "ModelAchievementConnection",
      items:  Array< {
        __typename: "Achievement",
        id: string,
        name: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    platforms:  {
      __typename: "ModelPlatformConnection",
      items:  Array< {
        __typename: "Platform",
        id: string,
        name: string | null,
        url: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
};

export type UpdateGameMutation = {
  updateGame:  {
    __typename: "Game",
    id: string,
    name: string | null,
    popularity: number | null,
    url: string | null,
    summary: string | null,
    cover:  {
      __typename: "Image",
      id: string,
      url: string | null,
      width: number | null,
      height: number | null,
      cloudinary_id: string | null,
    } | null,
    reviews:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        likes: number | null,
        views: number | null,
        content: string | null,
        id: string | null,
        introduction: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    achievements:  {
      __typename: "ModelAchievementConnection",
      items:  Array< {
        __typename: "Achievement",
        id: string,
        name: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    platforms:  {
      __typename: "ModelPlatformConnection",
      items:  Array< {
        __typename: "Platform",
        id: string,
        name: string | null,
        url: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
};

export type DeleteGameMutation = {
  deleteGame:  {
    __typename: "Game",
    id: string,
    name: string | null,
    popularity: number | null,
    url: string | null,
    summary: string | null,
    cover:  {
      __typename: "Image",
      id: string,
      url: string | null,
      width: number | null,
      height: number | null,
      cloudinary_id: string | null,
    } | null,
    reviews:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        likes: number | null,
        views: number | null,
        content: string | null,
        id: string | null,
        introduction: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    achievements:  {
      __typename: "ModelAchievementConnection",
      items:  Array< {
        __typename: "Achievement",
        id: string,
        name: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    platforms:  {
      __typename: "ModelPlatformConnection",
      items:  Array< {
        __typename: "Platform",
        id: string,
        name: string | null,
        url: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreatePlatformMutationVariables = {
  input: CreatePlatformInput,
};

export type CreatePlatformMutation = {
  createPlatform:  {
    __typename: "Platform",
    id: string,
    name: string | null,
    url: string | null,
  } | null,
};

export type UpdatePlatformMutationVariables = {
  input: UpdatePlatformInput,
};

export type UpdatePlatformMutation = {
  updatePlatform:  {
    __typename: "Platform",
    id: string,
    name: string | null,
    url: string | null,
  } | null,
};

export type DeletePlatformMutationVariables = {
  input: DeletePlatformInput,
};

export type DeletePlatformMutation = {
  deletePlatform:  {
    __typename: "Platform",
    id: string,
    name: string | null,
    url: string | null,
  } | null,
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput,
};

export type CreateReviewMutation = {
  createReview:  {
    __typename: "Review",
    likes: number | null,
    views: number | null,
    content: string | null,
    id: string | null,
    introduction: string | null,
  } | null,
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput,
};

export type UpdateReviewMutation = {
  updateReview:  {
    __typename: "Review",
    likes: number | null,
    views: number | null,
    content: string | null,
    id: string | null,
    introduction: string | null,
  } | null,
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput,
};

export type DeleteReviewMutation = {
  deleteReview:  {
    __typename: "Review",
    likes: number | null,
    views: number | null,
    content: string | null,
    id: string | null,
    introduction: string | null,
  } | null,
};

export type CreateAchievementMutationVariables = {
  input: CreateAchievementInput,
};

export type CreateAchievementMutation = {
  createAchievement:  {
    __typename: "Achievement",
    id: string,
    name: string | null,
    description: string | null,
  } | null,
};

export type UpdateAchievementMutationVariables = {
  input: UpdateAchievementInput,
};

export type UpdateAchievementMutation = {
  updateAchievement:  {
    __typename: "Achievement",
    id: string,
    name: string | null,
    description: string | null,
  } | null,
};

export type DeleteAchievementMutationVariables = {
  input: DeleteAchievementInput,
};

export type DeleteAchievementMutation = {
  deleteAchievement:  {
    __typename: "Achievement",
    id: string,
    name: string | null,
    description: string | null,
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
      id: string,
      url: string | null,
      width: number | null,
      height: number | null,
      cloudinary_id: string | null,
    } | null,
    reviews:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        likes: number | null,
        views: number | null,
        content: string | null,
        id: string | null,
        introduction: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    achievements:  {
      __typename: "ModelAchievementConnection",
      items:  Array< {
        __typename: "Achievement",
        id: string,
        name: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    platforms:  {
      __typename: "ModelPlatformConnection",
      items:  Array< {
        __typename: "Platform",
        id: string,
        name: string | null,
        url: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } > | null,
};

export type GetImageQueryVariables = {
  id: string,
};

export type GetImageQuery = {
  getImage:  {
    __typename: "Image",
    id: string,
    url: string | null,
    width: number | null,
    height: number | null,
    cloudinary_id: string | null,
  } | null,
};

export type ListImagesQueryVariables = {
  filter?: ModelImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImagesQuery = {
  listImages:  {
    __typename: "ModelImageConnection",
    items:  Array< {
      __typename: "Image",
      id: string,
      url: string | null,
      width: number | null,
      height: number | null,
      cloudinary_id: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame:  {
    __typename: "Game",
    id: string,
    name: string | null,
    popularity: number | null,
    url: string | null,
    summary: string | null,
    cover:  {
      __typename: "Image",
      id: string,
      url: string | null,
      width: number | null,
      height: number | null,
      cloudinary_id: string | null,
    } | null,
    reviews:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        likes: number | null,
        views: number | null,
        content: string | null,
        id: string | null,
        introduction: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    achievements:  {
      __typename: "ModelAchievementConnection",
      items:  Array< {
        __typename: "Achievement",
        id: string,
        name: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    platforms:  {
      __typename: "ModelPlatformConnection",
      items:  Array< {
        __typename: "Platform",
        id: string,
        name: string | null,
        url: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      name: string | null,
      popularity: number | null,
      url: string | null,
      summary: string | null,
      cover:  {
        __typename: "Image",
        id: string,
        url: string | null,
        width: number | null,
        height: number | null,
        cloudinary_id: string | null,
      } | null,
      reviews:  {
        __typename: "ModelReviewConnection",
        nextToken: string | null,
      } | null,
      achievements:  {
        __typename: "ModelAchievementConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelPlatformConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPlatformQueryVariables = {
  id: string,
};

export type GetPlatformQuery = {
  getPlatform:  {
    __typename: "Platform",
    id: string,
    name: string | null,
    url: string | null,
  } | null,
};

export type ListPlatformsQueryVariables = {
  filter?: ModelPlatformFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlatformsQuery = {
  listPlatforms:  {
    __typename: "ModelPlatformConnection",
    items:  Array< {
      __typename: "Platform",
      id: string,
      name: string | null,
      url: string | null,
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
    likes: number | null,
    views: number | null,
    content: string | null,
    id: string | null,
    introduction: string | null,
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
      likes: number | null,
      views: number | null,
      content: string | null,
      id: string | null,
      introduction: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetAchievementQueryVariables = {
  id: string,
};

export type GetAchievementQuery = {
  getAchievement:  {
    __typename: "Achievement",
    id: string,
    name: string | null,
    description: string | null,
  } | null,
};

export type ListAchievementsQueryVariables = {
  filter?: ModelAchievementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAchievementsQuery = {
  listAchievements:  {
    __typename: "ModelAchievementConnection",
    items:  Array< {
      __typename: "Achievement",
      id: string,
      name: string | null,
      description: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateImageSubscription = {
  onCreateImage:  {
    __typename: "Image",
    id: string,
    url: string | null,
    width: number | null,
    height: number | null,
    cloudinary_id: string | null,
  } | null,
};

export type OnUpdateImageSubscription = {
  onUpdateImage:  {
    __typename: "Image",
    id: string,
    url: string | null,
    width: number | null,
    height: number | null,
    cloudinary_id: string | null,
  } | null,
};

export type OnDeleteImageSubscription = {
  onDeleteImage:  {
    __typename: "Image",
    id: string,
    url: string | null,
    width: number | null,
    height: number | null,
    cloudinary_id: string | null,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame:  {
    __typename: "Game",
    id: string,
    name: string | null,
    popularity: number | null,
    url: string | null,
    summary: string | null,
    cover:  {
      __typename: "Image",
      id: string,
      url: string | null,
      width: number | null,
      height: number | null,
      cloudinary_id: string | null,
    } | null,
    reviews:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        likes: number | null,
        views: number | null,
        content: string | null,
        id: string | null,
        introduction: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    achievements:  {
      __typename: "ModelAchievementConnection",
      items:  Array< {
        __typename: "Achievement",
        id: string,
        name: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    platforms:  {
      __typename: "ModelPlatformConnection",
      items:  Array< {
        __typename: "Platform",
        id: string,
        name: string | null,
        url: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame:  {
    __typename: "Game",
    id: string,
    name: string | null,
    popularity: number | null,
    url: string | null,
    summary: string | null,
    cover:  {
      __typename: "Image",
      id: string,
      url: string | null,
      width: number | null,
      height: number | null,
      cloudinary_id: string | null,
    } | null,
    reviews:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        likes: number | null,
        views: number | null,
        content: string | null,
        id: string | null,
        introduction: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    achievements:  {
      __typename: "ModelAchievementConnection",
      items:  Array< {
        __typename: "Achievement",
        id: string,
        name: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    platforms:  {
      __typename: "ModelPlatformConnection",
      items:  Array< {
        __typename: "Platform",
        id: string,
        name: string | null,
        url: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame:  {
    __typename: "Game",
    id: string,
    name: string | null,
    popularity: number | null,
    url: string | null,
    summary: string | null,
    cover:  {
      __typename: "Image",
      id: string,
      url: string | null,
      width: number | null,
      height: number | null,
      cloudinary_id: string | null,
    } | null,
    reviews:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        likes: number | null,
        views: number | null,
        content: string | null,
        id: string | null,
        introduction: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    achievements:  {
      __typename: "ModelAchievementConnection",
      items:  Array< {
        __typename: "Achievement",
        id: string,
        name: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    platforms:  {
      __typename: "ModelPlatformConnection",
      items:  Array< {
        __typename: "Platform",
        id: string,
        name: string | null,
        url: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreatePlatformSubscription = {
  onCreatePlatform:  {
    __typename: "Platform",
    id: string,
    name: string | null,
    url: string | null,
  } | null,
};

export type OnUpdatePlatformSubscription = {
  onUpdatePlatform:  {
    __typename: "Platform",
    id: string,
    name: string | null,
    url: string | null,
  } | null,
};

export type OnDeletePlatformSubscription = {
  onDeletePlatform:  {
    __typename: "Platform",
    id: string,
    name: string | null,
    url: string | null,
  } | null,
};

export type OnCreateReviewSubscription = {
  onCreateReview:  {
    __typename: "Review",
    likes: number | null,
    views: number | null,
    content: string | null,
    id: string | null,
    introduction: string | null,
  } | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview:  {
    __typename: "Review",
    likes: number | null,
    views: number | null,
    content: string | null,
    id: string | null,
    introduction: string | null,
  } | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview:  {
    __typename: "Review",
    likes: number | null,
    views: number | null,
    content: string | null,
    id: string | null,
    introduction: string | null,
  } | null,
};

export type OnCreateAchievementSubscription = {
  onCreateAchievement:  {
    __typename: "Achievement",
    id: string,
    name: string | null,
    description: string | null,
  } | null,
};

export type OnUpdateAchievementSubscription = {
  onUpdateAchievement:  {
    __typename: "Achievement",
    id: string,
    name: string | null,
    description: string | null,
  } | null,
};

export type OnDeleteAchievementSubscription = {
  onDeleteAchievement:  {
    __typename: "Achievement",
    id: string,
    name: string | null,
    description: string | null,
  } | null,
};
