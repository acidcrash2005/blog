import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { useQuery } from '@apollo/react-hooks';
import { GetUsersQuery, GetUsersQueryVariables } from 'types/gql';
import { withApollo } from 'hoc/apollo';
import GET_USERS from 'gql/query/getUsers.gql';


const IndexPage: NextPage = () => {
  const { data } = useQuery<GetUsersQuery, GetUsersQueryVariables>(GET_USERS, {
    variables: {
      limit: 100,
    },

    notifyOnNetworkStatusChange: true,
  });

  const users = data?.users;

  return (
    <>
      <h1>
        Hello Next.js
        <span role="img" aria-label="hello hand">
          👋
        </span>
      </h1>

      <div>
        <Link href="/about">
          About
        </Link>
      </div>
      <div>
        <Link href="/registration">
          Register
        </Link>
      </div>

      <ul>
        {users?.map((user, index) => (
          <li key={`${user?.id}${index}`}>{user?.username ?? ''}</li>
        ))}
      </ul>
    </>
  );
};

export default withApollo({ ssr: true })(IndexPage);
