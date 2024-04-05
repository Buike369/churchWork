import React from 'react'
import {useParams} from 'react-router-dom'
const Eventpage = () => {
  const {id} = useParams();

  console.log(id)
  return (
    <div>
        hello Mr Kingsley
    </div>
  )
}

export default Eventpage