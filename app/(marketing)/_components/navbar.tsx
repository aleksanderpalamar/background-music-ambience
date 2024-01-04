
export const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 w-full h-20 px-4 md:px-4 border-b 
    shadow-sm bg-white/10 backdrop-blur-lg dark:bg-zinc-900/10 dark:backdrop-blur-lg 
    flex items-center justify-between">
      <div className="w-full h-full px-2 flex items-center justify-between max-w-6xl mx-auto">
        <h1>Logo</h1>
        <div>
          <button>Sign in</button>
        </div>
      </div>       
    </nav>
  )
}