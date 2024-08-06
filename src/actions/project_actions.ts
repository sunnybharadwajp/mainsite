import { Projects } from '@/lib/collections';

const fetchProjects = async () => {
  const collection = await Projects;
  const projects = await collection
    .find({})
    .sort({ createdAt: -1 })
    .toArray();
  return projects;
};


export {
  fetchProjects
}