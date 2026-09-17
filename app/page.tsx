'use client'

import { useState } from 'react'

const coverImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mughal-garden-wedding-invitation-blend-tradition-royal-charm-vector-design_1269290-2456-MMYUwoysSLDcPEkuuo106sHcXpyqsJ.jpg'
const innerImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2017%2C%202026%2C%2012_03_46%20PM-RNaXkLvcUwdAs8FdY2VKEhnSFEunld.png'

export default function Page() {
  const [opened, setOpened] = useState(false)

  return (
    <main className={`invitation-shell ${opened ? 'is-open' : ''}`}>
      <div className="ambient-orb ambient-orb-left" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-right" aria-hidden="true" />
      <section className="invitation-stage" aria-label="Aisha and Ahmed wedding invitation">
        <div className="invitation-stack">
          <article className="inner-card" aria-hidden={!opened}>
            <div className="inner-art" style={{ backgroundImage: `url(${innerImage})` }} />
            <div className="inner-copy">
              <p className="bismillah" lang="ar">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
              <p className="translation">In the Name of Allah, The Most Gracious, The Most Merciful</p>
              <p className="blessing">With the blessings of Allah Almighty</p>
              <p className="invite-line">Mr. &amp; Mrs. Saeed<br />cordially invite you to celebrate the marriage of their beloved daughter</p>
              <p className="person">DAUGHTER OF SAEED</p>
              <p className="with-line">with</p>
              <p className="person">SON OF TAHIR MAHMOOD</p>
              <p className="barat">✦ BARAT ✦</p>
              <a className="venue location-link" href="https://www.google.com/maps/search/?api=1&query=Golden%20Pearl%20Marquee%2C%20Adyala%20Road%2C%20Rawalpindi" target="_blank" rel="noreferrer" aria-label="Open Golden Pearl Marquee in Google Maps">Golden Pearl Marquee<br />Adyala Road, Rawalpindi<span className="map-label">View location on map</span></a>
              <p className="date-time">Saturday, 24 October 2026<br />7:30 PM</p>
            </div>
            <button className="close-button" type="button" onClick={() => setOpened(false)}>
              Close invitation
            </button>
          </article>

          <article className="cover-card">
            <div className="cover-art" style={{ backgroundImage: `url(${coverImage})` }} />
            <div className="cover-overlay">
              <p className="cover-title"><span>A &amp; A</span><br /><strong>Wedding</strong></p>
              {!opened && (
                <button className="open-button" type="button" onClick={() => setOpened(true)}>
                  Tap to open
                </button>
              )}
            </div>
          </article>
        </div>
      </section>
      <p className="screen-note">A celebration of love, family &amp; forever</p>
    </main>
  )
}

