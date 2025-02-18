/*
  Sudoku
  Andrew Mainella
*/
import { ReactNode } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function GoogleProvider({
  children
}:{
  children: ReactNode
}) {
  return (
    <GoogleOAuthProvider clientId='94813812988-uoomdutrt7tn4rraa3dpe9ni8ghuvi5m.apps.googleusercontent.com' >
      {children}
    </GoogleOAuthProvider>
  )
}