import React from 'react';

// api gateway call to lambda function send email
export default function sendEmail (email, subject, body) {
  return fetch('https://s1w6jqswne.execute-api.us-west-2.amazonaws.com/production/submit', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, subject, body })
  })
}