/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Wrapper from './modules/Wrapper/WrapperContainer';
import AddGuide from './modules/AddGuide/AddGuide';
import Guides from './modules/Guides/Guides';
import GuideDetailPage from './modules/Guides/GuideDetailPage';
import PopularGuides from './modules/Guides/PopularGuidesContainer';
import Menu from './modules/Menu/Menu';
import Maps from './modules/Maps/MapsContainer';


// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  
	require('./modules/AddGuide/AddGuide');
	require('./modules/Wrapper/WrapperContainer');
  require('./modules/Menu/Menu');
	require('./modules/Maps/MapsContainer');
	require('./modules/Guides/PopularGuidesContainer');
  require('./modules/Guides/GuideDetailPage')
  }


// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component = { Menu }>
    <Route
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Menu/Menu').default);
        });
      }}
    />
    <Route
      path="/addguide" component = { AddGuide }
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/AddGuide/AddGuide').default);
        });
      }}
    /><Route
      path="/maps" component = { Maps }
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Maps/MapsContainer').default);
        });
      }}
    />
	<Route
      path="/guides" component = { Wrapper }
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Wrapper/WrapperContainer').default);
        });
      }}
    />
	<Route
      path="/popularguides" component = { PopularGuides }
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Guides/PopularGuidesContainer').default);
        });
      }}
    /><Route
      path="/guides/:id" component = { GuideDetailPage }
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Guides/GuideDetailPage').default);
        });
      }}
    />
  </Route>
);
