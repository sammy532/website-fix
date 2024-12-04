import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className=" flex flex-row py-12 md:py-16 justify-between">
          <div className="text-blue-200 text-sm ml-4">
            &copy; BetaApps LTD. Company registered in Scotland. Company number 784621. All rights reserved.
          </div>
          <Link href="/deleteaccount" className="text-blue-200 text-sm mr-5">
            Delete Account
          </Link>
      </div>
    </footer>
  )
}
