import Container from '../src/components/Container'
import {Formik, Form} from 'formik';
import Input from '../src/components/Input'
import { useState } from 'react';

const interestMount = (initialDeposit, contribuition, years, interestRate) => {
  let total = initialDeposit;
  
  // recorremos por cada año
  for(let i = 0; i < years; i++) {
    total = (total + contribuition) * (interestRate + 1) // cuando usamos porcentajes es común sumar 1, ejemplo tasa del interes 5% => +1 = 0.05, de esta forma convierte el % en fracción
  }
  // redondeamos el valor
  return Math.round(total)
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits2: 2,
})


function App() {
  const [errors, setErrors] = useState({})
  const [balance, setBalance] = useState(0)
  const handleSubmit = ({initialDeposit, contribuition, years, interestRate}, e) => {
    if(errors) {
      e.preventDefault()
    } else {
      const value = interestMount(Number(initialDeposit), Number(contribuition), Number(years), Number(interestRate));
      setBalance(formatter.format(value));
    }
  }

  const validate = (initialDeposit, contribuition, years, interestRate) => {
    const errors = {};
    if(!initialDeposit) {
      errors.initialDeposit = 'El monto inicial es requerido'
      setErrors(errors.initialDeposit)
    }
    return errors;
  }
  return (
    <Container>
        <h1 className='font-semibold text-4xl text-white '>Calculadora</h1>
        <h3 className='font-semibold text-4xl text-white '>de interés compuesto</h3>
        <div className='bg-[#eee] py-6 px-4 w-1/2 border-t-[6px] border-gray-700 rounded-md shadow-xl mt-8'>
          <Formik
          initialValues={
            {
              initialDeposit: '',
              contribuition: '',
              years: '',
              interestRate: ''
            }
          } onSubmit={handleSubmit}>

            <Form>
              <Input name='initialDeposit' label='Depósito inicial' placeholder='Ingrese su monto inicial' />
              {errors.initialDeposit ? <span className='text-sm text-red-500'>{errors.initialDeposit}</span> : null}
              <Input name='contribuition' label='Contribución anual' placeholder='Ingrese su contribución anual' />
              <Input name='years' label='Años' placeholder='Ingrese la cantidad de años' />
              <Input name='interestRate' label='Interés estimado' placeholder='Ingrese su interés estimado' />
              <div className='flex justify-center'>
              <button type='submit' className='rounded-xl text-white w-44 bg-[#004B3E] hover:bg-gray-800 duration-300 py-2 cursor-pointer'>Enviar</button>
              </div>
            </Form>

          </Formik>
        </div>
      
              {balance === 0 ? '' : <span className='text-white text-lg mt-8 border-2 border-[#eee] p-6 rounded-md'>Balance final:  {balance}</span>}
    </Container>
  );
}

export default App;
