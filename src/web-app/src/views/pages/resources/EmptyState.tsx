'use client'

interface EmptyStateProps {
  message: string
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className='col-span-full flex flex-col items-center justify-center py-12'>
      <i className='ri-file-search-line text-5xl text-gray-400 mb-4' />
      <p className='text-gray-500 text-lg'>{message}</p>
    </div>
  )
}
