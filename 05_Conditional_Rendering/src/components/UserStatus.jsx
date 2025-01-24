import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {
  return (
    <div>
      {loggedIn === true && isAdmin === true && <h2>Welcome Admin!</h2>}
      {loggedIn === true && isAdmin === false && <h2>Welcome User!</h2>}
    </div>
  )
}

export default UserStatus
