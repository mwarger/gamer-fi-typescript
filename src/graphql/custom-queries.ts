export const gameFragment = `fragment game on Game {
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
  }`;

export const popularGames = `query customPopularGames {
    popularGames {
      ...game
    }
  }
  ${gameFragment}
  `;
