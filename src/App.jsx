import Navbar from "./components/Navbar";
import NewLaunches from "./components/NewLaunches";
import IITCertification from "./components/IITCertification";
import CoursesSection from "./components/CoursesSection";
import LearningModel from "./components/LearningModel";
import HeroSection from "./components/HeroSection";
import Comparisionsection from "./components/ComparisionSection";
import Companies from "./components/Companies";
import Stories from "./components/Stories";
import Mentorship from "./components/MentorshipSection";
import LearningSession from "./components/LearningByDoing";
import FacultySection from "./components/FacultySection";
import TopratedCourses from "./components/TopratedCourses";
import StudentSuccess from "./components/Student Success";
import CodingContest from "./components/CodingContest";

import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <CoursesSection />
      <IITCertification />
      <NewLaunches />
      <HeroSection />
      <Comparisionsection />
      <Companies />
      <Stories />
      <LearningModel />
      <Mentorship />
      <LearningSession />
      <FacultySection />
      <TopratedCourses />
      <StudentSuccess />
      <CodingContest />
      <Footer />
    </>
  );
}

export default App;