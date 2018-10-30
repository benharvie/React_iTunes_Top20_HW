import React from 'react';
import Song from './Song'

const SongList = (props) => {
  const songs = props.songs.map((song) => {
    console.log(song);
    const songName = song["im:name"]["label"]
    const artistName = song["im:artist"]["label"]
    return <li>{songName} - {artistName}</li>
  })

  return (
    <div>
      <p>SongList</p>
        <ul>
          {songs}
        </ul>
      <Song />
    </div>
  )
}

export default SongList
