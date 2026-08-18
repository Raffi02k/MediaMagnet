import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import ProcessPage from './pages/ProcessPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';

export default function App() {
  const isFileProtocol =
    typeof window !== 'undefined' &&
    (window.location.protocol === 'file:' ||
      Boolean((window as unknown as { __STANDALONE_PREVIEW__?: boolean }).__STANDALONE_PREVIEW__));
  const Router = isFileProtocol ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="index.html" element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="work/:slug" element={<ProjectDetailPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
