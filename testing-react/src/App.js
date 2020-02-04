import React from 'react';
import Header from './components/header/Header';
import HeadLine from './components/Headline/Headline';
import { BrowserRouter } from "react-router-dom";

const typesArray = [
  {
    money: { cash: 2000 },
    present: true,
    level: 5,
    name: "Human"
  }
];

const App = () => (
  <BrowserRouter>
        <Header />
        <HeadLine 
          title="Post" 
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Fugit doloremque dolorem vero error a, quam aperiam voluptatibus? 
            Unde, dolorum. Corrupti error d ignissimos libero rerum, dolorem natus 
            ipsa sapiente ex earum!"
          myArray={typesArray}
        />
    </BrowserRouter>
  );

export default App;
