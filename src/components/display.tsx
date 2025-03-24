interface DisplayProps {
  children: React.ReactNode
  title?: string
  width?: string
  grow?: number
}


export default function Display({ children, title = 'Display', width = 'full', grow = 1 }: DisplayProps) {
  

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 space-y-6 mx-4 mb-6 justify-items-center w-${width}`}>
      <div className="items-center">
      <div className="space-y-2">
        <h2 className="text-sm font-semibold text-gray-800 text-center">{title}</h2>
        <div className="text-4xl font-bold text-blue-600 text-center">
          {children}
        </div>
      </div>
      </div>
    </div>
  )
}