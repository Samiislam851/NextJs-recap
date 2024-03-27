'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import QueryProvider from '@/providers/QueryProvider'
import axios from 'axios'
import store, { persistor } from '@/store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <body className={inter.className}>

        <PersistGate persistor={persistor}>
          <Provider store={store}>
            <QueryProvider>

              {children}

            </QueryProvider>
          </Provider>
        </PersistGate>
      </body>
    </html>
  )
}
