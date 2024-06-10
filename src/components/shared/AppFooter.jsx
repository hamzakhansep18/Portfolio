import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiYoutube,
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/hamzakhansep18',
	},
	{
		id: 3,
		icon: <FiTwitter />,
		url: 'https://twitter.com/',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/hamza-khan-88239a195/',
	},
	{
		id: 5,
		icon: <FiYoutube />,
		url: 'https://www.youtube.com/channel/UCluSR96JBpqTKJ_XxBcC2ow',
	},
];

const AppFooter = () => {
	return (
		<div className="lg:container lg:max-auto drop-shadow-xl">
			<div className="pt-10 sm:pt-15 pb-4 mt-10 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-6 sm:mb-14">
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;
