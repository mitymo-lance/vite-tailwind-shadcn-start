interface PanelProps {
  children: React.ReactNode
  bgColor?: string
  width?: string
}


export default function Panel({ children, bgColor = 'white', width = 'full' }: PanelProps) {
  

  return (
    <div className={`mr-panel bg-${bgColor} rounded-lg shadow-md p-6 space-y-6 mx-2 mb-6 justify-items-center w-${width}`}>
      {children}

    </div>
  )
}