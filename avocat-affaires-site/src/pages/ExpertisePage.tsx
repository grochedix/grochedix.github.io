import { Box, Container, Typography } from '@mui/material'
import { PageBanner } from '../components/PageBanner.tsx'
import { ServicesSection } from '../components/ServicesSection.tsx'
import { IMAGES } from '../constants/images.ts'
import { useTranslation } from 'react-i18next'

export function ExpertisePage() {
  const { t } = useTranslation()

  return (
    <Box>
      <Container maxWidth="lg" sx={{ pt: { xs: 3, md: 4 }, pb: 1 }}>
        <Typography variant="h2" component="h1" sx={{ fontFamily: '"Cormorant Garamond", serif' }}>
          {t('services.title')}
        </Typography>
      </Container>
      <PageBanner imageSrc={IMAGES.brussels} />
      <ServicesSection showTitle={false} />
    </Box>
  )
}
