import { useCallback, useEffect, useRef, useState } from 'react'
import type { MenuPage } from '../types/menu'
import './MenuBook.css'

const FLIP_MS = 880

export type MenuBookLabels = {
  hint: string
  prev: string
  next: string
  goTo: string
  navRegion: string
}

type MenuBookProps = {
  pages: MenuPage[]
  labels: MenuBookLabels
}

export function MenuBook({ pages, labels }: MenuBookProps) {
  const [peeled, setPeeled] = useState(0)
  const [flipForward, setFlipForward] = useState(false)
  const [unpeel, setUnpeel] = useState(false)
  const [animating, setAnimating] = useState(false)
  const peeledRef = useRef(0)
  const jumpLock = useRef(false)
  const touchStartX = useRef<number | null>(null)

  peeledRef.current = peeled

  useEffect(() => {
    setPeeled(0)
    peeledRef.current = 0
    setFlipForward(false)
    setUnpeel(false)
    setAnimating(false)
  }, [pages])

  const atStart = peeled === 0 && !flipForward && !unpeel
  const atEnd = peeled >= pages.length - 1 && !flipForward && !unpeel

  const goNext = useCallback(() => {
    if (jumpLock.current) return
    if (peeledRef.current >= pages.length - 1) return
    setAnimating(true)
    setFlipForward(true)
    window.setTimeout(() => {
      setPeeled((p) => {
        const n = Math.min(p + 1, pages.length - 1)
        peeledRef.current = n
        return n
      })
      setFlipForward(false)
      setAnimating(false)
    }, FLIP_MS)
  }, [pages.length])

  const goPrev = useCallback(() => {
    if (jumpLock.current) return
    if (peeledRef.current <= 0) return
    setAnimating(true)
    setUnpeel(true)
    window.setTimeout(() => {
      setPeeled((p) => {
        const n = Math.max(p - 1, 0)
        peeledRef.current = n
        return n
      })
      setUnpeel(false)
      setAnimating(false)
    }, FLIP_MS)
  }, [])

  const jumpTo = useCallback(
    async (target: number) => {
      if (jumpLock.current) return
      if (peeledRef.current === target) return
      jumpLock.current = true
      setAnimating(true)
      try {
        let p = peeledRef.current
        while (p !== target) {
          const forward = target > p
          if (forward) {
            if (p >= pages.length - 1) break
            await new Promise<void>((resolve) => {
              setFlipForward(true)
              window.setTimeout(() => {
                setPeeled((cur) => {
                  const n = Math.min(cur + 1, pages.length - 1)
                  peeledRef.current = n
                  return n
                })
                setFlipForward(false)
                resolve()
              }, FLIP_MS)
            })
          } else {
            if (p <= 0) break
            await new Promise<void>((resolve) => {
              setUnpeel(true)
              window.setTimeout(() => {
                setPeeled((cur) => {
                  const n = Math.max(cur - 1, 0)
                  peeledRef.current = n
                  return n
                })
                setUnpeel(false)
                resolve()
              }, FLIP_MS)
            })
          }
          p = peeledRef.current
        }
      } finally {
        setAnimating(false)
        jumpLock.current = false
      }
    },
    [pages.length],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (dx < -48) goNext()
    else if (dx > 48) goPrev()
  }

  const zForIndex = (i: number) => {
    if (i < peeled) return i
    if (i === peeled && flipForward) return 400
    if (unpeel && i === peeled - 1) return 400
    return 200 + (pages.length - i)
  }

  return (
    <div className="menu-book-wrap">
      <p className="menu-book-hint">{labels.hint}</p>

      <div
        className="menu-book-stage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="menu-book-perspective">
          <div className="menu-book-shadow" aria-hidden />
          <div className="menu-book-stack">
            {pages.map((page, i) => {
              const isFullyPeeled =
                i < peeled - 1 || (i === peeled - 1 && !unpeel)
              const isReversing = unpeel && i === peeled - 1
              const isTop = i === peeled

              let cls = 'menu-page'
              if (isFullyPeeled) cls += ' menu-page--peeled'
              if (isReversing) cls += ' menu-page--peeled-reversing'
              if (isTop && flipForward) cls += ' menu-page--flip-out'

              return (
                <article
                  key={page.id}
                  className={cls}
                  style={{ zIndex: zForIndex(i) }}
                  aria-hidden={!isTop && !isReversing}
                >
                  <div className="menu-page-inner">
                    <div className="menu-page-face menu-page-face--front">
                      {page.dishes.length === 0 ? (
                        <div className="menu-page-cover">
                          <span className="menu-page-ornament" aria-hidden>
                            ✦
                          </span>
                          <h2 className="menu-page-title">{page.title}</h2>
                          {page.subtitle && (
                            <p className="menu-page-sub">{page.subtitle}</p>
                          )}
                        </div>
                      ) : (
                        <>
                          <header className="menu-page-header">
                            <h2 className="menu-page-title">{page.title}</h2>
                            {page.subtitle && (
                              <p className="menu-page-sub">{page.subtitle}</p>
                            )}
                          </header>
                          <ul className="menu-page-list">
                            {page.dishes.map((d) => (
                              <li key={d.name}>
                                <span className="menu-dish-name">{d.name}</span>
                                <span className="menu-dish-detail">{d.detail}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                    <div
                      className="menu-page-face menu-page-face--back"
                      aria-hidden
                    >
                      <div className="menu-page-back-art" />
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <nav className="menu-book-nav" aria-label={labels.navRegion}>
          <button
            type="button"
            className="menu-book-btn"
            onClick={goPrev}
            disabled={atStart || animating}
            aria-label={labels.prev}
          >
            ‹
          </button>
          <div className="menu-book-dots" role="tablist">
            {pages.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === peeled}
                aria-label={`${labels.goTo} ${p.title}`}
                className={
                  i === peeled
                    ? 'menu-book-dot menu-book-dot--active'
                    : 'menu-book-dot'
                }
                disabled={animating}
                onClick={() => jumpTo(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="menu-book-btn"
            onClick={goNext}
            disabled={atEnd || animating}
            aria-label={labels.next}
          >
            ›
          </button>
        </nav>
      </div>
    </div>
  )
}
