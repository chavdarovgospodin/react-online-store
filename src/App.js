import React from 'react';
import NavigationItems from '../src/components/Navigation/NavigationItems/NavigationItems';
import { BrowserRouter} from 'react-router-dom';

const app = () => (
  <BrowserRouter>
    <NavigationItems/>
  </BrowserRouter>
)
export default app;
