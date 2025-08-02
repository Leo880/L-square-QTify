/*import styles from "./Section.module.css";
import Card from "../Card/Card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Section({ title, fetchUrl }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((res) => {
      setAlbums(res.data);
    });
  }, [fetchUrl]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <button className={styles.collapseBtn}>Collapse</button>
      </div>

      <div className={styles.grid}>
        {albums.map((album) => (
          <Card
            key={album.id}
            image={album.image}
            follows={album.follows}
            title={album.title}
          />
        ))}
      </div>
    </div>
  );
}*/

/*import  { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Section.css";

function Section({ title, fetchUrl, isGrid }) {
  const [albums, setAlbums] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
  fetch(fetchUrl)
    .then((res) => res.json())
    .then((data) => setAlbums(data))
    .catch((err) => {
      console.error("Failed to fetch albums", err);
      setAlbums([]); // Fallback to empty list
    });
}, [fetchUrl]);


  const albumsToShow = expanded || !isGrid ? albums : albums.slice(0, 6);

  return (
    <div className="section">
      <div className="section-header">
        <h2>{title}</h2>
        {isGrid && (
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      <div className={`section-content ${isGrid ? "grid" : "scroll"}`}>
        {albumsToShow.map((album) => (
          <Card
            key={album.id}
            image={album.image}
            title={album.title}
            follows={album.follows}
          />
        ))}
      </div>
      <Button onClick={() => setShowAll(!showAll)}>
  {showAll ? 'Show All' : 'Collapse'}
</Button>

{showAll ? (
  <Carousel data={albums} renderComponent={(album) => <Card album={album} />} />
) : (
  <Grid data={albums} />
)}
    </div>
  );
}*/

//export default Section;



import { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs, Tab } from '@mui/material';
import Carousel from '../Module3/Carousel';
import AlbumCard from './AlbumCard';
import './Tabs.css';

function Section({ title, apiUrl, isSong }) {
  const [items, setItems] = useState([]);
  const [showCarousel, setShowCarousel] = useState(isSong);
  const [genres, setGenres] = useState([{ key: 'all', label: 'All' }]);
  const [selectedGenre, setSelectedGenre] = useState('all');

  useEffect(() => {
    if (isSong) {
      axios.get('https://qtify-backend-labs.crio.do/genres')
        .then(response => {
          setGenres([{ key: 'all', label: 'All' }, ...response.data.data]);
        })
        .catch(error => {
          console.error('Error fetching genres:', error);
        });
    }
  }, [isSong]);

  // Fetch items (albums or songs)
  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error(`Error fetching ${title} data:`, error);
      });
  }, [apiUrl, title]);
  const handleGenreChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredItems = selectedGenre === 'all'
    ? items
    : items.filter(item => item.genre?.key === selectedGenre);

  const renderContent = () => {
    const data = filteredItems.length > 0
      ? filteredItems
      : [{ id: 'dummy', image: 'https://via.placeholder.com/200', title: 'Dummy Item', follows: 1000, likes: 1000 }];

    return (
      <Carousel
        items={data}
        renderItem={(item) => (
          <AlbumCard
            image={item.image}
            title={item.title}
            follows={item.follows}
            likes={item.likes}
            isSong={isSong}
          />
        )}
      />
    );
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold font-poppins">{title}</h2>
        {!isSong && (
          <button
            className="text-green-500 font-poppins hover:underline"
            onClick={() => setShowCarousel(!showCarousel)}
          >
            {showCarousel ? 'Show All' : 'Collapse'}
          </button>
        )}
      </div>
      {isSong && (
        <Tabs
          value={selectedGenre}
          onChange={handleGenreChange}
          className="custom-tabs mb-4"
          variant="scrollable"
          scrollButtons="auto"
        >
          {genres.map(genre => (
            <Tab key={genre.key} label={genre.label} value={genre.key} />
          ))}
        </Tabs>
      )}
      {showCarousel ? (
        renderContent()
      ) : (
        <div className="flex flex-wrap gap-4">
          {items.length > 0 ? (
            items.map(item => (
              <AlbumCard
                key={item.id}
                image={item.image}
                title={item.title}
                follows={item.follows}
                isSong={isSong}
              />
            ))
          ) : (
            <AlbumCard
              image="https://via.placeholder.com/200"
              title="Dummy Item"
              follows={1000}
              isSong={isSong}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Section;









