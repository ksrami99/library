import React from 'react'
import Header from './Header'
import { useState } from 'react'
import {InsertBook} from '../config/api'
function AddBooks() {
    const [data , setData] = useState({
        title: '',
        authors: '',
        publishedDate: '',
        pageCount: '',
        isbn: '',
        language: '',
        thumbnail: '',
        chapters: '',
        addBook: ''
    })

    const onEvent = (e) => {
        setData((prevdata) => ({
          ...prevdata,
          [e.target.name]: e.target.value,
        }));
      };


    const addBook = async (e) => {
        e.preventDefault()
        const {books} = await InsertBook(data)
        console.log(books);
    }
  return (
    <div>
        <Header/>
        <section >
        <div
          className="max-w-4xl w-full bg-[#3a3e3e] p-8 rounded-lg shadow-lg m-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-Mistral text-[#dbb7a4]">
            Book Information Form
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-[#dbb7a4] text-sm font-bold mb-2"
                  for="title"
                  >Title</label
                >
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  name='title'
                 
                  onChange={onEvent}
                  placeholder="Title"
                />
              </div>
  
              <div>
                <label
                  className="block text-[#dbb7a4] text-sm font-bold mb-2"
                  for="authors"
                  >Authors</label
                >
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] leading-tight focus:outline-none focus:shadow-outline"
                  id="authors"
                  type="text"
                  onChange={onEvent}
                  name='authors'
                   
                  placeholder="authors"
                />
              </div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-[#dbb7a4] text-sm font-bold mb-2"
                  for="publishedDate"
                  >Published Date</label
                >
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] leading-tight focus:outline-none focus:shadow-outline"
                  id="publishedDate"
                  name='publishedDate'
                  type="text"
                  onChange={onEvent}
                  placeholder="Date"
                />
              </div>
  
              <div>
                <label
                  className="block text-[#dbb7a4] text-sm font-bold mb-2"
                  for="pageCount"
                  >Page Count</label
                >
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] leading-tight focus:outline-none focus:shadow-outline"
                  id="pageCount"
                  name='pageCount'
                  type="text"
                  onChange={onEvent}
                  placeholder="pagecount"
                />
              </div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-[#dbb7a4] text-sm font-bold mb-2"
                  for="isbn10"
                  >ISBN</label
                >
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] leading-tight focus:outline-none focus:shadow-outline"
                  id="isbn10"
                  type="text"
                  onChange={onEvent}
                  name='isbn'
                  placeholder="ISBN"
                />
              </div>
  
              <div>
                      <label className="block text-[#dbb7a4] text-sm font-bold mb-2"
                  name='language' for="language">Language</label>
                      <select className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] leading-tight focus:outline-none focus:shadow-outline" id="language" onChange={onEvent}>
                        <option value="Select language" disabled selected>Select language</option>  
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="hi">Hindi</option>
                      </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-[#dbb7a4] text-sm font-bold mb-2"
                  for="thumbnail"
                  >Thumbnail</label
                >
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] leading-tight focus:outline-none focus:shadow-outline"
                  id="thumbnail"
                  name='thumbnail'
                  type="file" 
                  onChange={onEvent}
                  placeholder="thumbnail"
                />
              </div>
  
              <div>
                <label
                  className="block text-[#dbb7a4] text-sm font-bold mb-2"
                  for="chapters"
                  >Chapters</label
                >
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] leading-tight focus:outline-none focus:shadow-outline"
                  id="chapters"
                  name='chapters'
                  type="text"
                  onChange={onEvent}
                  placeholder="Total chapters..."
                />
              </div>
            </div>
  
            <div>
              <label
                className="block text-[#dbb7a4] text-sm font-bold mb-2"
                for="description"
                >Description</label
              >
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#3a3e3e] leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                onChange={onEvent}
                name='description'
                rows="5"
                placeholder="Description"
              ></textarea>
            </div>
  
            <div className="flex justify-center">
                
              <button
                className="bg-[#dbb7a4] text-[#3a3e3e] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
               
                onClick={addBook}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default AddBooks