import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

const Portfolio: NextPage = () => (
  <div className="page h-full">
    <div className="prose p-8 ">
      <h1>Impressum</h1>
    </div>
    <div className="separator" />

    <div className="justify-center flex p-8 w-full">
      <table className="table table-zebra table-fixed">
        <tbody>
          <tr>
            <td className="whitespace-normal">
              <strong>Firma</strong>
            </td>
            <td className="whitespace-normal">
              <strong>Coderain e.U.</strong>
              <br />
              Claretinergasse 3/3/9
              <br />
              1220 Wien
              <br />
              Österreich
            </td>
          </tr>
          <tr>
            <td className="whitespace-normal">
              <strong>Email</strong>
            </td>
            <td className="whitespace-normal">
              <div
                className="relative "
                style={{ height: '21px', width: '164px' }}
              >
                <Image
                  src="/mail_black.png"
                  alt="mail"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td className="whitespace-normal">
              <strong>Geschäftsführer</strong>
            </td>
            <td className="whitespace-normal">Florian Langeder Bsc.</td>
          </tr>
          <tr>
            <td className="whitespace-normal">
              <strong>Firmenbuchnummer</strong>
            </td>
            <td className="whitespace-normal">FN581196a</td>
          </tr>
          <tr>
            <td className="whitespace-normal">
              <strong>UID-Nummer</strong>
            </td>
            <td className="whitespace-normal">ATU78157913</td>
          </tr>
          <tr>
            <td className="whitespace-normal">
              <strong>Firmenbuchgericht</strong>
            </td>
            <td className="whitespace-normal">Handelsgericht Wien</td>
          </tr>
          <tr>
            <td className="whitespace-normal">
              <strong>Gewerbe</strong>
            </td>
            <td className="whitespace-normal">IT-Dienstleistung</td>
          </tr>
          <tr>
            <td className="whitespace-normal">
              <strong>Gewerbeordnung</strong>
            </td>
            <td className="whitespace-normal">
              <a href="ris.bka.gv.at">ris.bka.gv.at</a>
            </td>
          </tr>
          <tr>
            <td className="whitespace-normal">
              <strong>Bankverbindung</strong>
            </td>
            <td className="whitespace-normal">
              Erste Bank der oesterreichischen Sparkassen AG
              <br />
              AT24 2011 1841 4636 9100
              <br />
              GIBAATWWXXX
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default Portfolio
