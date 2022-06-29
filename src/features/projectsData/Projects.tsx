import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';
import { getProjectsQuery } from '../../queries/queries';
import ProjectList from '../../components/ProjectList/ProjectList';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from './projectsActions';

function ProjectsPage() {
    const { loading, data } = useQuery(getProjectsQuery);
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects);
    
    useEffect(() => {
        if (loading) return;
        dispatch(getProjects(data));
    }, [loading, dispatch, data]);

    return(
        <>
        {
            loading ? 
            <h1>Loading...</h1>
            :
            <ProjectList data={projects}/>
        }
        
        </>
    )
}


export default ProjectsPage;