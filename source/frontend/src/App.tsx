// import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "@container/header/header.tsx";
import Home from "@container/home/home.tsx";
import FooterContainer from "@container/footer/footer.tsx";
import Create from "@container/create/create.tsx";

function App() {

    return (
        <div className={"App"}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={"*"} element={<Home/>}/>
                    <Route path={"/create"} element={<Create/>}/>
                </Routes>
                <FooterContainer />
            </BrowserRouter>
        </div>
    )
}

export default App
