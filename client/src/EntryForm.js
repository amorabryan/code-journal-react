import { useState } from 'react';
import placeHolderImage from './images/placeholder-image-square.jpg';

export default function EntryForm(props) {
  const [imageRender, setImageRender] = useState(placeHolderImage);
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle('');
    setNotes('');
    setImageRender(placeHolderImage);
  }

  return (
    <div className="container" data-view="entry-form">
      <div className="row">
        <div className="column-full d-flex justify-between">
          <h1 id="formH1">New Entry</h1>
        </div>
      </div>
      <form id="entryForm" onSubmit={handleSubmit}>
        <div className="row margin-bottom-1">
          <div className="column-half">
            <img
              className="input-b-radius form-image"
              id="formImage"
              src={imageRender === '' ? placeHolderImage : imageRender}
              alt="entry"
            />
          </div>
          <div className="column-half">
            <EntryTitle onChange={setTitle} />
            <PhotoUrl onChange={setImageRender} />
          </div>
        </div>
        <div className="row margin-bottom-1">
          <div className="column-full">
            <EntryNotes onChange={setNotes} />
          </div>
        </div>
        <div className="row">
          <div className="column-full d-flex justify-between">
            <button
              className="invisible delete-entry-button"
              type="button"
              id="deleteEntry">
              Delete Entry
            </button>
            <SaveButton image={imageRender} title={title} notes={notes} data={props.data}/>
          </div>
        </div>
      </form>
    </div>
  );
}

function EntryTitle(props) {
  return (
    <>
      <label className="margin-bottom-1 d-block" for="title">
        Title
      </label>
      <input
        required
        className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
        type="text"
        id="formTitle"
        name="formTitle"
        onChange={(e) => props.onChange(e.target.value)}
      />
    </>
  );
}

function PhotoUrl(props) {
  return (
    <>
      <label className="margin-bottom-1 d-block" for="photoUrk">
        Photo URL
      </label>
      <input
        required
        className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
        type="text"
        id="formURL"
        name="formURL"
        onChange={(e) => props.onChange(e.target.value)}
      />
    </>
  );
}

function EntryNotes(props) {
  return (
    <>
      <label className="margin-bottom-1 d-block" for="formNotes">
        Notes
      </label>
      <textarea
        required
        className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
        name="formNotes"
        id="formNotes"
        cols="30"
        rows="10"
        onChange={(e) => props.onChange(e.target.value)}></textarea>
    </>
  );
}

function SaveButton(props) {
  let entry = {
    title: props.title,
    url: props.image,
    notes: props.notes,
  };

  console.log(entry);

  const dataLog = (entry) => props.data.entries.push(entry);
  return (
    <button className="input-b-radius text-padding purple-background white-text" onClick={dataLog}>
      SAVE
    </button>
  );
}
