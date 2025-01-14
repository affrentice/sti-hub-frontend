// Third-party Imports
import CredentialProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

import type { NextAuthOptions } from 'next-auth'

// Mock user data for demonstration
type UserTable = {
  id: number
  name: string
  email: string
  image?: string
  password: string
}

const users: UserTable[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'admin@innolink.com',
    password: 'admin',
    image: '/images/avatars/9.png'
  }
]

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialProvider({
      name: 'Credentials',
      type: 'credentials',
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials as { email: string; password: string }

        if (!email || !password) {
          console.error('Missing email or password')
          throw new Error('Email and Password are required')
        }

        console.log('Validating user:', email)

        const user = users.find(u => u.email === email && u.password === password)

        if (!user) {
          console.error('Invalid credentials for:', email)
          throw new Error('Email or Password is invalid')
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, id, ...filteredUserData } = user

        return {
          ...filteredUserData,
          id: id.toString()
        }
      }
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },

  pages: {
    signIn: '/login'
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name
      }

      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.name
      }

      return session
    }
  }
}
