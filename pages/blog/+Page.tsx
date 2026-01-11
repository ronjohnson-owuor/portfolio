import { Hourglass } from 'lucide-react';

function Page() {
	return (
		<div className='w-full min-h-screen bg-darkBg text-darkText grid place-content-center'>
			<div className='flex flex-col items-center justify-center p-4'>
				<Hourglass size={30} className='animate-spin animate-ping' />

				<h3 className='font-bold text-4xl text-primary'>Coming Soon</h3>
				<p className='text-darkText text-sm  text-center'>
					Hello this page is under development.Will be ready soon
				</p>
				<a
					href='/'
					className='my-2 text-secondary underline hover:text-primary'
				>
					{' '}
					back home
				</a>
			</div>
		</div>
	);
}

export default Page;
