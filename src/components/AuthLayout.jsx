import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({
    children,
    authentication = true,
}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    useEffect(()=>())
    return (
        <div>AuthLayout</div>
    )
}

export default Protected