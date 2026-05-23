import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LangOutlet } from './routes/LangOutlet'
import { SiteLayout } from './layout/SiteLayout'
import { HomePage } from './pages/HomePage'
import { TeamPage } from './pages/TeamPage'
import { ReservePage } from './pages/ReservePage'
import { NotFoundPage } from './pages/NotFoundPage'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')

const getInitialLangRedirect = () => {
  try {
    const stored = localStorage.getItem('lang');
    if (stored === 'en' || stored === 'nl') return `/${stored}`;
  } catch {}
  return '/fr';
};

export default function App() {
  return (
    <BrowserRouter basename={routerBasename || undefined}>
      <Routes>
        <Route path="/" element={<Navigate to={getInitialLangRedirect()} replace />} />
        <Route path="/:lang" element={<LangOutlet />}>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="equipe" element={<TeamPage />} />
            <Route path="reservation" element={<ReservePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
