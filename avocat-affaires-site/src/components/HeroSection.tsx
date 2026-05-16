import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IMAGES } from '../constants/images.ts'

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        color: 'primary.contrastText',
        overflow: 'hidden',
        backgroundColor: 'primary.main',
        backgroundImage: `linear-gradient(105deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.82) 42%, rgba(19,42,74,0.55) 100%), url(${IMAGES.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 50% at 70% 0%, rgba(184,146,58,0.14), transparent 55%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
        <Stack spacing={3} sx={{ maxWidth: 720 }}>
          <Typography
            variant="overline"
            sx={{ letterSpacing: '0.25em', color: 'secondary.main', fontWeight: 600 }}
          >
            {t('hero.kicker')}
          </Typography>
          <Typography variant="h1" component="h1">
            {t('hero.title')}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'rgba(250,248,244,0.88)', maxWidth: 600 }}>
            {t('hero.subtitle')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
            <Button variant="contained" color="secondary" size="large" component={RouterLink} to="/contact">
              {t('hero.cta')}
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              component={RouterLink}
              to="/expertise"
              endIcon={<ArrowDownwardIcon sx={{ fontSize: 18 }} />}
              sx={{ borderColor: 'rgba(255,255,255,0.45)', '&:hover': { borderColor: '#fff' } }}
            >
              {t('hero.scroll')}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
