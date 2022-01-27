import {
	faCog,
	faHistory,
	faHome,
	faList,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useRouter } from 'next/router';

const SidebarLinks = [
	{
		display: 'Home',
		icon: faHome,
		link: '/',
	},
	{
		display: 'Portfolio',
		icon: faList,
		link: '/portfolio',
	},
	{
		display: 'History',
		icon: faHistory,
		link: '/history',
	},
	{
		display: 'Settings',
		icon: faCog,
		link: '/settings',
	},
];

const Sidebar = ({ className }: { className?: string }) => {
	//get current url using nextj router
	const router = useRouter();

	return (
		<nav className={classNames('bg-secondary-bg p-5 space-y-5', className)}>
			<h1 className='text-2xl'>
				<span className='text-primary-color'>Portfolio</span>
				<span>Tracker</span>
			</h1>
			<ul className='space-y-1'>
				{SidebarLinks.map((item, index) => {
					var isAtPath = router.pathname
						.toLowerCase()
						.endsWith(item.link.toLowerCase());

					return (
						<li key={index}>
							<a
								className={classNames(
									'flex-h-center space-x-4 px-3 py-2 rounded-lg font-medium',
									{
										'hover:bg-tertiary-bg hover:text-primary-text': !isAtPath,
										'bg-tertiary-bg text-primary-color': isAtPath,
									}
								)}
								href={item.link}
							>
								<FontAwesomeIcon
									icon={item.icon}
									className='w-5 h-5 leading-none'
								/>
								<span>{item.display}</span>
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Sidebar;
