import React, { useState } from 'react';
import Header from './components/Header'
import './App.css';
import bartimg from './assets/bart.png'

function App(){
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end Web']);

    function handleAddProject(){
        //projects.push(`novo projeto ${Date.now()}`);

        setProjects([...projects, `novo projeto ${Date.now()}`]);

        console.log(projects);
    }

    return(
        <>
        <Header title="Projects"/>

        <img width={300} src={bartimg} alt=""/>

        <ul>
            {projects.map(projects => <h1 key={projects}>{projects}</h1>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>

        </>
    );
};

export default App;