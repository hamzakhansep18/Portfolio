// Import images
import Image1 from '../images/Screenshot (131).png';
import Image2 from '../images/Screenshot (132).png';
import Image3 from '../images/Screenshot (133).png';
import Image4 from '../images/Screenshot (147).png';
import Image5 from '../images/Screenshot (148).png';
import Image6 from '../images/Screenshot (149).png';
import Image7 from '../images/Screenshot (143).png';
import Image8 from '../images/Screenshot (144).png';
import Image9 from '../images/Screenshot (145).png';
import Image10 from '../images/Screenshot (134).png';
import Image11 from '../images/Screenshot (135).png';
import Image12 from '../images/Screenshot (137).png';
import Image13 from '../images/Screenshot (139).png';
import Image14 from '../images/Screenshot (140).png';
import Image15 from '../images/Screenshot (141).png';
// import Image16 from '../images/Screenshot (141).png';
// import Image17 from '../images/Screenshot (141).png';
// import Image18 from '../images/Screenshot (141).png';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Ecommerce Brand',
		category: 'Mern Stack Project',
		img: Image1,
		ProjectHeader: {
			title: 'Custom Brand - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'Mern stack / Full stack',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Custom Brand Project',
				img: Image1,
			},
			{
				id: 2,
				title: 'Custom Brand Project',
				img: Image2,
			},
			{
				id: 3,
				title: 'Custom Brand Project',
				img: Image3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Brand Ltd',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Ecommerce Development',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://github.com/hamzakhansep18',
				},
				{
					id: 4,
					title: 'Phone',
					details: '555 1234 567',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Develop a custom ecommerce platform to enhance user experience and increase sales.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'MongoDB',
						'Express.js',
						'React',
						'Node.js',
						'Bootstrap',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Integrating a seamless payment gateway and ensuring secure transactions.',
				},
				{
					id: 2,
					details:
						'Creating a responsive design that works well on both desktop and mobile devices.',
				},
				{
					id: 3,
					details:
						'Ensuring fast load times and smooth navigation across the platform.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/brand',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/brand',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/brand',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/company/brand',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/c/BrandChannel',
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: Image6,
				},
				{
					id: 2,
					title: 'Web Application',
					img: Image12,
				},
				{
					id: 3,
					title: 'UI Design',
					img: Image8,
				},
				{
					id: 4,
					title: 'Brand Mobile App',
					img: Image4,
				},
			],
		},
	},
	{
		id: 2,
		title: 'React JS Task',
		category: 'Frontend',
		img: Image2,
		ProjectHeader: {
			title: 'Todo App',
			publishDate: 'Aug 12, 2021',
			tags: 'React / Frontend',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Todo App',
				img: Image4,
			},
			{
				id: 2,
				title: 'Todo App',
				img: Image5,
			},
			{
				id: 3,
				title: 'Todo App',
				img: Image6,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Task Ltd',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Task Management Solutions',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://github.com/hamzakhansep18',
				},
				{
					id: 4,
					title: 'Phone',
					details: '555 9876 543',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Create a Todo app to store over daily routine actions.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['React', 'Redux', 'Tailwind', 'JavaScript'],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Implementing a user-friendly interface that is easy to navigate.',
				},
				{
					id: 2,
					details:
						'Enable the editing and deletion option.',
				},
				{
					id: 3,
					details:
						'Also integrating finish task action.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/task',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com',
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: Image3,
				},
				{
					id: 2,
					title: 'Web Application',
					img: Image6,
				},
				{
					id: 3,
					title: 'UI Design',
					img: Image9,
				},
				{
					id: 4,
					title: 'Task Mobile App',
					img: Image12,
				},
			],
		},
	},
	{
		id: 3,
		title: 'Project Management UI',
		category: 'UI/UX Design',
		img: Image1,
		ProjectHeader: {
			title: 'Project Management UI',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Image7,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Image8,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Image9,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 2,
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://github.com/hamzakhansep18',
				},
				{
					id: 4,
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React',
						'React-router-dom',
						'JavaScript',
						'TailwindCSS',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Portfolio: React-Redux Portfolio.This portfolio showcases my proficiency in building dynamic and interactive web applications using modern JavaScript libraries such as React and Redux. Leveraging the power of these technologies, I have created a sleek and responsive user interface to present my projects and skills effectively.Key Features',
				},
				{
					id: 2,
					details:
						'React Components: The portfolio is built using React, a popular JavaScript library for building user interfaces. Each section of the portfolio, from the header to the project display, is encapsulated within reusable and modular React components, enhancing maintainability and scalability.Redux State Management: Redux is employed for managing the applications state in a predictable and centralized manner. By implementing Redux, the portfolio ensures a smooth flow of data throughout the application, facilitating efficient state updates and rendering.Responsive Design: The portfolio is designed to be responsive, providing an optimal viewing experience across various devices and screen sizes. Utilizing responsive design techniques and media queries, the layout adapts seamlessly to desktops, tablets, and mobile devices.Project Showcase: A dedicated section is included to showcase my projects, allowing visitors to explore each projects details, technologies used, and GitHub repository links. Interactive features such as project filtering and sorting enhance the user experience, enabling easy navigation and discovery.Skills and Expertise: The portfolio highlights my skills and expertise in web development, including proficiency in HTML, CSS, JavaScript, React, Redux, and other relevant technologies. A concise yet comprehensive summary of my technical capabilities is provided, giving visitors insights into my professional background.',
				},
				
				
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/realstoman',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/realstoman',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/c/StomanStudio',
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: Image1,
				},
				{
					id: 2,
					title: 'Web Application',
					img: Image10,
				},
				{
					id: 3,
					title: 'UI Design',
					img: Image11,
				},
				{
					id: 4,
					title: 'Kabul Mobile App UI',
					img: Image7,
				},
			],
		},
	},
	{
		id: 4,
		title: 'Guess My Number',
		category: 'Frontend /Game',
		img: Image2,
		ProjectHeader: {
			title: 'Guess My Number',
			publishDate: 'Sep 15, 2021',
			tags: 'Frontend / Game',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Guess My Number',
				img: Image10,
			},
			{
				id: 2,
				title:'Guess My Number',
				img: Image11,
			},
			{
				id: 3,
				title: 'Guess My Number',
				img: Image12,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Cloud Ltd',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Cloud Storage Solutions',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://github.com/hamzakhansep18',
				},
				{
					id: 4,
					title: 'Phone',
					details: '555 1234 567',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Objective was simple to create a Game guess my number.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['HTML', 'CSS', 'JavaScript'],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						'User friendly Design.',
				},
				{
					id: 2,
					details:
						'Can play again option.',
				},
				{
					id: 3,
					details:
						'wining and lossing Message.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/cloud',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/cloud',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/cloud',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/company/cloud',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/c/CloudChannel',
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 1,
					title: 'Web Application',
					img: Image1,
				},
				{
					id: 2,
					title: 'Mobile Application',
					img: Image2,
				},
				{
					id: 3,
					title: 'Ecommerce Platform',
					img: Image5,
				},
				{
					id: 4,
					title: 'Cloud Storage Mobile App',
					img: Image4,
				},
			],
		},
	},
	{
		id: 5,
		title: 'Pig Game',
		category: 'Game',
		img: Image1,
		ProjectHeader: {
			title: 'Pig Game',
			publishDate: 'Oct 10, 2021',
			tags: 'Game / Frontend',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Pig Game',
				img: Image13,
			},
			{
				id: 2,
				title: 'Pig Game',
				img: Image14,
			},
			{
				id: 2,
				title: 'Pig Game',
				img: Image15,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Social Ltd',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Social Media Solutions',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://github.com/hamzakhansep18',
				},
				{
					id: 4,
					title: 'Phone',
					details: '555 6789 101',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Create a social media application with real-time features and a user-friendly interface.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['Html', 'css', 'Js'],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						'User Friendly.',
				},
				{
					id: 2,
					details:
						'Roll the dice option. calcute the total and store the score.',
				},
				{
					id: 3,
					details:
						'win and lose message.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/social',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/social',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/social',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/company/social',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/c/SocialChannel',
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: Image4,
				},
				{
					id: 2,
					title: 'Web Application',
					img: Image5,
				},
				{
					id: 3,
					title: 'UI Design',
					img: Image6,
				},
				{
					id: 4,
					title: 'Social Media App UI',
					img: Image1,
				},
			],
		},
	},
	{
		id: 6,
		title: 'Apple Design System',
		category: 'Web Application',
		img: Image2,
		ProjectHeader: {
			title: 'Apple Design System',
			publishDate: 'Nov 5, 2021',
			tags: 'Web Application / Frontend',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Apple Design System UI',
				img: Image1,
			},
			{
				id: 2,
				title: 'Apple Design System UI',
				img: Image2,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Apple Inc.',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Tech Solutions',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://apple.com',
				},
				{
					id: 4,
					title: 'Phone',
					details: '555 1234 123',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Develop a design system for Apple products to ensure consistency across various platforms.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['HTML', 'CSS', 'JavaScript', 'React', 'Sass'],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Ensuring seamless integration with existing Apple products.',
				},
				{
					id: 2,
					details:
						'Maintaining consistency in design and functionality.',
				},
				{
					id: 3,
					details:
						'Providing a flexible and scalable design system.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/company',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com',
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 1,
					title: 'Web Application',
					img: Image6,
				},
				{
					id: 2,
					title: 'Mobile Application',
					img: Image5,
				},
				{
					id: 3,
					title: 'Ecommerce Platform',
					img: Image4,
				},
				{
					id: 4,
					title: 'Apple Mobile App UI',
					img: Image3,
				},
			],
		},
	},
];
