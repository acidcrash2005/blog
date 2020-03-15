import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { withApollo } from 'hoc/apollo';
import { AddUserMutation, AddUserMutationVariables } from 'types/gql';
import ADD_USER from 'gql/mutations/addUser.gql';

const Registration: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [
    addUser, { data, error },
  ] = useMutation<AddUserMutation, AddUserMutationVariables>(ADD_USER);

  return (
    <div>
      <div>email:</div>
      <input
        type="mail"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <div>username:</div>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <div>pass:</div>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <br />
      <button
        type="button"
        onClick={() => {
          if (username && password && email) {
            addUser({
              variables: {
                username,
                pass: password,
                email,
              },
            });
          }
        }}
      >
        Submit
      </button>

      <div>
        { data && data?.createUser?.user?.id }
      </div>
      <div>
        { data && data?.createUser?.user?.email }
      </div>
      <div>
        { data && data?.createUser?.user?.username }
      </div>
      <div>
        { error && error.message }
      </div>
    </div>
  );
};

export default withApollo({ ssr: true })(Registration);
