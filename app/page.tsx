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
              <p className="invite-line">Mr. &amp; Mrs. Tahir Mahmood<br />cordially invite you to celebrate the marriage of their beloved son</p>
              <p className="person">SON OF TAHIR MAHMOOD</p>
              <p className="with-line">with</p>
              <p className="person">DAUGHTER OF SAEED</p>
              <p className="barat">✦ WALIMA ✦</p>
              <a className="venue location-link" href="https://www.google.com/maps/dir//Elegance+Marquee,+Missile+Chowk,+Beside+KRL+Community+Hall+Marquee+Zone,+Service+Road+W,+Islamabad+Expy,+Islamabad,+45720,+Pakistan/@33.5217094,73.0988544,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x38dfeb2b1bc1f3e9:0x30606eab52136e4f!2m2!1d73.1130752!2d33.6234741" target="_blank" rel="noreferrer" aria-label="Open Elegance Marquee in Google Maps">Elegance Marquee<br />Missile Chowk, Islamabad<span className="map-label">View location on map</span></a>
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

