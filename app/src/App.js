import React from "react";
import {Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LoadingPage from "./pages/LoadingPage";
import {useSelector} from "react-redux";

const App = () => {

    return (
        <Routes>
            <Route path="/loading" element={<LoadingPage/>}/>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
    );
}

export default App;
