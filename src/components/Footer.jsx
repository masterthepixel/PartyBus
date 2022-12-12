import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-blue-500 dark:hover:text-blue-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="pt-10 pb-16 border-t border-zinc-100 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 font-medium text-zinc-800 dark:text-zinc-200 font-body">
                <NavLink href="/articles">Blog</NavLink>
                {/*  
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/speaking">Speaking</NavLink> 
                <NavLink href="/about">About</NavLink> 
                <NavLink href="/uses">Uses</NavLink>
                */}
              </div>
              <p className="text-base text-zinc-800 dark:text-zinc-200">
                &copy; {new Date().getFullYear()} Pro-Bus, LLC. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
