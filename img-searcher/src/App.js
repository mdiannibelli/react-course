import './App.css';
import {useState} from 'react'
import { Formik, Form, Field } from 'formik';

function App() {
  const [photos, setPhotos] = useState([]);
  const open = url => window.open(url);
  return (
    <section>
      <header className='flex justify-center bg-white p-4 shadow-xl relative z-10'>
        <Formik
        initialValues={{search: ''}}
        onSubmit={async values => {
          // call api unsplash
          const res = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
            headers: {
              'Authorization': 'Client-ID upc0oWYU_PmAT_qJCP2TPDKzdvXQhvSMrOJcujSw4ps'
            }
          })
          const data = await res.json()
          // console.log(data.results)
          setPhotos(data.results)
          console.log(data.results)
        }}
        >
        <Form>
          <Field name='search' className='py-2 px-1 outline-none border-2 border-[#eee] rounded-sm'/>
        </Form>
        </Formik>
      </header>
      <div className='max-w-[1200px] mx-auto mt-12'>
          <div className='grid grid-cols-4 grid-rows-auto justify-center gap-12 p-4'>
            {photos.map(photo => (
              <article key={photo.id} onClick={() => open(photo.links.html)}
              className='bg-gray-100 rounded-xl cursor-pointer w-full overflow-hidden max-h-[400px]'
              >
                  <img src={photo.urls.regular} className='w-[256px] h-[180px] object-cover'/>
                  <p className='m-4 text-sm m-4 font-[Helvetica Neue] text-pretty'>{photo.description === null ?  photo.alt_description : photo.description}</p>
              </article>
            ))}
          </div>
      </div>
    </section>
  );
}

export default App;
