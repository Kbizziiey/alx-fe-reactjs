import WelcomeMessage from "./components/WelcomeMessage"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import UserProfile from "./components/UserProfile"
import { useState } from "react";

function App() {
  return (
    <>
      <WelcomeMessage />
      <Header /> 
      <MainContent />
      <Footer />
      <UserProfile name="Karabo" age="23" bio="Software developer" />
    </>
  )
}

export default App
