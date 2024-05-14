import React from 'react'
import Item from '../Item/Item'

export default function List({ users }) {
  return (
    <div>
      {users.map((user) => (
        <Item key={user.id} user={user} />
      ))}
    </div>
  )
}

