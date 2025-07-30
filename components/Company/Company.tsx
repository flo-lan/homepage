import Image from 'next/image'
import React, { ReactElement } from 'react'

const Company = (): ReactElement => (
  <div className="p-8 md:p-20 grid grid-cols-1 md:grid-cols-2">
    <div>
      <div className="prose">
        <h1>Moderne Software-Dienstleistungen</h1>
        <div>
          <p>
            Durch aktuelle Standards und stetiger Weiterbildung bieten wir
            einfach wartbare Lösungen an und verringern kümmern uns somit um den
            Bedarf von stetiger Neuentwicklung von bereits funktionierenden
            Systemen.
          </p>
          <p>
            Wir hören uns gerne Ihre Projektanforderungen an, ob klein oder
            umfangreich, bzw. Neuentwicklung oder Instandthaltung.
          </p>
        </div>
      </div>
    </div>
    <div className="">
      <div>
        <div className="relative " style={{ height: '400px' }}>
          <Image src="/team.png" alt="team" layout="fill" objectFit="contain" />
        </div>
        <span className="flex justify-center">
          <a
            className="text-xs text-slate-400"
            href="https://www.freepik.com/vectors/illustrations"
          >
            Illustrations vector created by pch.vector - www.freepik.com
          </a>
        </span>
      </div>
    </div>
  </div>
)

export default Company
