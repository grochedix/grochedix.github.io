/**
 * Images dans /public/images — voir public/images/ATTRIBUTIONS.txt
 */
const publicImage = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const IMAGES = {
  hero: publicImage('images/palais-justice-paris.jpg'),
  brussels: publicImage('images/brussels-royal-palace.jpg'),
  contactLouise: publicImage('images/avenue-louise-brussels.jpg'),
  courtroom: publicImage('images/courtroom.jpg'),
  ladyJustice: publicImage('images/lady-justice.jpg'),
  contract: publicImage('images/legal-contract.jpg'),
} as const

export const SERVICE_CARD_IMAGES: Record<'mna' | 'corporate' | 'disputes' | 'compliance', string> = {
  mna: IMAGES.contract,
  corporate: IMAGES.courtroom,
  disputes: IMAGES.ladyJustice,
  compliance: IMAGES.brussels,
}
