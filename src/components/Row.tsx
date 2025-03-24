interface RowProps {
  children: React.ReactNode
}

export default function Row({ children }: RowProps) {
  return (
    <div name="row" className="flex clear-both py-4 mx-2">
      {children}
    </div>
  )
}