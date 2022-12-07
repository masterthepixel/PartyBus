import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'



    export function WeBrandLeaders() {
        return (
          <Container className="mt-16 sm:mt-32">
            <div className="relative ">
              <div className="lg:absolute lg:inset-0">
                <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 glow-sm ">
                  <img
                    className="object-cover w-full h-56 lg:absolute lg:h-full rounded-xl"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div className="lg:col-start-2 lg:pl-8">
                  <div className="mx-auto text-base max-w-prose lg:ml-auto lg:mr-0 lg:max-w-lg">
                    <h2 className="font-semibold leading-6 text-zinc-800 dark:text-amber-100">Work with us</h2>
                    <h3 className="mt-2 text-5xl font-bold leading-8 tracking-tight text-zinc-800 dark:text-amber-300 sm:text-6xl lg:text-7xl">Welcome to your new leadership strategy </h3>
                    <p className="mt-8 text-lg text-zinc-600 dark:text-zinc-100">
                      Djembe Mediaworks with current and future leaders seeking to make an impact, drive real ROI and leave a legacy—no matter the industry. We teach people how to leverage their authentic selves through unique brand identity and personal branding strategy development to support their businesses.
                    </p>
                    <div className="mt-5 prose text-zinc-600 dark:text-zinc-100 prose-blue">
                      <p>
                        Entrepreneurs: business leaders and the faces of brands and businesses. We craft and amplify your message through bespoke personal branding strategy development. See our solutions for entrepreneurs.
                      </p>
                      
                      <p>
                        One that yields:
                      </p>
                      <ul role="list" className="dark:marker:text-white text-zinc-600 dark:text-zinc-100 marker:text-zinc-600">
                        <li>More exposure.</li>
                        <li>More audiences.</li>
                        <li>More clients.</li>
                        <li>More opportunities.</li>
                        <li>More revenue.</li>
                        <li>More authenticity.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          
        )
      }