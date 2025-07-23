import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

// ✅ Move here
const daysAgoFunction = (mongodbTime) => {
  const createdAt = new Date(mongodbTime);
  const currentDate = new Date();
  const timeDifference = currentDate - createdAt;
  return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
};

const Job = ({ job }) => {
  const jobId = 'abhevbmvfhum';
  const navigate = useNavigate();

  return (
    <div className="w-full p-4">
      <JobCard jobId={jobId} navigate={navigate} job={job} />
    </div>
  );
};

const JobCard = ({ jobId, navigate, job }) => {
  return (
    <div className="p-6 rounded-2xl shadow-md bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0 ? 'Today' : `${daysAgoFunction(job?.createdAt)} days ago`} </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark size={18} />
        </Button>
      </div>

      <div className="flex items-center gap-3 my-4">
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://i.pinimg.com/originals/3c/28/db/3c28dbb63168df7e095f6f739622e1f6.jpg" />
        </Avatar>
        <div>
          <h3 className="font-medium text-lg">{job?.company?.name}</h3>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-base mb-1">{job?.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{job?.description}</p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-[#251e1d] font-bold" variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#251e1d] font-bold" variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          className="bg-[#251e1d] hover:bg-red-600"
        >
          Details
        </Button>
        <Button className="bg-[#F83002]">Save for Later</Button>
      </div>
    </div>
  );
};

export default Job;
