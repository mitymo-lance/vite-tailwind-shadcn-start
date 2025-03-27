interface DisplayProps {
  children: React.ReactNode
  title?: string
  width?: string
  type?: string
}


export default function Display({ children, title = 'Display', width = '', type = ''}: DisplayProps) {
  

  return (
    <div className={`mr-display justify-items-center w-${width} ${type}`}>
      <div className="space-y-2">
        <h2 className="text-md font-semibold text-gray-800 text-center uppercase font-mono text-stone-500">{title}</h2>
        <div className="text-4xl font-bold text-blue-600 text-center">
          {children}
        </div>
      </div>
    </div>
  )
}