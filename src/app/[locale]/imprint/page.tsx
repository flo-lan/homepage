import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Portfolio: NextPage = () => {
  const t = useTranslations('Imprint')

  return (
    <div className="page h-full">
      <div className="prose p-8 ">
        <h1>{t('title')}</h1>
      </div>
      <div className="separator" />

      <div className="justify-center flex p-8 w-full">
        <table className="table table-zebra table-fixed">
          <tbody>
            <tr>
              <td className="whitespace-normal">
                <strong>{t('companyTitle')}</strong>
              </td>
              <td className="whitespace-normal">
                <strong>{t('company')}</strong>
                <br />
                {t('address.street')}
                <br />
                {t('address.cityPostCode')}
                <br />
                {t('address.country')}
              </td>
            </tr>
            <tr>
              <td className="whitespace-normal">
                <strong>{t('emailTitle')}</strong>
              </td>
              <td className="whitespace-normal">
                <div
                  className="relative "
                  style={{ height: '21px', width: '164px' }}
                >
                  <Image
                    src="/mail_black.png"
                    alt="mail"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="whitespace-normal">
                <strong>{t('ownerTitle')}</strong>
              </td>
              <td className="whitespace-normal">{t('owner')}</td>
            </tr>
            <tr>
              <td className="whitespace-normal">
                <strong>{t('registerNumberTitle')}</strong>
              </td>
              <td className="whitespace-normal">{t('registerNumber')}</td>
            </tr>
            <tr>
              <td className="whitespace-normal">
                <strong>{t('vatIdTitle')}</strong>
              </td>
              <td className="whitespace-normal">{t('vatId')}</td>
            </tr>
            <tr>
              <td className="whitespace-normal">
                <strong>{t('registerCourtTitle')}</strong>
              </td>
              <td className="whitespace-normal">{t('registerCourt')}</td>
            </tr>
            <tr>
              <td className="whitespace-normal">
                <strong>{t('businessActivityTitle')}</strong>
              </td>
              <td className="whitespace-normal">{t('businessActivity')}</td>
            </tr>
            <tr>
              <td className="whitespace-normal">
                <strong>{t('tradeRegulationsTitle')}</strong>
              </td>
              <td className="whitespace-normal">
                <a href="ris.bka.gv.at">{t('tradeRegulations')}</a>
              </td>
            </tr>
            <tr>
              <td className="whitespace-normal">
                <strong>{t('bank.title')}</strong>
              </td>
              <td className="whitespace-normal">
                {t('bank.bankName')}
                <br />
                {t('bank.iban')}
                <br />
                {t('bank.bic')}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Portfolio
