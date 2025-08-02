/*import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

export default function Card() {
  return (
    <div className={styles.card}>
      <img
        src="https://via.placeholder.com/150"
        alt="Album"
        className={styles.albumImage}
      />
      <div className={styles.cardFooter}>
        <Chip label="120 Follows" />
        <p className={styles.albumTitle}>Album Name</p>
      </div>
    </div>
  );
}
*/


//import React from "react";


/*import Chip from "@mui/material/Chip";
import "./Card.css";

function Card({ image, title, follows }) {
  return (
    <div className="card">
      <img src={image} alt={title || "album cover"} className="card-img" />
      <div className="card-footer">
        <Chip
          label={`${follows} Follows`}
          size="small"
          color="success"
          sx={{
            fontSize: "0.7rem",
            fontWeight: "bold",
            height: "24px",
            borderRadius: "4px",
          }}
        />
        <div className="title">{title}</div>
      </div>
    </div>
  );
}

export default Card;
*/


//import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';
import './AlbumCard.module.css';

function AlbumCard({ image, title, follows, likes, isSong = false }) {
  return (
    <Card sx={{ maxWidth: 200, width: '100%', boxShadow: 3 }}>
      <CardMedia
        component="img"
        sx={{ height: 120, objectFit: 'cover' }}
        image={image}
        alt={title}
      />
      <CardContent sx={{ padding: '8px', height: 60 }}>
        <Typography variant="subtitle1" noWrap>
          {title}
        </Typography>
        <Chip
          label={isSong ? `${likes} Likes` : `${follows} Follows`}
          size="small"
          className="album-chip"
        />
      </CardContent>
    </Card>
  );
}

export default AlbumCard;












