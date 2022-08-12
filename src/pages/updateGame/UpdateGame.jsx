import React from 'react'
import UpdateGameForm from '../../components/updateGameForm/UpdateGameForm'
import { useParams } from 'react-router-dom';

const UpdateGame = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <UpdateGameForm />
    </div>
  )
}

export default UpdateGame