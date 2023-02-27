import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Feed, VideoDetails, SearchFeed } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        {/* <Route path="/channel/:id" element={<ChannelDetails />} /> */}
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
