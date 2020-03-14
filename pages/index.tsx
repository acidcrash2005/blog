import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import gql from 'graphql-tag'
import { withApollo } from '../hoc/apollo'
import { useQuery } from '@apollo/react-hooks'
import GET_USERS from './getUsers.gql'

const getUsers = gql`${GET_USERS}`;

const IndexPage: NextPage = () => {
    const { data } = useQuery(
        getUsers,
        {
            variables: {
                limit: 100
            },
            // Setting this value to true will make the component rerender when
            // the "networkStatus" changes, so we are able to know if it is fetching
            // more data
            notifyOnNetworkStatusChange: true,
        }
    );

    console.log(data)

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default withApollo({ ssr: true })(IndexPage)
