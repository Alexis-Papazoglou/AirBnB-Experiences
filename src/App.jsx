import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Card from './components/Card'
import data from './data'

function App() {

    const Cards = data.map((item) => {
        return(
            <Card
                key = {item.id}
                item = {item}
            />
        )
    })


    return(
        <>
            <Navbar/>
            <MainContent/>
            <section className='cards-list'>
                {Cards}
            </section>
        </>
    )
}

//
export default App
