import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from './store/session';
import { allItems } from './store/items';
import NavBar from './components/NavBar/index';
import MainSearch from './components/MainSearch/index';
import SearchResults from './components/SearchResults/index';
import ItemPage from './components/ItemPage/index';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  let slugs = [];
  dispatch(allItems()).then(items => slugs.push(...items));

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar user={user} />
      <Switch>
        <Route path='/' exact={true}>
          <MainSearch slugs={slugs} loaded={loaded} />
        </Route>
        <Route path='/items' exact={true}>
          <SearchResults />
        </Route>
        <Route path='/results' exact={true} loaded={loaded}>
          <SearchResults slugs={slugs} loaded={loaded} />
        </Route>
        <Route path='/items/:itemSlug' exact={true}>
          <ItemPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
