import React, { useContext } from 'react'
import { AuthContext } from '../Components/AuthProvider/AuthProvider'

export default function useAuth() {
  const auth = useContext(AuthContext)
  return auth;
}
