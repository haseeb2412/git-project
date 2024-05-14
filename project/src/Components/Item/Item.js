import React from 'react'

export default function Item({user}) {
  return (
    <div>
    <img src={user.avatar_url} alt={user.login} style={{ width: '50px' }} />
    <p>{user.login}</p>
    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
      Github Profile
    </a>
  </div>
  )
}
