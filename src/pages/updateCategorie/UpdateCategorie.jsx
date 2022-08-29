import React from 'react'
import { useParams } from 'react-router-dom';
import UpdateCategoryForm from '../../components/updateCategoryForm/UpdateCategoryForm';

const UpdateCategorie = () => {
  const { id } = useParams();
  // const getCategorie = async () => {
  //   const categorieData = await axios(`${process.env.REACT_APP_URL_BASE}/category/${id}`);
  //   console.log(categorieData)
  // };

  // useEffect(() => {
  //   getCategorie();
  // }, [])
  
  

  return (
    <div>
      <UpdateCategoryForm idCategorie={id} />
    </div>
  )
}

export default UpdateCategorie