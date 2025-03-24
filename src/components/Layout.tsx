import Footer from './Footer'
import Navbar from './Navbar'

const user = {
  name: 'Mark Carman', 
  email: 'mark@motionrocket.com', 
  imageUrl: 'https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869121.jpg',
}

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

const userNavigation = [
  { name: 'Profile', href: '#' }, 
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

interface LayoutProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
}

export default function Layout({ children, title = 'Scoreboard', subtitle = 'Welcome to the scoring system. Please sit and have a doughnut.' }: LayoutProps) {
  return (
    <div className="min-h-full">
      <Navbar navigation={navigation} userNavigation={userNavigation} user={user} />
        

      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title} <span className="text-gray-500 text-sm">{subtitle}</span></h1>
        </div>
      </header>
      <main className="w-full bg-gray-100">
        <div className="w-full max-w-5xl mx-auto">
          <div className="min-h-screen w-full">
            {children}
          </div>
        </div>
      </main>
      
      <Footer>
        Uses <a href="https://tailwindcss.com/" className="text-blue-500">Tailwind CSS</a> and <a href="https://shadcn.com/" className="text-blue-500">Shadcn</a> for styling and components.
      </Footer>
      
    </div>
    
    
  )
}