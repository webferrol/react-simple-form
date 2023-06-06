import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from './hooks/useForm'
import { FORM_USERS } from './constants'
import { UserList } from './components/UserList'

function App () {
  const [users, setUsers] = useState([])
  const { nombre, apellidos, correo, handleChange, reset } = useForm(FORM_USERS)

  const handleSubmit = e => {
    e.preventDefault()
    setUsers([
      ...users,
      {
        id: uuidv4(),
        nombre,
        apellidos,
        correo
      }
    ])
  }

  return (
    <main className='font-sans p-5'>
      <h1 className='text-center text-4xl font-bold'>Simple Form App</h1>

      {
        Boolean(users.length) && (<UserList users={users} />)
      }

      <form onSubmit={handleSubmit}>
        <ul className='grid gap-5'>
          <li>
            <label
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              htmlFor='nombre'
            >Nombre
            </label>
            <input
              required
              onChange={handleChange}
              value={nombre}
              placeholder='Xurxo'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              name='nombre' id='nombre' type='text'
            />
          </li>
          <li>
            <label
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              htmlFor='apellidos'
            >Apellidos
            </label>
            <input
              onChange={handleChange}
              value={apellidos}
              placeholder='González'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              name='apellidos' id='apellidos' type='text'
            />
          </li>
          <li>
            <label
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              htmlFor='correo'
            >Correo electrónico
            </label>
            <input
              onChange={handleChange}
              value={correo}
              placeholder='xurxo@webferrol.com'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              name='correo' id='correo' type='email'
            />
          </li>
        </ul>
        <div className='flex gap-2'>
          <button className='mt-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Enviar
          </button>
          <input
            type='button'
            value='Reset'
            onClick={() => reset()}
            className='mt-5 w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
          />
        </div>
      </form>

      <div>
        <ul className='mt-5 flex flex-col gap-3'>
          <li><strong className='text-bold'>Nombre</strong>: {nombre}</li>
          <li><strong className='text-bold'>Apellidos</strong>: {apellidos}</li>
          <li><strong className='text-bold'>Correo</strong>: {correo}</li>
        </ul>
      </div>

    </main>
  )
}

export default App
