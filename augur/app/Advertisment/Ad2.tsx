import React from "react";
import NextImage from "next/image";
import Image from "../asset/lw.png";

interface Ad2Styles {
  wrapper: React.CSSProperties;
  messageBlock: React.CSSProperties;
  title: React.CSSProperties;
  subtitle: React.CSSProperties;
  body: React.CSSProperties;
  imageBlock: React.CSSProperties;
  image: React.CSSProperties;
}

const Ad2: React.FC = () => {
  const styles: Ad2Styles = {
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
    <div className="bg-customColor">
      <div style={styles.wrapper}>
        <div style={styles.messageBlock}>
          <h1 style={styles.title}>The best odds & the lowest fees.</h1>
          <p style={styles.body}>
            Users keep more of their winnings than any other exchange through
            low fees and the best odds. Augur doesn’t take a cut.
            <br />
            "Augur is a substitute for betting platforms that charge high fees,
            ban winners, delay withdrawals, freeze accounts, aren't globally
            accessible, lack privacy, and don't let you sell your bet mid-game."
          </p>
        </div>
        <div style={styles.imageBlock}>
          <NextImage src={Image} alt="Logo" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Ad2;
