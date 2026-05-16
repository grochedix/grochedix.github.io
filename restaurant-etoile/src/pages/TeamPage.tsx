import { useI18n } from '../i18n/useI18n'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const IMG_CHEF = publicAsset('photos/chef.jpg')
const IMG_ROOM = publicAsset('photos/dining.jpg')

export function TeamPage() {
  const { u } = useI18n()

  return (
    <main className="page-main team-page">
      <header className="page-hero">
        <p className="section-kicker">{u.team.kicker}</p>
        <h1 className="page-title">{u.team.title}</h1>
      </header>

      <div className="team-grid">
        <figure className="team-figure team-figure--tall">
          <img
            src={IMG_CHEF}
            alt={u.team.altChef}
            width={960}
            height={1280}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="team-copy">
          <p>{u.team.p1}</p>
          <p>{u.team.p2}</p>
          <p>{u.team.p3}</p>
        </div>
        <figure className="team-figure">
          <img
            src={IMG_ROOM}
            alt={u.team.altRoom}
            width={960}
            height={640}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="team-bios">
          <section className="team-card">
            <h2 className="team-card-title">{u.team.chefTitle}</h2>
            <p>{u.team.chefBio}</p>
          </section>
          <section className="team-card">
            <h2 className="team-card-title">{u.team.teamTitle}</h2>
            <p>{u.team.teamBio}</p>
          </section>
          <blockquote className="team-inline-quote">{u.team.quote}</blockquote>
        </div>
      </div>
    </main>
  )
}
