import React, { useState } from 'react';
import { Route } from "react-router-dom";
import MovieList from "./Movies/MovieList";

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" />

      <div>Replace this Div with your Routes</div>
    </div>
  );
};

export default App;
