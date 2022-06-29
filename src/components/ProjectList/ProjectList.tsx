import React from "react";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import useStyles from "./ProjectList.styles";

function ProjectList({ data }) {
  const classes = useStyles();
  if (!data) return null;
  console.log(data);

  const { projects } = data.data;

  let projectCardComponents = (projects || []).map((project) => (
    <ProjectCard
      key={project.id}
      id={project.id}
      title={project.title}
      summary={project.summary}
      slug={project.slug}
      image={project.images.find((image) => image.category === "thumbnail")}
    />
  ));

  return (
    <Grid
      container
      className={classes.container}
      direction="row"
      component="ul"
      spacing={{ xs: 2, md: 3 }}
      wrap="nowrap"
    >
      {projectCardComponents}
    </Grid>
  );
}

export default ProjectList;
