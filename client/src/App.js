import './Layout.css';
import './Reset.css';
import './Styles.css';
import EntryForm from './EntryForm';

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

window.addEventListener('beforeunload', function (event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('code-journal-data', dataJSON);
});

const localData = JSON.parse(localStorage.getItem('code-journal-data'));
if (localData) {
  data = localData;
}

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
        <EntryForm data={data} />
      </main>
    </div>
  );
}

export default App;
