import { useState } from 'react'

export function useForm (intialControlValue = {}) {
  const [controles, setControles] = useState(intialControlValue)

  const handleChange = (e) => {
    const { name, value } = e.target
    setControles({
      ...controles,
      [name]: value
    })
  }

  const reset = () => {
    setControles(intialControlValue)
  }

  return {
    ...controles,
    handleChange,
    reset
  }
}
