import { Box, Container, Typography } from '@mui/material'
import { AboutSection } from '../components/AboutSection.tsx'
import { useTranslation } from 'react-i18next'

export function AboutPage() {
  const { t } = useTranslation()

  return (
    <Box sx={{ pt: { xs: 3, md: 4 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" sx={{ fontFamily: '"Cormorant Garamond", serif', mb: 1 }}>
          {t('about.title')}
        </Typography>
      </Container>
      <AboutSection showTitle={false} showMosaic />
    </Box>
  )
}
