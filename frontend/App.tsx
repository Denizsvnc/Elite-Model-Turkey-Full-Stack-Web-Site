import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import ApplicationForm from './src/pages/ApplicationForm';
import About from './src/pages/About';
import FAQ from './src/pages/FAQ';
import Contact from './src/pages/Contact';
import Success from './src/pages/Success';
import News from './src/pages/News';
import Home from './src/pages/Home';
import Women from './src/pages/Women';
import Men from './src/pages/Men';
import NewFaces from './src/pages/NewFaces';
import NewsDetail from './src/pages/NewsDetail';

// Admin imports
import Login from './src/admin/Login';
import AdminLayout from './src/admin/components/AdminLayout';
import Dashboard from './src/admin/pages/Dashboard';
import ProtectedRoute from './src/admin/components/ProtectedRoute';

import Sliders from './src/admin/pages/HomePage/Sliders';
import Featured from './src/admin/pages/HomePage/Featured';
import NewsAdmin from './src/admin/pages/HomePage/News';
import Latest from './src/admin/pages/SuccessPages/Latest';
import SuccesModel from './src/admin/pages/SuccessPages/SuccessModel';
import Hero from './src/admin/pages/AboutPages/Hero'; 
import Vision from './src/admin/pages/AboutPages/Vision';
import Mission from './src/admin/pages/AboutPages/Mission';
import ContactManagement from './src/admin/pages/ContactPages/ContactInfo';
import Messages from './src/admin/pages/ContactPages/Messages';
import FAQs from './src/admin/pages/FAQPages/Faq';
import Applications from './src/admin/pages/ApplicationsPages/Applications';
import Social from './src/admin/pages/SocialMedia/Social';
import Heroimg from './src/admin/pages/SuccessPages/Heroimg';
import NewsManagement from './src/admin/pages/NewsManagement';
import Setting from './src/admin/pages/SettingsPage/Setting';
import PendingApplications from './src/admin/pages/ApplicationsPages/PendingApplications';
import ApplicationsRejected from './src/admin/pages/ApplicationsPages/ApplicationsRejected';
import Kvkk from "./components/Kvkk";
import PrivacyPolicy from './components/PrivacyPolicy';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/basvuru" element={<Layout><ApplicationForm /></Layout>} />
        <Route path="/hakkimizda" element={<Layout><About /></Layout>} />
        <Route path="/sss" element={<Layout><FAQ /></Layout>} />
        <Route path="/iletisim" element={<Layout><Contact /></Layout>} />
        <Route path="/basarililar" element={<Layout><Success /></Layout>} />
        <Route path="/haberler" element={<Layout><News /></Layout>} />
        <Route path="/kadinlar" element={<Layout><Women /></Layout>} />
        <Route path="/erkekler" element={<Layout><Men /></Layout>} />
        <Route path="/yeni-yuzler" element={<Layout><NewFaces /></Layout>} />
        <Route path="/news/:id" element={<Layout><NewsDetail /></Layout>} />
        <Route path="/kvkk" element={<Layout><Kvkk /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sliders" element={<Sliders />} /> 
          <Route path="featured-items" element={<Featured />} /> 
          <Route path="news" element={<NewsAdmin />} /> 
          <Route path="success-model" element={<SuccesModel />} /> 
          <Route path="latest" element={<Latest />} /> 
          <Route path="heroimg" element={<Heroimg />} /> 

          <Route path="news-management" element={<NewsManagement />} /> 
          <Route path="about/hero" element={<Hero />} /> 
          <Route path="about/vision" element={<Vision />} /> 
          <Route path="about/mission" element={<Mission />} /> 
          <Route path="contact-info" element={<ContactManagement />} /> 
          <Route path="contact-messages" element={<Messages />} /> 
          <Route path="faqs" element={<FAQs />} /> 
          <Route path="applications" element={<Applications />} /> 
          <Route path="social-media" element={<Social />} /> 
          <Route path="cover-images" element={<Dashboard />} /> 
          <Route path="settings" element={<Setting />} /> 
          <Route path="applications/pending" element={<PendingApplications />} /> 
          <Route path="applications/rejected" element={<ApplicationsRejected />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;