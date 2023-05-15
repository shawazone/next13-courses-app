import Repo from '@/app/component/Repo'
import RepoDirs from '@/app/component/RepoDirs'
import Link from 'next/link'
import React, { Suspense } from 'react'

const RepoPage = ({params : {name}}) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back To Repositories
      </Link>
      <Suspense fallback={<div>loading repo...</div>}>
    <Repo name={name}></Repo>
    </Suspense>

    <Suspense fallback={<div>laoding directories...</div>}>
    <RepoDirs name={name}></RepoDirs>
    </Suspense>
    </div>
  )
}

export default RepoPage
