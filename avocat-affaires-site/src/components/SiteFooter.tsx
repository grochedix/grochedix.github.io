import { Box, Container, Divider, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export function SiteFooter() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <Box component="footer" sx={{ py: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ opacity: 0.85, maxWidth: 720, mb: 2 }}>
          {t('footer.demo')}
        </Typography>
        <Typography variant="caption" sx={{ opacity: 0.65, display: 'block', mb: 2 }}>
          {t('footer.imagesCredit')}
        </Typography>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)', my: 2 }} />
        <Typography variant="caption" sx={{ opacity: 0.7 }}>
          © {year} Morel & Associés — {t('footer.rights')}
        </Typography>
      </Container>
    </Box>
  )
}
