import React from 'react'

function Error() {
  return (
    <>
      <div style={{ height:'100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize:'1.5rem' }}>
        <p>Page does not exist</p>
        <p>Go home <a href="/">Home</a> </p>
      </div>
      
    </>
  )
}

export default Error