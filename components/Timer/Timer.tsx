'use client'

import React, { Fragment, useState } from 'react'
import { useInterval } from '@/hooks/useInterval'
import { useStore } from '@/store/Timer'
import ClockFormat from './ClockFormat'
import { Dialog, Transition } from '@headlessui/react'

export default function CountdownApp() {
	const [
		duration,
		taskCount,
		countingDown,
		toggleCountDown,
		decrease,
		reset,
		switchTimer,
		resetTaskCount,
	] = useStore((s) => [
		s.duration,
		s.taskCount,
		s.countingDown,
		s.toggleCountDown,
		s.decrease,
		s.reset,
		s.switchTimer,
		s.resetTaskCount,
	])

	const handleClick = () => {
		toggleCountDown(!countingDown)
	}

	const handleReset = () => {
		reset()
	}

	useInterval(
		() => {
			if (duration > 0) {
				decrease(1)
			} else {
				switchTimer()
				reset()
			}
		},
		countingDown ? 1000 : null
		// passing null stops the interval
	)

	return (
		<div className='grid grid-cols-2 auto-rows-auto gap-3'>
			<div className='col-span-2'>
				<h1 className={`text-center`}>
					<ClockFormat />
				</h1>
			</div>

			<button
				id='toggle_countdown_btn'
				className='bg-skin-primary hover:bg-opacity-40 box-border border border-transparent hover:border hover:border-white focus:ring-gray-200 font-medium rounded-lg text-lg px-5 py-2.5'
				onClick={handleClick}
				type='button'
			>
				{countingDown ? 'Stop' : 'Start'}
			</button>

			<button
				id='reset_countdown_btn'
				className='bg-skin-primary hover:bg-opacity-40 box-border border border-transparent hover:border hover:border-white focus:ring-gray-200 font-medium rounded-lg text-lg px-5 py-2.5'
				onClick={handleReset}
				type='button'
			>
				Reset
			</button>
			<div className='text-center col-span-2'>
				<Modal />
			</div>
		</div>
	)
}

function Modal() {
	const [taskCount, resetTaskCount] = useStore((s) => [
		s.taskCount,
		s.resetTaskCount,
	])

	const [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	function resetTasks() {
		resetTaskCount()
		closeModal()
	}

	return (
		<>
			<div className='inset-0 flex items-center justify-center'>
				<button
					id='reset_taskcount_btn'
					onClick={openModal}
					className='rounded-md p-2 '
				>
					Task #{taskCount}
				</button>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as='div' className='relative z-10' onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black/25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
									<Dialog.Title
										as='h3'
										className='text-lg font-medium leading-6 text-gray-900'
									>
										Do you want to reset your tasks?
									</Dialog.Title>

									<div className='mt-4 flex gap-5 items-center justify-center'>
										<button
											type='button'
											className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
											onClick={resetTasks}
										>
											Yes
										</button>
										<button
											type='button'
											className='inline-flex justify-center rounded-md border border-transparent bg-skin-primary bg-opacity-70 px-4 py-2 text-sm font-medium hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
											onClick={closeModal}
										>
											No
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
