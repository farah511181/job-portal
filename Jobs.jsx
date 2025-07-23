import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'
import { useSelector } from 'react-redux'
import useGetAllJobs from '@/hooks/useGetAllJobs'

//const jobsArray = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14]//

const Jobs = () => {
    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job);

    return (
        <div>
            <Navbar />
            <div className='w-full px-4 mx-auto mt-5'>
                <div className='flex gap-5'>
                    <div className='w-20%'>
                        <FilterCard />
                    </div>
                    {
                        allJobs.length <= 0 ? <span>Job not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                                    {
                                        allJobs.map((job) => (
                                            <div key={job?._id}>
                                                <Job job={job} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Jobs
