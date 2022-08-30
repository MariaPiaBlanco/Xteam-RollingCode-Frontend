import React from 'react'
import { useParams } from 'react-router-dom';
import UpdateCategoryForm from '../../components/updateCategoryForm/UpdateCategoryForm';

const UpdateCategorie = () => {
  const { id } = useParams();

  return (
    <div>
      <UpdateCategoryForm idCategorie={id} />
    </div>
  )
}

export default UpdateCategorie