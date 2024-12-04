export const dynamic = 'force-static'

import { FormData } from 'react';
import Error from 'next/error'
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';


export async function someStupidFunction(data) {
  const apiEndpoint = '/api/hellp-post';

  const res = await axios.get(apiEndpoint, JSON.stringify(data));
  console.log("RES: ", res);
  // res.status(200).json(response.data);
  // const res = await fetch(apiEndpoint, {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //    },
    // })
  if(res.status === 200){
    setEmailSent(true);
  }else{
    setError(true);
  }
}
