class RickAndMorty {

  static getEpisodes() {
    return fetch('https://rickandmortyapi.com/api/episode')
      .then((response) => response.json())
      .then((dataJson) => dataJson.results)
      .then((episodesList) => {
        return episodesList.map(async (episode) => {
          const promisesList = episode.characters.slice(0, 10).map((characterUrl) => {
            return fetch(characterUrl)
              .then((response) => response.json())
          })

          episode.characters = await Promise.all(promisesList)

          return episode
        })
      })
  }
}

export default RickAndMorty