import './App.css';
import {useFormik} from 'formik'
import Section from './components/Section'
function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      message: '',
    },
    validate: (values) => {
      const errors = {}
      if(!values.name) {
        errors.name = 'Name required'
      } else if (values.name.length > 16) {
        errors.name = 'Please enter a valid name'
      }
      if(!values.lastname) {
        errors.lastname = 'Last name required'
      } else if (values.lastname.length > 16) {
        errors.lastname = 'Please enter a valid last name'
      }
      if(!values.email) {
        errors.email = 'Email required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Please enter a valid email'
      }
      if(!values.message) {
        errors.message = 'Message required'
      }

      return errors
    },
    onSubmit: (values) => {
      formik.resetForm(values);
      console.log(values);
    }
  })
  return (
    <Section>
    <form onSubmit={formik.handleSubmit} className='flex flex-col'>
      <label className='text-white text-xl'>Name</label>
      <input
      className='outline-none'
      name='name'
      type='text'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? <span className ='text-red-500 font-lg'>{formik.errors.name}</span> : null}
      <label className='text-white text-xl'>Last Name</label>
      <input
      className='outline-none'
      name='lastname'
      type='text'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.lastname}
      />
      {formik.touched.lastname && formik.errors.lastname ? <span className ='text-red-500 font-lg'>{formik.errors.lastname}</span> : null}
      <label className='text-white text-xl'>Email</label>
      <input
      className='outline-none'
      name='email'
      type='email'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? <span className ='text-red-500 font-lg'>{formik.errors.email}</span> : null}
      <label className='text-white text-xl'>Message</label>
      <textarea
      className='outline-none'
      name='message'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.message}
      />
      {formik.touched.message && formik.errors.message ? <span className ='text-red-500 font-lg'>{formik.errors.message}</span> : null}
      <div className='flex justify-center'>
      <button type='submit' className= 'bg-white mt-12 border-xl py-2 w-52 text-gray-500'>Send</button>
      </div>
    </form>
    </Section>
  );
}

export default App;
