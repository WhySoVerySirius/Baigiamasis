import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './Layout';
import pages from './Pages/Pages';

export default function MainComponent() {
    return (
        <BrowserRouter>
            <Routes>
            {pages.map(page=>{
                return page.sub
                    ? <Route path={page.path} element={<Layout type={'multiple'}>{page.element}</Layout>}></Route>
                    : <Route path={page.path} element={<Layout type={'single'}>{page.element}</Layout>}/>
                })}
            </Routes>
        </BrowserRouter> 
    );
}

// export default Example;

if (document.getElementById('MainComponent')) {
    ReactDOM.render(<MainComponent/> , document.getElementById('MainComponent'));
}