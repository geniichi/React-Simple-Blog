import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Home/Homepage.js';
import Postpage from './Components/Post/Postpage.js';
import Createpage from './Components/Create/Createpage.js';
import Header from './Components/Shared/Header/Header.js';
import Footer from './Components/Shared/Footer/Footer.js';
import Viewpage from './Components/View/Viewpage.js';

import { useState, useEffect} from 'react';

function App() {
  const [feed, setFeed] = useState(() => {
    const storedFeed = JSON.parse(localStorage.getItem('feed'));
    return storedFeed || [
    {
      id: 1,
      title: "Am i proficient in React or is this just a dunning-kruger effect",
      content: "I pretty much know all about react coming from watching youtube videos and actually coding along, of course my KodeGo bootcamp also helped me, but in terms of deliverance, youtube has been very helpful, but when i  actually code, I foten get confused on my actual code since when i progress further, more and more terms are needed to memorize and what actually did i write in my code. That being said, studying react might be easy, but having to implement those are actually confusing at times."
    },
    {
      id: 2,
      title: "I always attend to my classes but my peers think i don't since i dont really speak out in discussions",
      content: "From the title suggests, I always attend my classes at around 7:00 pm to 9:00 pm, although being an anti-socail person keeps me from communicating with my teacher and my peers as I normally just listen to the discussion and even avoid being called out too, but I guess its not that good to be labeled as someone who doesn't go to classes since i'm usually silent in class.That being said, these past few days have been quite tiresome as my asthma rapidly worsen to the point where I wasn't allowed to my actual school and stayed home, and maybe that kind of changed my interaction here in the KodeGo bootcamp as I was absent on tuesday."
    }
  ]
});

  const [post, setPost] = useState(feed)

  const saveToLocalStorage = (feed) => {
    localStorage.setItem('feed', JSON.stringify(feed));
  }

  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredFeed = feed.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setPost(filteredFeed);
    saveToLocalStorage(feed);
  }, [feed, search]);

  return (
    <div>
      <Header search={search} setSearch={setSearch} feed={feed}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage feed={feed} setFeed={setFeed} />}/>
        <Route path="/post" element={<Postpage feed={post} setFeed={setFeed}/>} />
        <Route path="/view/:id" element={<Viewpage feed={feed} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
