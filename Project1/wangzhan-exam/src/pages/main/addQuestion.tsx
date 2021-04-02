import React, { useEffect } from 'react'

const AddQuestion:React.FC = props=>{
    useEffect(() => {
        fetch('http://baidu.com/user/list')
    }, [])

    return <div>

    </div>
}
export default AddQuestion