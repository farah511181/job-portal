import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CompaniesTable = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full overflow-x-auto">
      <Table className="w-full">
        <TableCaption>recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://i.pinimg.com/originals/3c/28/db/3c28dbb63168df7e095f6f739622e1f6.jpg" />
              </Avatar>
            </TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>13 July 2025</TableCell>
            <TableCell className='text-right cursor-pointer'>
              <Popover>
                <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                <PopoverContent className="w-32">
                  <div
                    className='flex items-center gap-2 w-fit cursor-pointer'
                    onClick={() => navigate(`/admin/companies/${company?._id}`)}>
                    <Edit2 className='w-4' />
                    <span>Edit</span>
                  </div>
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
