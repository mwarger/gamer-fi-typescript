// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateImage = `subscription OnCreateImage {
  onCreateImage {
    id
    url
    width
    height
    cloudinary_id
  }
}
`;
export const onUpdateImage = `subscription OnUpdateImage {
  onUpdateImage {
    id
    url
    width
    height
    cloudinary_id
  }
}
`;
export const onDeleteImage = `subscription OnDeleteImage {
  onDeleteImage {
    id
    url
    width
    height
    cloudinary_id
  }
}
`;
export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
export const onCreatePlatform = `subscription OnCreatePlatform {
  onCreatePlatform {
    id
    name
    url
  }
}
`;
export const onUpdatePlatform = `subscription OnUpdatePlatform {
  onUpdatePlatform {
    id
    name
    url
  }
}
`;
export const onDeletePlatform = `subscription OnDeletePlatform {
  onDeletePlatform {
    id
    name
    url
  }
}
`;
export const onCreateReview = `subscription OnCreateReview {
  onCreateReview {
    likes
    views
    content
    id
    introduction
  }
}
`;
export const onUpdateReview = `subscription OnUpdateReview {
  onUpdateReview {
    likes
    views
    content
    id
    introduction
  }
}
`;
export const onDeleteReview = `subscription OnDeleteReview {
  onDeleteReview {
    likes
    views
    content
    id
    introduction
  }
}
`;
export const onCreateAchievement = `subscription OnCreateAchievement {
  onCreateAchievement {
    id
    name
    description
  }
}
`;
export const onUpdateAchievement = `subscription OnUpdateAchievement {
  onUpdateAchievement {
    id
    name
    description
  }
}
`;
export const onDeleteAchievement = `subscription OnDeleteAchievement {
  onDeleteAchievement {
    id
    name
    description
  }
}
`;
