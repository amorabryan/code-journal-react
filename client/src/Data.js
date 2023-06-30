import EntryForm from "./EntryForm";
import { useState } from "react";

export default function Data() {
  const [data, setData] = useState({
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
})
  return (
    <div>
      <EntryForm data={data}/>
    </div>
  )
}

window.addEventListener('beforeunload', function (event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('code-journal-data', dataJSON);
});

const localData = JSON.parse(localStorage.getItem('code-journal-data'));
if (localData) {
  data = localData;
}
