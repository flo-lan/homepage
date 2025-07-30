import React, { ReactElement, useState } from 'react'
import { ServicePages } from './Services.types'
import ServicesMenu from './ServicesMenu'

const Services = (): ReactElement => {
  const [selectedMenu, setSelectedMenu] = useState(ServicePages.WebApps)

  return (
    <div className="h-full p-8 md:p-20 flex flex-col">
      <div
        className="sm:grid grid-flow-col gap-4 h-full"
        style={{ gridTemplateRows: '50px calc(100% - 50px)' }}
      >
        <div className="col-span-2 prose pb-12">
          <h1>Unsere Services</h1>
        </div>
        <ServicesMenu onMenuClick={(index: number) => setSelectedMenu(index)} />

        {selectedMenu === ServicePages.WebApps && (
          <>
            <article className="prose">
              <h2>Web-Apps</h2>
              <p>
                Wir entwickeln Enterprise Software auf Basis von
                State-of-the-Art Technologien um ihre Prozesse effizienter und
                angenehmer zu gestalten. Von Backend Programmierung mit Hosting
                + Deployment bis zu einer zugänglichen Browseranwendung sind wir
                bemüht maßgeschneiderte und vollständige Lösungen anzubieten.
              </p>
              <ul>
                <li>Rapid Prototyping</li>
                <li>Responsive Design</li>
                <li>SEO Optimierung</li>
              </ul>
              <h3>Technologien</h3>
              <div className="flex flex-wrap gap-4">
                <div className="badge">Typescript</div>
                <div className="badge">React.js</div>
                <div className="badge">NestJS</div>
                <div className="badge">Node.js</div>
                <div className="badge">GraphQL</div>
                <div className="badge">Java</div>
                <div className="badge">Spring Boot</div>
                <div className="badge">Gitlab CI</div>
              </div>
            </article>
            <div className="invisible xl:visible h-0 w-0 xl:h-full xl:w-full mockup-window border row-span-2 g-base-300">
              <div className="flex h-full w-full justify-center px-4 py-16 bg-base-200">
                <div className="invisible">TODO: Mockup Content</div>
              </div>
            </div>
          </>
        )}
        {selectedMenu === ServicePages.MobileApps && (
          <>
            <article className="prose">
              <h2>Mobile Apps</h2>
              <p>
                Mittels Platform-agnostischen Frameworks entwickeln wir in
                Rekordzeit native Apps für iOS und Android Geräte und sparen
                zusätzlich viel Zeit, der in die Wartung separater Software je
                nach Platform anfallen würde. Von Produktivitäts bis zu
                Unterhaltungs-Apps hören wir uns gerne gespannt Ihre Ideen an.
              </p>
              <h3>Technologien</h3>
              <div className="flex flex-wrap gap-4">
                <div className="badge">Android SDK</div>
                <div className="badge">Typescript</div>
                <div className="badge">React Native</div>
                <div className="badge">Expo</div>
                <div className="badge">Flutter</div>
                <div className="badge">Dart</div>
              </div>
            </article>
            <div
              style={{ maxWidth: 320 }}
              className="row-span-2 mockup-phone h-fit invisible xl:visible h-0 w-0 xl:h-full xl:w-full"
            >
              <div className="camera" />
              <div className="display">
                <div className="artboard artboard-demo phone-1" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Services
