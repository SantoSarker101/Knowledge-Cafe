import React from 'react';

const Header = () => {
	return (
		<div>
			<div className="flex flex-col lg:flex-row lg:justify-evenly items-center my-5">
				<h1 className='text-3xl text-cyan-800 mb-5 mt-1'>Knowledge Cafe</h1>
				<div>
					<ul className='flex'>
						<li><a className='mr-3 text-green-900 text-lg' href="#">Home</a></li>
						<li><a className='mr-3 text-green-900 text-lg' href="#">About</a></li>
						<li><a className='mr-3 text-green-900 text-lg' href="#">Service</a></li>
						<li><a className='mr-3 text-green-900 text-lg' href="#">Contact</a></li>
					</ul>
				</div>
				{/* <img src="./Aryabhatta.png" alt="" /> */}
			</div>

			<div className='border w-10/12 mx-auto my-7'>
				<hr />
			</div>

		</div>
	);
};

export default Header;