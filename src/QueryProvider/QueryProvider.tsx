"use client"

import React, { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

interface iQueryProvider {
  children: ReactNode;
}

export default function QueryProvider({ children }: iQueryProvider) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}