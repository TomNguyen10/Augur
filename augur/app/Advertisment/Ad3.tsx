import React from "react";
import Image from "../asset/ga.png";
import NextImage from "next/image";

interface Ad3Styles {
  wrapper: React.CSSProperties;
  messageBlock: React.CSSProperties;
  title: React.CSSProperties;
  subtitle: React.CSSProperties;
  body: React.CSSProperties;
  imageBlock: React.CSSProperties;
}

const Ad3: React.FC = () => {
  const styles: Ad3Styles = {
    wrapper: {
      display: "flex",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "2rem",
    },
    messageBlock: {
      flex: 1,
      marginRight: "20px",
    },
    title: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    subtitle: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    imageBlock: {
      flex: 1,
      // Add any additional styles for the image block
    },
  };

  return (
    <div className="bg-white text-black">
      <div style={styles.wrapper}>
        <div style={styles.messageBlock}>
          <div style={styles.imageBlock}>
            <NextImage src={Image} alt="Logo" width={300} height={300} />
          </div>
        </div>
        <div style={styles.messageBlock}>
          <h1 style={styles.title} className="text-black">
            Global Access
          </h1>
          <p style={styles.body} className="text-black">
            Augur is a peer-to-peer, decentralized exchange, enabling universal
            and transparent access to its markets.
          </p>
          <h2 style={styles.subtitle}>
            "Augur is an open, global prediction market protocol that allows
            anyone to create a market for anything. There is no single entity
            that controls the protocol; it’s community-owned and operated."
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Ad3;
