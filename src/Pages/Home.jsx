import React from 'react'
import { Content } from '../components/Content'
import { Sidebar } from '../components/Sidebar'

export const Home = () => {
    return (
        <section className="container">
        <Sidebar/>
        <Content/>
        </section>
    )
}
