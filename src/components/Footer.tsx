interface FooterProps {
  children: React.ReactNode
}

export default function Footer({ children }: FooterProps) {
  return (
    <div className="bg-white shadow-md mt-8 w-full">
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600">
          {children}
        </p>
      </div>
    </div>
  )
}