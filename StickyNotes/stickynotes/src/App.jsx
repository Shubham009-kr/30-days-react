import React, { useState } from 'react'
import 'animate.css';
import { PlusIcon, PanelsTopLeft } from 'lucide-react';
import { Button, Form, Input, Modal } from 'antd';
import { useNotes } from './zustand/useNotes';
import { nanoid } from 'nanoid';
import moment from 'moment';

const color = ['#Fec917', '#Fe9b71', '#b592fd', '#00d4fe', '#e3ee8e',];

const App = () => {
  const [selectedColor, setSelectedColor] = useState(color[0])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  
  const {notes, addNotes} = useNotes();
  const [filtered, setFiltered] = useState(notes);


  const handleCloseModal = () =>{
    setIsModalOpen(false);
    selectedColor(color[0]);
    form.resetFields();
  }

  const createNote = (formContent)=>{
    formContent.color = selectedColor;
    formContent.id = nanoid();
    formContent.date = new Date().toLocaleDateString();
    addNotes(formContent);
    setFiltered([...filtered, formContent]);
    handleCloseModal();
  }

  const filterByColor = (col) =>{
    if(col === 'all'){
      setFiltered(notes);
    }else{
      const filteredNotes = notes.filter(note => note.color === col);
      setFiltered(filteredNotes);
    }
  }

  return (
    <div className='flex items-center justify-center h-screen overflow-hidden p-12'>
      <div className='overflow-auto p-16 shadow-xl w-full h-full border border-gray-200 rounded-4xl animate__animated animate__fadeIn flex gap-6'>
        <div className='flex flex-col items-center gap-8'>
          <button onClick={()=>setIsModalOpen(true)}
          className='bg-slate-600 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-800 active:scale-80 transition duration-300'>
            <PlusIcon />
          </button>
          <div className='flex flex-col gap-4 items-center justify-center'>
            <button className='text-sm text-slate-600 hover:text-slate-900 active:scale-90 transition duration-300' 
            onClick={()=>filterByColor('all')}><PanelsTopLeft /></button> 
            {
              color.map((col, index) => (
                <button key={index} style={{backgroundColor: col}} className='w-8 h-8 rounded-full hover:scale-110 active:scale-90 transition duration-300'
                onClick={()=>filterByColor(col)}>
                </button>
              ))
            }
          </div>
        </div>
        <div className='border border-r-gray-200'/>
        <div>
          <h1 className='text-4xl text-slate-900 font-[Playfair-Display]'>Notes</h1>
          <p className='playfair text-slate-600'>Create and manage your sticky notes</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
            {
              filtered.map((note, index) => (
                <div key={index} className='p-4 rounded-xl shadow-md comfortaa justify-between flex flex-col
                animate__animated animate__pulse draggable' style={{backgroundColor: note.color}}>
                  <p className='text-slate-900'>{note.content}</p>
                  <p className='text-xs text-slate-500 mt-2'>{moment(note.date).format('DD/MM/YYYY, hh:mm A')}</p>
                </div>
              ))
            }
          </div>
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