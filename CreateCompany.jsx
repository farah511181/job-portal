import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '@/redux/companySlice';

const CreateCompany = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState('');

 const registerNewCompany = async () => {
  try {
    const token = localStorage.getItem('token');
    console.log('TOKEN', token);
    
    const formData = new FormData();
    formData.append('companyName',companyName);

    const res = await axios.post(`${COMPANY_API_END_POINT}/register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    if (res?.data?.success) {
      dispatch(setSingleCompany(res.data.company));
      toast.success(res.data.message);

      const companyId = res?.data?.company?.id;
      navigate(`/admin/companies/${companyId}`);
    }
  } catch (error) {
    console.error('Registration error:', error?.response?.data || error.message);
    toast.error(error?.response?.data?.message || 'Something went wrong');
  }
};


  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Company Name</h1>
          <p className="text-gray-500 mb-4">Which Company do you want</p>
        </div>

        <Label htmlFor="companyName">Company Name</Label>
        <input
          id="companyName"
          type="text"
          className="my-2 border px-3 py-2 rounded w-full"
          placeholder="JobHunt, Google, etc."
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <div className="flex items-center gap-2 my-10">
          <Button variant="outline" onClick={() => navigate('/admin/companies')}>Cancel</Button>
          <Button onClick={registerNewCompany}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCompany;
