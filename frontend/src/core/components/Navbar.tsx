import { Disclosure } from "@headlessui/react";
import { Link } from "@tanstack/react-router";

export function Navbar() {
	return (
		<Disclosure as="nav" className="bg-white shadow w-full fixed top-0 z-max ">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 justify-between">
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex shrink-0 items-center">
							<img
								alt="Canopée"
								src="https://www.canopee.ong/wp-content/uploads/2023/08/logo-canopee.png"
								className="h-8 w-auto"
							/>
						</div>
						<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
							{/* Current: "border-green-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
							<Link
								to="/map"
								className="inline-flex items-center border-b-2 border-green-500 px-1 pt-1 text-sm font-medium text-gray-900"
							>
								Carte
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Disclosure>
	);
}
