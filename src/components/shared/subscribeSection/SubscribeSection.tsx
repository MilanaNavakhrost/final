import "./subscribeSection.css";

export const SubscribeSection = () => {
  return (
    <div className="subscribe-section">
      <h2 className="subscribe-title">Subscribe to newsletter</h2>
      <p className="subscribe-text">
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </p>
      <div className="subscribe-inp-btn">
        <input
          className="subscribe-input"
          type="email"
          placeholder="Your email"
        />
        <button className="subscribe-btn" type="submit">
          Subscribe
        </button>
      </div>
    </div>
  );
};
