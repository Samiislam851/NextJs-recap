'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import QueryProvider from '@/providers/QueryProvider'
import axios from 'axios'
import store, { persistor } from '@/store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
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
