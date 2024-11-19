import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Sharedoutlet() {
    return (<>
        <Header />
        <Outlet />
    </>
    )
}

export default Sharedoutlet