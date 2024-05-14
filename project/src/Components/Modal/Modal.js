import React from 'react'

export default function Modal({isOpen, closeModal, user}) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <div>
        <button onClick={closeModal}>Close</button>
        <img src={user.avatar_url} alt={user.login} style={{ width: '100px' }} />
        <p>Name: {user.name}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>Location: {user.location}</p>
      </div>
    </Modal>
  )
}
