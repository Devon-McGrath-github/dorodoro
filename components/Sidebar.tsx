import { useState, Fragment } from 'react'
import ColorPicker from './ColorPicker'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'

export default function Sidebar() {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	return (
		<>
			<div onClick={() => setSidebarOpen(true)} tabIndex={0}>
				<Bars3Icon className='h-10 w-10 cursor-pointer' id='sidebar_open_btn' />
			</div>

			<Transition.Root show={sidebarOpen} as={Fragment}>
				<Dialog as='div' className='relative z-40' onClose={setSidebarOpen}>
					<Transition.Child
						as={Fragment}
						enter='transition-opacity ease-linear duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='transition-opacity ease-linear duration-300'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black/30' aria-hidden='true' />
					</Transition.Child>

					<div className='fixed inset-0 z-40 flex'>
						<Transition.Child
							as={Fragment}
							enter='transition ease-in-out duration-150 transform'
							enterFrom='translate-x-full'
							enterTo='translate-x-0'
							leave='transition ease-in-out duration-150 transform'
							leaveFrom='translate-x-0'
							leaveTo='translate-x-full'
						>
							<Dialog.Panel className='absolute right-0 flex w-full min-h-screen max-w-xs flex-1 flex-col py-5 pr-5 bg-skin-primary antialiased'>
								<Transition.Child
									as={Fragment}
									enter='ease-in-out duration-300'
									enterFrom='opacity-0'
									enterTo='opacity-100'
									leave='ease-in-out duration-300'
									leaveFrom='opacity-100'
									leaveTo='opacity-0'
								>
									<div className='flex flex-col gap-4 bg-skin-primary bg-opacity-80 flex-1'>
										<button
											onClick={() => setSidebarOpen(false)}
											className='ml-auto justify-center rounded-full'
										>
											<XMarkIcon
												className='h-10 w-10 cursor-pointer'
												id='sidebar_close_btn'
												aria-hidden='true'
											/>
										</button>

										<div className='flex flex-col gap-4 items-center px-3'>
											<div className='flex flex-row items-center justify-between gap-4 w-full'>
												<h1 className='text-2xl font-bold'>Settings:</h1>
											</div>
											<div className='flex flex-row items-center justify-between gap-4 w-full'>
												<h2 className='text-xl font-medium'>Color</h2>
												<ColorPicker />
											</div>
										</div>
									</div>
								</Transition.Child>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	)
}
