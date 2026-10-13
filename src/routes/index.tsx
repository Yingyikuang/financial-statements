import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to Kissena Baked Goods</h1>
      <h2 className="text-2xl">Financial statements</h2>
      <p className= 'text-md text-green'>We are a new company. Year 2025 is our first full year of operations. On this site, we will disclose the financial statements for our investors.</p>
    </div>
    
  )
}
