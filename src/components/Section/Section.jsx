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

import  { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Section.css";

function Section({ title, fetchUrl, isGrid }) {
  const [albums, setAlbums] = useState([]);
  const [expanded, setExpanded] = useState(false);

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
    </div>
  );
}

export default Section;

