import { useState } from 'react';
import { sendEmail } from '../../telefuncs/sendEmail.telefunc';
import { email_response } from '../../types';
import contact from '../../assets/contact.svg';
import { MapPinCheckInside, Phone, Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

function Page() {
	const [sender, setSender] = useState('');
	const [message, setMessage] = useState('');
	const [disabled, setdisabled] = useState(false);

	return (
		<div className='w-full min-h-screen bg-darkBg text-darkText px-4 py-16'>
			<div className='max-w-6xl mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* FORM SECTION */}
					<div className='bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10'>
						<h1 className='font-bold text-4xl text-primary mb-4'>Let’s Talk</h1>

						<p className='text-darkTextMuted text-sm leading-relaxed mb-8'>
							I’m open to professional collaborations, long-term partnerships,
							and meaningful projects where ideas, skills, and execution matter.
							If you’re building something serious and value clear communication
							and quality work, I’d be glad to connect.
						</p>

						<div className='space-y-5'>
							<input
								type='email'
								onChange={(e) => setSender(e.target.value)}
								className='w-full rounded-xl bg-darkOverlay px-4 h-[52px] text-darkText focus:outline-none focus:ring-2 focus:ring-primary/60'
								placeholder='Your working email'
							/>

							<textarea
								className='w-full rounded-xl bg-darkOverlay px-4 py-3 min-h-[160px] text-darkText focus:outline-none focus:ring-2 focus:ring-primary/60 resize-none'
								name='email_content'
								onChange={(e) => setMessage(e.target.value)}
								placeholder='Tell me about your project or idea...'
							/>

							<button
								disabled={disabled}
								onClick={async () => {
									setdisabled(true);
									const response: email_response = await sendEmail({
										sender,
										message,
									});
									if (response.proceed) toast.success(response.message);
									if (!response.proceed) toast.error(response.message);
									if (response.error) {
										console.log(response.error);
										toast.error(response.message);
									}
									setdisabled(false);
								}}
								className={`w-full h-[48px] rounded-xl flex items-center justify-center gap-2 font-semibold transition
									${
										!disabled
											? 'bg-primary text-darkBg hover:opacity-90 active:-translate-y-[2px]'
											: 'bg-gray-300 text-gray-600 cursor-wait'
									}`}
							>
								<Send size={18} />
								Send message
							</button>
						</div>

						<a
							href='/'
							className='inline-block mt-6 text-sm underline text-blue-500'
						>
							Back home
						</a>
					</div>

					{/* INFO / IMAGE SECTION */}
					<div className='hidden lg:flex flex-col items-center gap-6'>
						<img
							src={contact}
							alt='Contact illustration'
							className='max-w-[420px] w-full'
						/>

						<div className='flex gap-2 items-center text-darkTextMuted'>
							<MapPinCheckInside size={18} />
							<p className='text-sm'>Maseno, Kisumu, Kenya</p>
						</div>

						<div className='flex gap-2 items-center text-darkTextMuted'>
							<Phone size={18} />
							<p className='text-sm'>+254 746 986 414</p>
						</div>

						<p className='text-sm text-darkTextMuted mt-6'>© dalarX infini</p>
					</div>
				</div>
			</div>

			<Toaster
				position='top-center'
				toastOptions={{
					success: {
						style: { background: 'green', color: 'white' },
					},
					error: {
						style: { background: 'crimson', color: 'white' },
					},
				}}
			/>
		</div>
	);
}

export default Page;
