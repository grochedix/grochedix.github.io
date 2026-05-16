import { Box, Container, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

type PageBannerProps = {
  imageSrc: string
}

export function PageBanner({ imageSrc }: PageBannerProps) {
  const { t } = useTranslation()

  return (
    <Box sx={{ width: '100%', mb: { xs: 4, md: 5 }, position: 'relative' }}>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(90deg, rgba(10,22,40,0.75) 0%, rgba(10,22,40,0.35) 55%, transparent 100%), url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          minHeight: { xs: 200, md: 300 },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: 'rgba(255,255,255,0.92)',
            maxWidth: 520,
            py: 4,
            textShadow: '0 1px 12px rgba(0,0,0,0.35)',
          }}
        >
          {t('expertisePage.bannerLine')}
        </Typography>
      </Container>
    </Box>
  )
}
