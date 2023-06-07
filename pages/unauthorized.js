import { useRouter } from 'next/router';
import React from 'react';
import FormContainer from './../components/FormContainer';


export default function Unauthorized() {

  const router = useRouter();
  const { message } = router.query;

  return (
    <FormContainer>
      <h1 className="text-xl">Access Denied</h1>
      {message && <div className="text-danger">{message}</div>}
    </FormContainer>
  );
}