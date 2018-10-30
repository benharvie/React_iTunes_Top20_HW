import React from 'react';
import Song from './Song'

const SongList = (props) => {
  const songs = props.songs.map((song) => {
    console.log(song);
    const songName = song["im:name"]["label"]
    const artistName = song["im:artist"]["label"]
    return <li key={song["id"]["attributes"]["im:id"]}>{songName} - {artistName}</li>
  })

  return (
    <div>
      <ul>
        {songs}
      </ul>
    </div>
  )
}

export default SongList
