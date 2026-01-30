import {
	Settings,
	Server,
	Cpu,
	Wrench,
	Rocket,
	ShieldCheck,
} from 'lucide-react';

const services = [
	{
		title: 'Internal Business Systems',
		description:
			'Design and build internal systems that streamline operations, reduce manual work, and improve visibility across your business.',
		icon: Settings,
	},
	{
		title: 'Automation Systems',
		description:
			'Automate repetitive processes to save time, reduce errors, and let your team focus on high-value work.',
		icon: Cpu,
	},
	{
		title: 'Backend APIs',
		description:
			'Secure, scalable APIs that power web apps, mobile apps, and third-party integrations.',
		icon: Server,
	},
	{
		title: 'Custom Enterprise Software',
		description:
			'Tailored software solutions built around your workflows — not generic tools that slow you down.',
		icon: ShieldCheck,
	},
	{
		title: 'System Maintenance',
		description:
			'Ongoing monitoring, updates, and improvements to keep your systems stable and performant.',
		icon: Wrench,
	},
	{
		title: 'Deployment & Long-Term Support',
		description:
			'From deployment to continuous support, ensuring your systems grow with your business.',
		icon: Rocket,
	},
];

function Page() {
	return (
		<div className='w-full min-h-screen bg-darkBg text-darkText px-4 py-16'>
			<div className='max-w-6xl mx-auto'>
				{/* Header */}
				<div className='text-center mb-14'>
					<h1 className='text-4xl md:text-5xl font-bold text-primary mb-4'>
						Let’s Build Something That Works
					</h1>
					<p className='max-w-2xl mx-auto text-darkText/80 text-base md:text-lg'>
						I collaborate with businesses and individuals to design, build, and
						maintain reliable software systems that solve real problems.
					</p>
				</div>

				{/* Services Grid */}
				<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{services.map((service, index) => {
						const Icon = service.icon;
						return (
							<div
								key={index}
								className='rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition'
							>
								<div className='mb-4 flex items-center gap-3'>
									<Icon className='text-primary' size={28} />
									<h3 className='text-lg font-semibold'>{service.title}</h3>
								</div>
								<p className='text-sm text-darkText/80 leading-relaxed'>
									{service.description}
								</p>
							</div>
						);
					})}
				</div>

				{/* CTA */}
				<div className='mt-16 text-center'>
					<p className='text-darkText/80 mb-4'>
						Have a project, idea, or system that needs improvement?
					</p>
					<a
						href='/contact'
						className='inline-block rounded-xl bg-primary px-8 py-3 font-semibold text-darkBg hover:opacity-90 transition'
					>
						Let’s Talk
					</a>
				</div>
			</div>
		</div>
	);
}

export default Page;
