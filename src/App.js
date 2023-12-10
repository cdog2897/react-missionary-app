import React, { useEffect, useState } from "react";
import CardList from './CardList';
import './App.css';
import dataSource from "./dataSource";
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import NavBar from "./NavBar";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dataSource.get('/posts');
        setCards(response.data);
      } catch(error) {
        console.error("error fetching data: ", error);
      }
    };

    fetchData();

  }, []);

  const EditPage = () => {
    const { postId } = useParams();
    console.log(postId);
    const id = parseInt(postId, 10);
    return <EditForm postId={id}/>
  }


  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <CardList cards={cards}/>
          }
        />
        <Route
          exact
          path="/create"
          element={
            <CreateForm/>
          }
        />
        <Route
          exact
          path="/delete/:postId"
          element={
            <CardList cards={cards} />
          }
        />
        <Route
          exact
          path="/edit/:postId"
          element={
            <EditPage/>
          }
        />
      </Routes>
    </BrowserRouter>
  );


}

export default App;