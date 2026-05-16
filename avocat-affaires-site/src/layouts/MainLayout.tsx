import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter.tsx'
import { SiteHeader } from '../components/SiteHeader.tsx'

export function MainLayout() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />
      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <SiteFooter />
    </Box>
  )
}
