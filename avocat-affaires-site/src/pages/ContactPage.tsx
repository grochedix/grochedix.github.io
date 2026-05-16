import { Box, Container, Typography } from '@mui/material'
import { ContactSection } from '../components/ContactSection.tsx'
import { useTranslation } from 'react-i18next'

export function ContactPage() {
  const { t } = useTranslation()

  return (
    <Box sx={{ pt: { xs: 3, md: 4 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" sx={{ fontFamily: '"Cormorant Garamond", serif', mb: 1 }}>
          {t('contact.title')}
        </Typography>
      </Container>
      <ContactSection showTitle={false} showSideImage />
    </Box>
  )
}
