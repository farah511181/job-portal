import React from 'react'
import { useSelector } from 'react-redux';
import LatestJobCards from './latestJobCards';

//const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] //
const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);
    return (
        <div className='max-w-9xl mx-auto my-20 px-4'>
            <h1 className='text-4xl font-bold'><span className='text-[#F83002]'>Latest & top </span>Job Openings</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-5'>
                {
                    allJobs.length <= 0 ? (
                        <span>No Jobs Available</span>
                    ) : (
                        allJobs.slice(0, 7).map((job) => (
                            <LatestJobCards key={job._id} job={job} />
                        ))
                    )
                }
            </div>
        </div>
    )
}
export default LatestJobs
