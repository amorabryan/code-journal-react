import './Layout.css';
import './Reset.css';
import './Styles.css';
import Data from'./Data';


function App() {
  return (
    <div>
      <header className="header purple-background">
        <div className="container">
          <div className="row">
            <div className="column-full d-flex align-center">
              <h1 className="white-text">Code Journal</h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Data />
      </main>
    </div>
  );
}

export default App;
