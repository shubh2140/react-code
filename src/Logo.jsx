import React from 'react'

const Logo = () => {
  const user = {
    name: "Laxmi Bai",
    img: 'https://i.imgur.com/yXOvdOSs.jpg',
    size: 150
  }
  return (
    <div>
        <h1>{user.name}</h1>
        <img className='avatar' src={user.img} alt={"Photo of "+ user.name} />
    </div>
  )
}

export default Logo