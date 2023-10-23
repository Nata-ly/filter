export const ProjectList = (projects) => {
  const state = projects

  return (
    <>
      {state.projects.map(project => (
        <img src={project.img} />
      ))}
    </>
  )
}
