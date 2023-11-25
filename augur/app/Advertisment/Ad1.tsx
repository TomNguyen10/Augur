import React from "react";

interface Ad1Styles {
  wrapper: React.CSSProperties;
  messageBlock: React.CSSProperties;
  title: React.CSSProperties;
  subtitle: React.CSSProperties;
  body: React.CSSProperties;
}

const Ad1: React.FC = () => {
  const styles: Ad1Styles = {
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
  };

  return (
    <div className="relative bg-customColor">
      <div style={styles.wrapper}>
        <div style={styles.messageBlock}>
          <h1 style={styles.title}>Betting today is broken & exploitative.</h1>
          <br />
          <br />
          <p style={styles.body}>
            Today`s betting Industry trades on promises of getting rich quick,
            using every trick in the book to extract the maximum value from
            customers.
            <br />
            <br />
            And at the same time, their best bettors are penalized by lowering
            their limits and closing their accounts.
          </p>
        </div>
        <div style={styles.messageBlock}>
          <h2 style={styles.subtitle}>
            "Blockchain-based prediction markets may be the one force strong
            enough to counterbalance the spread of incorrect information on
            social media. They give people a financial incentive to seek the
            truth and then protect them with the twin shields of pseudonymity
            and decentralization."
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Ad1;
