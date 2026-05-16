import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import { NavLink, Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher.tsx'

const navItems = [
  { key: 'home' as const, to: '/' },
  { key: 'expertise' as const, to: '/expertise' },
  { key: 'about' as const, to: '/about' },
  { key: 'contact' as const, to: '/contact' },
]

const navButtonSx = {
  opacity: 0.92,
  borderRadius: 0,
  borderBottom: '2px solid transparent',
  '&.active': {
    opacity: 1,
    borderBottomColor: 'secondary.main',
  },
}

export function SiteHeader() {
  const { t } = useTranslation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [open, setOpen] = useState(false)

  const closeDrawer = () => setOpen(false)

  return (
    <AppBar position="sticky" elevation={0} color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1, gap: 2 }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: isMobile ? 1 : 0,
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Morel & Associés
          </Typography>

          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', gap: 0.5, ml: 4 }}>
              {navItems.map(({ key, to }) => (
                <Button key={key} color="inherit" component={NavLink} to={to} end={to === '/'} sx={navButtonSx}>
                  {t(`nav.${key}`)}
                </Button>
              ))}
            </Box>
          )}

          <LanguageSwitcher />

          {isMobile && (
            <>
              <IconButton color="inherit" edge="end" onClick={() => setOpen(true)} aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={open} onClose={closeDrawer}>
                <Box sx={{ width: 260, pt: 2 }} role="presentation">
                  <List>
                    {navItems.map(({ key, to }) => (
                      <ListItemButton key={key} component={NavLink} to={to} end={to === '/'} onClick={closeDrawer}>
                        <ListItemText primary={t(`nav.${key}`)} />
                      </ListItemButton>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
