import { MainNav } from "./MainNav"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  return (
    <>
      <div className="bg-background">
        <MainNav /> {/* Include Main Navigation */}
        <div className="flex justify-center mb-4">
          {" "}
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}
