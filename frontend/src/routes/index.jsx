import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import PDFCompressPage from '../pages/PDFCompressPage';

export const routes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/compress" element={<PDFCompressPage />} />
  </>
);

export const routeElements = createRoutesFromElements(routes);

export default createBrowserRouter(createRoutesFromElements(routes));
