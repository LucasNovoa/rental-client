import { useParams } from 'react-router-dom'

import DHeader from './DHeader'
import DFormUser from './DFormUser'

const DEditUser = () => {
  const { id } = useParams()

  return (
    <>
      <DHeader />
      <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <DFormUser />
      </div>
    </>

  )
}

export default DEditUser
