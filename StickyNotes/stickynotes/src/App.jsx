import React, { useState } from 'react'
import 'animate.css';
import { PlusIcon } from 'lucide-react';
import { Button, Form, Input, Modal } from 'antd';

const color = ['#Fec917', '#Fe9b71', '#b592fd', '#00d4fe', '#e3ee8e',];

const App = () => {
  const [selectedColor, setSelectedColor] = useState(color[0])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const handleCloseModal = () =>{
    setIsModalOpen(false);
    selectedColor(color[0]);
    form.resetFields();
  }

  const createNote = (formContent)=>{
    formContent.color = selectedColor;

  }
  return (
    <div className='flex items-center justify-center h-screen overflow-hidden p-12'>
      <div className='p-16 shadow-xl w-full h-full border border-gray-200 rounded-4xl animate__animated animate__fadeIn flex gap-6'>
        <div className='flex flex-col items-center gap-8'>
          <button onClick={()=>setIsModalOpen(true)}
          className='bg-slate-600 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-800 active:scale-80 transition duration-300'>
            <PlusIcon />
          </button>
          <div className='flex flex-col gap-4'>
            {
              color.map((col, index) => (
                <button key={index} style={{backgroundColor: col}} className='w-8 h-8 rounded-full hover:scale-110 active:scale-90 transition duration-300'>
                </button>
              ))
            }
          </div>
        </div>
        <div className='border border-r-gray-200'/>
        <div>
          <h1 className='text-4xl text-slate-900 font-[Playfair-Display]'>Notes</h1>
          <p className='playfair text-slate-600'>Create and manage your sticky notes</p>
        </div>
      </div>
      <Modal open={isModalOpen} onCancel={handleCloseModal} footer={null} title="Create Note, To-Do or Reminder...">
        <Form layout='vertical' onFinish={createNote} form={form}>
          <Form.Item
            name="content"
            rules={[{ required: true, message: 'Please enter your content!' }]}
          >
            <Input.TextArea placeholder="Your content goes here..." rows={3} />
          </Form.Item>
          <div className='flex gap-4 mb-8'>
            {
              color.map((col, index) => (
                <button key={index} style={{backgroundColor: col}} type='button'
                onClick={()=>setSelectedColor(col)}
                className={`w-8 h-8 rounded-full hover:scale-120 active:scale-90 transition duration-300 ${selectedColor === col ? `ring-1 ring-offset-2 ring-gray-400 shadow-lg scale-125` : ''}`}>
                </button>
              ))
            }
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>

      </Modal>

    </div>
  )
}

export default App