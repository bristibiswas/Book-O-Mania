import React from 'react'
import list from '../../src/assets/list.json';
import Cards from './Cards';
import { Link } from 'react-router-dom';

const Course = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
        <div className='pt-28 items-center justify-center text-center'>
          <h1 className='dark:bg-slate-900 dark:text-white text-2xl md:text-4xl'>We're Delightful to have you {" "}<span className='text-emerald-500'> Here! :)</span></h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, pariatur! Fugit laboriosam qui cumque vero. Officia corrupti et eum voluptatem, natus laudantium facere rerum unde. Veniam, et. Numquam, soluta quibusdam iste cum atque saepe eveniet id, harum ducimus animi modi ipsam nesciunt ipsa veritatis quae? Delectus fugit laudantium voluptate hic.</p>
          <Link to='/'>
            <button className="btn btn-success mt-6 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300">Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))

          }
        </div>
      </div>

    </>
  )
}

export default Course
