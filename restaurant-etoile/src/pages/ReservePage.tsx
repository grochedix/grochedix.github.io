import { useEffect, useMemo, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { startOfToday } from 'date-fns'
import { de, enGB, fr, nl } from 'date-fns/locale'
import 'react-day-picker/style.css'
import { useI18n } from '../i18n/useI18n'
import type { Locale } from '../types/locale'
import {
  firstBookableDate,
  getBookableSlots,
  isDayFullyUnavailable,
  isLunchSlot,
} from '../lib/bookingSlots'

const dateLocaleMap: Record<Locale, typeof fr> = {
  fr,
  en: enGB,
  nl,
  de,
}

function slotLabel(
  hhmm: string,
  u: {
    periodLunch: string
    periodDinner: string
  },
): string {
  const period = isLunchSlot(hhmm) ? u.periodLunch : u.periodDinner
  return `${hhmm} — ${period}`
}

export function ReservePage() {
  const { locale, u } = useI18n()
  const [date, setDate] = useState<Date>(() => firstBookableDate())
  const [time, setTime] = useState<string>(() => {
    const d = firstBookableDate()
    return getBookableSlots(d)[0] ?? ''
  })
  const [guests, setGuests] = useState(2)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const df = dateLocaleMap[locale]

  const slots = useMemo(
    () => (date ? getBookableSlots(date) : []),
    [date],
  )

  useEffect(() => {
    if (!date) return
    const next = getBookableSlots(date)
    setTime((prev) => {
      if (next.length === 0) return ''
      if (prev && next.includes(prev)) return prev
      return next[0]
    })
  }, [date])

  const dateLabel = useMemo(() => {
    if (!date) return '—'
    return date.toLocaleDateString(locale === 'en' ? 'en-GB' : locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }, [date, locale])

  const { periodLunch, periodDinner } = u.reserve
  const timeSummary = useMemo(() => {
    if (!time) return '—'
    return slotLabel(time, { periodLunch, periodDinner })
  }, [time, periodLunch, periodDinner])

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!date || !time || slots.length === 0) return
    setSent(true)
  }

  const disabledMatchers = useMemo(
    () => [
      { before: startOfToday() },
      { dayOfWeek: 1 },
      (d: Date) => isDayFullyUnavailable(d),
    ],
    [],
  )

  return (
    <main className="page-main reserve-page">
      <header className="page-hero">
        <p className="section-kicker">{u.reserve.kicker}</p>
        <h1 className="page-title">{u.reserve.title}</h1>
        <p className="reserve-intro">{u.reserve.intro}</p>
        <p className="reserve-hours-hint">{u.reserve.hoursHint}</p>
      </header>

      <form className="reserve-form" onSubmit={onSubmit}>
        <div className="reserve-picker">
          <fieldset className="reserve-fieldset">
            <legend>{u.reserve.date}</legend>
            <DayPicker
              mode="single"
              selected={date}
              onSelect={(d) => {
                setSent(false)
                if (d) setDate(d)
              }}
              locale={df}
              weekStartsOn={1}
              disabled={disabledMatchers}
              className="rdp-dark"
              captionLayout="label"
            />
          </fieldset>

          <div className="reserve-side">
            <label className="reserve-label">
              {u.reserve.time}
              <select
                className="reserve-input"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                disabled={slots.length === 0}
                required
              >
                {slots.length === 0 ? (
                  <option value="">{u.reserve.noSlots}</option>
                ) : (
                  slots.map((t) => (
                    <option key={t} value={t}>
                      {slotLabel(t, u.reserve)}
                    </option>
                  ))
                )}
              </select>
            </label>

            <label className="reserve-label">
              {u.reserve.guests}
              <select
                className="reserve-input"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {u.reserve.guestOption(n)}
                  </option>
                ))}
              </select>
            </label>

            <label className="reserve-label">
              {u.reserve.name}
              <input
                className="reserve-input"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

            <label className="reserve-label">
              {u.reserve.email}
              <input
                className="reserve-input"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <button
              type="submit"
              className="reserve-submit"
              disabled={slots.length === 0 || !time}
            >
              {u.reserve.submit}
            </button>
            <p className="reserve-demo">{u.reserve.demo}</p>
          </div>
        </div>
      </form>

      {sent && (
        <output className="reserve-output" aria-live="polite">
          <strong>{u.reserve.success}</strong>
          <span>
            {dateLabel} · {timeSummary} · {u.reserve.guestOption(guests)}
          </span>
          <span>
            {name} · {email}
          </span>
        </output>
      )}
    </main>
  )
}
