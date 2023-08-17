import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const SingleData = ({blog,handleReadTime,SpentTime}) => {
	// console.log(blogs);

	return (
		<div>
			<div className="card w-96 bg-primary text-primary-content mb-3">

				<figure><img className='w-full h-full' src={blog.cover_image} alt="Shoes" /></figure>

				<div className="card-body">

					<div className="flex justify-between">
						
						<div className='flex'>
							<img className='w-10 border rounded-full' src="https://images.unsplash.com/photo-1691666350421-dbc697e4c6ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />

							<div className='flex flex-col ml-5'>
								<h2 className="card-title text-sm">{blog.author.name}</h2>
								<p><small>{blog.publish_date}</small></p>
							</div>

						</div>

						<div className='mr-0'>
							<p><small>
							{blog.read_time} min read
							<FontAwesomeIcon onClick={() => handleReadTime(blog)} className='cursor-pointer ml-2' icon={faShoppingCart} />
							</small>
							</p>
						</div>
					</div>

					<p onClick={() => SpentTime(blog)} className='cursor-pointer underline'>Mark as read</p>

				</div>

			</div>
		</div>
	);
};

export default SingleData;