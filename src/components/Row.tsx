interface RowProps {
  children: React.ReactNode
}

export default function Row({ children }: RowProps) {
  return (
    <div className="mr-row flex flex-row justify-stretch clear-both py-4 mx-2 w-full">
      {children}
    </div>
  )
}