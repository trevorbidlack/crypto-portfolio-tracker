import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import GeneralUtils from '../utils/general-utils';

const IndexPage = () => {
	const fakeValues = {
		dailyPl: GeneralUtils.getRandomDouble(500, 2000).toFixed(2),
		lifetimePl: GeneralUtils.getRandomDouble(-1500, 4500).toFixed(2),
		totalPortfolioUsd: GeneralUtils.addCommas(
			GeneralUtils.getRandomDouble(15000, 45000).toFixed(2)
		),
	};

	return (
		<>
			<Head>
				<title>Crypto Portfolio Tracker</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* <Header /> */}

			<main className='w-full min-h-screen grid grid-cols-12'>
				<Sidebar className='col-span-2' />
				<div className='col-span-10 px-[15%] py-6'>
					<h1>Welcome, user.</h1>
					<div className='w-full grid grid-cols-4 gap-5 mt-5'>
						<div className='p-5 rounded-lg bg-secondary-bg space-y-1'>
							<p className='uppercase text-base font-medium'>
								Total Portfolio (USD)
							</p>
							<h2>${fakeValues.totalPortfolioUsd}</h2>
						</div>
						<div className='p-5 rounded-lg bg-secondary-bg space-y-1'>
							<p className='uppercase text-base font-medium'>
								Daily Profit/Loss
							</p>
							<h2>
								{parseFloat(fakeValues.dailyPl) < 0 ? '-' : '+'}$
								{GeneralUtils.addCommas(
									Math.abs(parseFloat(fakeValues.dailyPl))
								)}
							</h2>
						</div>
						<div className='p-5 rounded-lg bg-secondary-bg space-y-1'>
							<p className='uppercase text-base font-medium'>
								All-Time Profit/Loss
							</p>
							<h2>
								{parseFloat(fakeValues.lifetimePl) < 0 ? '-' : '+'}$
								{GeneralUtils.addCommas(
									Math.abs(parseFloat(fakeValues.lifetimePl))
								)}
							</h2>
						</div>
						<div className='p-5 rounded-lg bg-secondary-bg space-y-1'>
							<p className='uppercase text-base font-medium'>
								Daily Profit/Loss
							</p>
							<h2>$1,000</h2>
						</div>
					</div>
					<div className='w-full grid grid-cols-4 gap-5 mt-5'>
						<div className='bg-secondary-bg p-5 rounded-lg col-span-2 space-y-4'>
							<h3 className='text-primary-text'>Performance Chart</h3>
							<div className='animate-pulse bg-tertiary-bg rounded-lg w-full min-h-[200px]' />
						</div>
						<div className='bg-secondary-bg p-5 rounded-lg col-span-2'>
							<h3 className='text-primary-text'>Daily Performers</h3>
							<div className='mt-4 space-y-2'>
								{Array(5)
									.fill(null)
									.map(() => (
										<div className='animate-pulse bg-tertiary-bg rounded-lg w-full min-h-[30px]' />
									))}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};
export default IndexPage;
