import React from 'react';

const Dynamic = ({totalTime,countTime}) => {
	console.log(countTime);

	let total = 0;
	for(const gtTotal of totalTime){
		total = total + gtTotal.read_time
	}


	return (
		<div>
			<h3 className='bg-green-900 text-white p-3 rounded'>Spent time on read : {total} min</h3>

			<p className='bg-green-900 text-white p-3 rounded my-3'>Bookmarked Blogs : {countTime.length}</p>

			<p className='text-center underline text-red-700 font-bold'>Names</p>

			{
				countTime.map(time => <p className='bg-green-900 text-white p-3 rounded my-3 block'>{time.author.name}</p>)
			}
		</div>
	);
};

export default Dynamic;