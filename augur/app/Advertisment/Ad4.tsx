import React from "react";
import NextImage from "next/image";
import Image from "../asset/ga.png";

interface Ad4Styles {
  wrapper: React.CSSProperties;
  messageBlock: React.CSSProperties;
  title: React.CSSProperties;
  subtitle: React.CSSProperties;
  body: React.CSSProperties;
  imageBlock: React.CSSProperties;
  image: React.CSSProperties;
}

const Ad4: React.FC = () => {
  const styles: Ad4Styles = {
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
    },
    image: {
      width: "100%",
      height: "auto",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.messageBlock}>
        <h1 style={styles.title}>Guaranteed payouts</h1>
        <p style={styles.body}>
          Augur is powered by Ethereum, which enables payouts to run as an
          automated process that no person or organisation, including Augur, can
          interfere with.
        </p>
      </div>
      <div style={styles.imageBlock}>
        <NextImage src={Image} alt="Logo" width={300} height={300} />
      </div>
    </div>
  );
};

export default Ad4;
