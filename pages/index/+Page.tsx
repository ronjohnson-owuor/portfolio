import { BriefcaseBusiness, Cog, Rss } from 'lucide-react';
import './index.css';
import flowers_sit from '../../assets/flowers_sit.png';

function Page() {
	return (
		<div className='w-full min-h-screen overflow-y-scroll bg-darkBg'>
			<div
				id='header'
				className='w-full h-screen grid sm:grid-cols-2 gap-4 overflow-x-clip'
			>
				<div className='flex justify-center flex-col items-center text-center gap-10'>
					<h2 className='text-[30px] md:text-[40px] text-darkText font-bold'>
						Hi, there am
						<b className='text-primary md:text-[60px]'>Ronjohnson</b>
					</h2>
					<p className='w-[80%] text-darkTextMuted font-bold'>
						I am a <i className='text-secondary'>software engineer</i> .I
						majorly work on building website and Applications.I like building
						tools and using my tech skills to make life easier for others.
					</p>

					<div className='sm:w-full flex gap-4 text-darkText my-10 flex-wrap justify-center'>
						<button
							onClick={() => (window.location.href = '/blog')}
							className='flex gap-2 bg-secondary rounded-md p-2 gap-2 hover:bg-primary cursor-pointer transition-linear duration-500 hover:-translate-y-1'
						>
							<Rss />
							<p>blog</p>
						</button>
						<button
							onClick={() => (window.location.href = '/services')}
							className='flex  bg-secondary rounded-md p-2 gap-2 hover:bg-primary cursor-pointer transition-linear duration-500 hover:-translate-y-1'
						>
							<Cog />
							<p>services</p>
						</button>
						<button
							onClick={() => (window.location.href = '/contact')}
							className='flex bg-secondary rounded-md p-2 gap-2 hover:bg-primary cursor-pointer transition-linear duration-500 hover:-translate-y-1'
						>
							<BriefcaseBusiness />
							<p>contact</p>
						</button>
					</div>
				</div>
				<div className='w-full h-full  grid place-content-center relative'>
					{/* image box */}
					<div>
						<img
							loading='lazy'
							className='filter grayscale brightness-100 w-[300px] h-[450px] object-fit  absolute translate-y-20 z-10 scale-[1.9] transition duration-500'
							src={flowers_sit}
							alt='my pic'
						/>
						<div className='w-[300px] h-[300px] rounded-[100vh] bg-primary shadow-2xl shadow-secondary filter blur contrast-120'></div>
					</div>
				</div>
			</div>
			<div className='w-full min-h-[400px] bg-linear-to-b to-highlight from-darkBg flex items-center'>
				<div className='max-w-5xl mx-auto px-6 z-15 my-[100px]'>
					<h1 className='text-4xl md:text-5xl font-bold text-white leading-tight'>
						<span className='text-highlight'>About me</span>
					</h1>

					<p className='mt-4 text-lg text-gray-300 max-w-3xl'>
						A full-stack software Engineer focused on building fast, scalable,
						and visually clean digital products. I turn complex ideas into
						simple, reliable experiences using modern web technologies.
					</p>

					<p className='mt-4 text-gray-400 max-w-3xl'>
						I work across the stack and comfortable with any language — from
						crafting responsive interfaces with React and Tailwind CSS, to
						designing efficient backend systems with Node.js, PHP, and SQL
						databases. Performance, clarity, and long-term maintainability
						guides every decision I make.
					</p>

					<blockquote className='mt-6 border-l-4 border-highlight pl-4 text-secondary italic max-w-3xl'>
						“The problem comes first. The language is just a means to an end.I
						can pick and learn any language any time as long as I need it to get
						the job done.”
						<span className='block mt-2 text-sm text-gray-500'>
							— Anonymous
						</span>
					</blockquote>

					<div className='mt-6 flex flex-wrap gap-3 mb-10'>
						<span className='px-4 py-1 rounded-full bg-darkOverlay text-sm text-gray-300'>
							React
						</span>
						<span className='px-4 py-1 rounded-full bg-darkOverlay text-sm text-gray-300'>
							React Native
						</span>
						<span className='px-4 py-1 rounded-full bg-darkOverlay text-sm text-gray-300'>
							Tailwind CSS
						</span>
						<span className='px-4 py-1 rounded-full bg-darkOverlay text-sm text-gray-300'>
							Node.js
						</span>
						<span className='px-4 py-1 rounded-full bg-darkOverlay text-sm text-gray-300'>
							Express
						</span>
						<span className='px-4 py-1 rounded-full bg-darkOverlay text-sm text-gray-300'>
							PHP
						</span>
						<span className='px-4 py-1 rounded-full bg-darkOverlay text-sm text-gray-300'>
							laravel
						</span>
						<span className='px-4 py-1 rounded-full bg-darkOverlay text-sm text-gray-300'>
							MySQL
						</span>
						<span className='px-4 py-1 rounded-full bg-darkOverlay text-sm text-gray-300'>
							TypeScript
						</span>
					</div>
				</div>
			</div>
			<div className='bg-primary w-full h-[60px] flex items-center justify-center sm:gap-4 flex-col sm:flex-row'>
				<span>&copy;dalarX infini, {new Date().getFullYear()}</span>

				<ul className='flex flex-row gap-2'>
					<li className='underline hover:text-white transition-linear duration-500 hover:-translate-y-2'>
						<a target='_blank' href='https://tiktok.com/@surv3illant'>
							tiktok
						</a>
					</li>
					<li className='underline hover:text-white transition-linear duration-500 hover:-translate-y-2'>
						<a target='_blank' href='https://instagram.com/surv3illant_'>
							instagram
						</a>
					</li>
					<li className='underline hover:text-white transition-linear duration-500 hover:-translate-y-2'>
						<a target='_blank' href='https://x.com/@Rojo_omedo254'>
							x
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Page;
