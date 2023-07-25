import { useEffect, useState } from 'react'
import './App.css'
import RickAndMorty from './services/RickAndMorty';

function App() {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    RickAndMorty.getEpisodes()
      .then(async (episodesListPromises) => {
        const episodesList = await Promise.all(episodesListPromises)
        setEpisodes(episodesList)
      })
  }, [])
  return (
    <>
      <main>
        {episodes.map((episode) => (
          <article className='article' key={`episode ${episode.id}`}> 
            <h2>
              {episode.name} - {episode.episode}
            </h2>
            <h3>
              {episode.air_date}
            </h3>
            <h3>
              Characters:
            </h3>
            <ul>
              {episode.characters.map((character)=> (
                <li key={`character-${character.id}`}>
                  {character.name} - {character.species}
                </li>
              ) )}
            </ul>
          </article>
        ))}
      </main>
    </>
  )
}

export default App
