import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { useParams } from 'react-router-dom';

const ProjectGallery = () => {
    const { projectId } = useParams();
	const { singleProjectData } = useContext(SingleProjectContext);
    const project = singleProjectData.find(
        (project) => project.id === parseInt(projectId)
      );

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{project.ProjectImages.map((item) => {
				return (
					<div className="mb-10 sm:mb-0" key={item.id}>
						<img
							src={item.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={item.title}
							key={item.id}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
