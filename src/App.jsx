import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogsDetail = lazy(() => import('./pages/BlogsDetail'));
const Works = lazy(() => import('./pages/Works'));
const WorksDetail = lazy(() => import('./pages/WorksDetail'));
import Banner from './components/Banner';
import Footer from './components/Footer';
import UpButton from './components/UpButton';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='text-center'>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogsDetail />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:id" element={<WorksDetail />} />
      </Routes>
      </Suspense>
      <Banner />
      <Footer />
      <UpButton />
    </BrowserRouter>
  );
};

export default App;