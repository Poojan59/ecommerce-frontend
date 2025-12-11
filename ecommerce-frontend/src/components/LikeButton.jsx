import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button 
      onClick={() => setLiked(!liked)}
      style={{
        padding: "10px 20px",
        background: liked ? "red" : "#cd3434ff",
        color: liked ? "red" : "red",
        borderRadius: "8px",
        cursor: "pointer"
      }}
    >
      {liked ? "❤️ Liked" : "♡ Like"}
    </button>
  );
}
