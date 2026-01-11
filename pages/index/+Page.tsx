import { Cog, Mail, Newspaper, User } from 'lucide-react';
import flowers_sit from '../../assets/flowers_sit.png';
export default function Page() {
	return (
		<div className='bg-darkBg w-full min-h-screen mb-0'>
			<div className='bg-darkOverlay w-full min-h-[400px] grid gap-4 grid-cols-3 grid-col  p-4'>
				<div className='p-2 w-full min-h-[400px] flex flex-col items-center justify-center'>
					<h1 className='text-[40px] text-center text-darkText font-sans font-bold'>
						<i>Hi, I am</i> <br />{' '}
						<b className='text-primary text-[50px]'>RON JOHNSON</b>
					</h1>
					<p className='font-sans italic text-sm w-[80%] my-2 text-darkTextMuted'>
						<i className='text-secondary italic'>Software Engineer</i> and
						<i className='text-secondary italic'> computer scientist</i> 🫡
						living in Kisumu,Kenya.I build tools/projects that help make life
						easy and provide value.
					</p>
				</div>

				<img
					src={flowers_sit}
					className='w-[400px] h-[400] filter brightness-80 grayscale -contrast-100 hover:grayscale-10 transition-linear duration-500 object-fit'
				/>
				<div className='w-full min-h-[400px] flex items-start justify-center flex-col gap-4'>
					<ul className='text-darkTextMuted flex flex-col gap-4'>
						<li>
							<a
								href='/blog'
								className='flex items-center gap-2 text-md transition-linear duration-500  p-2 hover:text-2xl hover:text-primary hover:underline'
							>
								<Newspaper size={20} />
								my blog
							</a>
						</li>
						<li>
							<a
								href='/tools'
								className='flex items-center gap-2 text-md transition-linear duration-500  p-2 hover:text-2xl hover:text-primary hover:underline'
							>
								<Cog size={20} />
								tools
							</a>
						</li>
						<li>
							<a
								href='/contact'
								className='flex items-center gap-2 text-md transition-linear duration-500  p-2 hover:text-2xl hover:text-primary hover:underline'
							>
								<Mail size={20} />
								contact me
							</a>
						</li>
						<li>
							<a
								href='/about'
								className='flex items-center gap-2 text-md transition-linear duration-500  p-2 hover:text-2xl hover:text-primary hover:underline'
							>
								<User size={20} />
								about me
							</a>
						</li>
					</ul>
				</div>
			</div>
			{/* footer */}
			<div className='w-full h-[40px] bg-primary flex items-center justify-around'>
				<p>&copy;2026,dalarX infini</p>
				<div>
					<ul className='flex flex-row items-center gap-2'>
						<li className='underline text-darkText hover:text-black'>
							<a href='https://tiktok.com/@surv3illant'>tiktok</a>
						</li>
						<li className='underline text-darkText hover:text-black'>
							<a href='https://instagram.com/surv3illant_'>instagram</a>
						</li>
						<li className='underline text-darkText hover:text-black'>
							<a href='https://x.com/Rojo_omedo254'>x</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
