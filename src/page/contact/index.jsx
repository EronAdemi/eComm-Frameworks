import Layout from "../../components/layout";
import contactus from '../../assets/contact.jpg'
import { useState } from "react";

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    body: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    body: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('===', name)
    setFormData({ ...formData, [name]: value });
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setErrors({ ...errors, [name]: 'Invalid email format' });
        return;
      }
    } else if (value.length < 3) {
      setErrors({ ...errors, [name]: `${name} must be at least 3 characters` });
      return;
    }
    setErrors({ ...errors, [name]: '' });
  };

  return (
    <Layout>
      <div className="grid md:grid-cols-2 grid-cols-1 w-[80%] mx-auto py-[50px]">
        <div className="flex flex-col gap-[25px] bg-[#f5f5f5] p-[20px]">
          <div className="flex flex-col gap-[9px] items-start">
            <label htmlFor="" className="text-[#F38334] text-[18px] font-[500]">Full Name</label>
            <input type="text" name="name" id="" onChange={(e) => handleChange(e)} placeholder="Please Enter your Full Name" className="border-[#F38334] p-[8px] border rounded-[5px] w-full" />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div className="flex flex-col gap-[9px] items-start">
            <label htmlFor="" className="text-[#F38334] text-[18px] font-[500]">Email</label>
            <input type="text" name="email" id="" onChange={(e) => handleChange(e)} placeholder="Please Enter your email" className="border-[#F38334] p-[8px] border rounded-[5px] w-full" />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div className="flex flex-col gap-[9px] items-start">
            <label htmlFor="" className="text-[#F38334] text-[18px] font-[500]">Subject</label>
            <textarea rows={2} type="text" name="subject" id="" onChange={(e) => handleChange(e)} placeholder="Please enter subject" className="border-[#F38334] p-[8px] border rounded-[5px] w-full" />
            {errors.subject && <p className="text-red-500">{errors.subject}</p>}
          </div>

          <div className="flex flex-col gap-[9px] items-start">
            <label htmlFor="" className="text-[#F38334] text-[18px] font-[500]">Body</label>
            <textarea rows={4} type="text" name="body" id="" onChange={(e) => handleChange(e)} placeholder="Please enter body" className="border-[#F38334] p-[8px] border rounded-[5px] w-full" />
            {errors.body && <p className="text-red-500">{errors.body}</p>}
          </div>

          <div>
            <button className="bg-[#F38334] p-[10px_20px] w-full text-white font-[600] hover:text-[#F38334] hover:bg-white hover:border-[#F38334] hover:border-[2px]">Submit </button>
          </div>
        </div>

        <div className="bg-[#f5f5f5] p-[25px]">
          <img src={contactus} alt="" />
        </div>
      </div>
    </Layout>

  )
}

export default ContactUs
