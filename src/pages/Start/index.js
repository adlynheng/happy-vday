import "./Start.css";

const Start = (props) => {
  const { setNextPage } = props;
  const handleClickHeart = () => {
    setNextPage(true);
  };

  return (
    <header className="App-header">
      <div className="typewriter">
        <h3>Hello Sean</h3>
        <h3>This vday gift is from your GF</h3>
        <h3>Me, Adlyn 😗</h3>
        <button className="start-button" onClick={handleClickHeart}>
          <div className="left"></div>
          <div className="right"></div>
          <div className="content">
            <span>Click to continue</span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Start;
