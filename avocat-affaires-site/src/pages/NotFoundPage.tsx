import { Box, Button, Container, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        textAlign: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="p"
          variant="overline"
          sx={{ letterSpacing: '0.2em', color: 'secondary.main', mb: 2 }}
        >
          404
        </Typography>
        <Typography component="h1" variant="h2" sx={{ mb: 2 }}>
          {t('notFound.title')}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
          {t('notFound.body')}
        </Typography>
        <Button component={RouterLink} to="/" variant="contained" color="primary" size="large">
          {t('notFound.cta')}
        </Button>
      </Container>
    </Box>
  )
}
