import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';
import { getProjectQuery } from '../../queries/queries';
import SingleProject from '../../components/SingleProject';
import { useDispatch, useSelector } from 'react-redux';
import { getProject } from './singleProjectActions';
import { useParams } from 'react-router-dom';

function ProjectPage() {
    const { projectSlug } = useParams();
    const { loading, data } = useQuery(getProjectQuery, {
        variables: { slug: projectSlug }
    });
    const dispatch = useDispatch();
    const project = useSelector((state) => state.project);
    
    
    useEffect(() => {
        if (loading) return;
        dispatch(getProject(data.project));
    }, [loading, dispatch, data]);


    return(
        <>
        {
            loading ? 
            <h1>Loading...</h1>
            :
            <SingleProject data={project}/>
        }
        
        </>
    )
}


export default ProjectPage;