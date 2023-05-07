import React from 'react'


const Card = () => {


  return (
    <div className="max-w-2xl mx-auto">


	<div className="bg-white dark:bg-gray-800 dark:border-gray-700 max-w-sm rounded-lg shadow-md">
		<a href="#">
			<img className="p-8 rounded-t-lg" src="https://flowbite.com/docs/images/products/product-1.png" alt="product image"/>
        </a>
			<div className="pb-5 px-5">
				<a href="#">
					<h3 className="dark:text-white font-semibold text-gray-900 text-xl tracking-tight">Title</h3>
				</a>
				<div className="flex items-center mb-5 mt-2.5">
					Description
				</div>
				<div className="flex items-center justify-between">
					<span className="dark:text-white font-bold text-3xl text-gray-900">Price $$</span>
					<a href="#"
						className="bg-blue-700 dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium hover:bg-blue-800 px-5 py-2.5 rounded-lg text-center text-sm text-white">Add
						to cart</a>
				</div>
			</div>
	</div>
</div>
  )
}

export default Card