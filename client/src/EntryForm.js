import { useState } from 'react';

export default function EntryForm() {
  const [photoRender, setPhotoRender] = useState('');
  if (photoRender === '') {
    setPhotoRender('../images/placeholder-image.square.jpg');
  }

  return (
    <div className="container" data-view="entry-form">
      <div className="row">
        <div className="column-full d-flex justify-between">
          <h1 id="formH1">New Entry</h1>
        </div>
      </div>
      <form id="entryForm">
        <div className="row margin-bottom-1">
          <div className="column-half">
            <img
              className="input-b-radius form-image"
              id="formImage"
              src={photoRender}
              alt="entry"
            />
          </div>
          <div className="column-half">
            <EntryTitle />
            <PhotoUrl onChange={setPhotoRender} />
          </div>
        </div>
        <div className="row margin-bottom-1">
          <div className="column-full">
            <EntryNotes />
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
            <SaveButton />
          </div>
        </div>
      </form>
    </div>
  );
}

function EntryTitle() {
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
        onChange={props.onChange((e) => e.target.value)}
      />
    </>
  );
}

function EntryNotes() {
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
        rows="10"></textarea>
    </>
  );
}

function SaveButton() {
  return (
    <button className="input-b-radius text-padding purple-background white-text">
      SAVE
    </button>
  );
}
