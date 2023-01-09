import React from "react";
import './Content.css'
import {Routes, Route} from "react-router-dom"

import Home from "../../views/examples/Home"
import About from "../../views/examples/About";
import Param from "../../views/examples/Param";
import NotFound from "../../views/examples/NotFound";

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/param/:id" element={<Param/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>

    </main>
)

/* a referencia * no path, significa que qualquer
link que não existe dentro das rotas e for colocado
irá para esse */

export default Content