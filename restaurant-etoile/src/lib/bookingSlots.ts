import { addDays, isSameDay, startOfToday } from 'date-fns'

/** Créneaux début de service (pas après la fin du service) */
const LUNCH_SLOTS = ['12:00', '12:30', '13:00', '13:30'] as const
const DINNER_SLOTS = [
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
] as const

export function isRestaurantMonday(date: Date): boolean {
  return date.getDay() === 1
}

export function isLunchSlot(hhmm: string): boolean {
  return (LUNCH_SLOTS as readonly string[]).includes(hhmm)
}

export function allSlotsForOpenDay(): string[] {
  return [...LUNCH_SLOTS, ...DINNER_SLOTS]
}

function atDateTime(day: Date, hhmm: string): Date {
  const [h, m] = hhmm.split(':').map(Number)
  const d = new Date(day)
  d.setHours(h, m, 0, 0)
  return d
}

/** Créneaux encore réservables pour ce jour (exclut lundi ; pour aujourd’hui, enlève les heures passées). */
export function getBookableSlots(day: Date, now: Date = new Date()): string[] {
  if (isRestaurantMonday(day)) return []
  const slots = allSlotsForOpenDay()
  if (!isSameDay(day, now)) return [...slots]
  return slots.filter((hhmm) => atDateTime(day, hhmm) > now)
}

/** Premier jour à partir d’aujourd’hui avec au moins un créneau. */
export function firstBookableDate(now: Date = new Date()): Date {
  const start = startOfToday()
  for (let i = 0; i < 366; i += 1) {
    const d = addDays(start, i)
    if (getBookableSlots(d, now).length > 0) return d
  }
  return start
}

export function isDayFullyUnavailable(day: Date, now: Date = new Date()): boolean {
  return getBookableSlots(day, now).length === 0
}
