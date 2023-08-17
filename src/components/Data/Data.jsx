import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Dynamic from '../Dynamic/Dynamic';

const Data = () => {
	const [blogs,setBlogs] = useState([])
	const [totalTime,setTotalTime] = useState([])
	const [countTime,setCountTime] = useState([])

	useEffect(() => {
		fetch(`FakeBlogs.json`)
		.then((res) => res.json())
		.then(data => setBlogs(data))
	},[])


	const SpentTime = (blog) =>{
		const newBlogs = [...totalTime,blog]
		setTotalTime(newBlogs)
		// console.log(totalTime);
	}


	const handleReadTime = (blog) =>{
		const newTime = [...countTime,blog]
		setCountTime(newTime)
		// console.log(countTime);
	}

	return (
		<div>
			<div className="flex flex-col justify-center lg:justify-evenly lg:flex-row md:justify-evenly md:flex-row">

				<div>
					{
						blogs.map(blog => <SingleData blog={blog} blogs = {blogs} SpentTime = {SpentTime} handleReadTime = {handleReadTime} ></SingleData>)
					}
				</div>



				<div className='relative'>

					<div className='border border-blue-500 py-7 px-20 sticky top-0'>

						<Dynamic totalTime = {totalTime} countTime = {countTime} ></Dynamic>

					</div>

				</div>
			</div>
		</div>
	);
};

export default Data;