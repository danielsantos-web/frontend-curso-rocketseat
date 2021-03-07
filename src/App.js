import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import './App.css';
import api from './services/api.js'

function App(){
    const [projects, setProjects] = useState([]);

    useEffect(( ) => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, [] );

    async function handleAddProject(){
        //projects.push(`novo projeto ${Date.now()}`);
        //setProjects([...projects, `novo projeto ${Date.now()}`]);

        const response = await api.post('projects', {
            title: `novo projeto ${Date.now()}`,
            owner: 'daniel santos'
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return(
        <>
        <Header title="Projects"/>

        <ul>
            {projects.map(projects => <h1 key={projects.id}>{projects.title}</h1>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>

        </>
    );
};

export default App;