// eslint-disable-next-line react/prop-types
export function UserList ({ users = [] }) {
  return (
    <ul className='border-2 border-black p-2 my-5 flex flex-col gap-3'>
      {
        users.map(
          (item) => (
            <li key={item.id}>{item.nombre} {item.apellidos} ({item.correo})</li>
          )
        )
      }
    </ul>
  )
}
