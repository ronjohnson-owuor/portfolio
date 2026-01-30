import { PenLine, ArrowLeft } from 'lucide-react';

function Page() {
	return (
		<div className='w-full min-h-screen bg-darkBg text-darkText px-6 py-20'>
			<div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
				{/* TEXT SECTION */}
				<div className='space-y-6'>
					<h1 className='text-4xl md:text-5xl font-bold text-primary'>
						Thoughts on Tech
					</h1>

					<p className='text-darkTextMuted text-base leading-relaxed max-w-md'>
						I like writing about technology, systems, and the ideas behind how
						things work. When I start publishing, you’ll find essays, technical
						breakdowns, and practical insights collected here.
					</p>

					<p className='text-sm text-darkTextMuted'>
						This space is intentionally quiet for now.
					</p>

					<a
						href='/'
						className='inline-flex items-center gap-2 text-secondary underline hover:text-primary'
					>
						<ArrowLeft size={16} />
						Back home
					</a>
				</div>

				{/* VISUAL SECTION */}
				<div className='flex justify-center md:justify-end'>
					<div className='w-40 h-40 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center'>
						<PenLine size={64} className='text-primary opacity-80' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page;
