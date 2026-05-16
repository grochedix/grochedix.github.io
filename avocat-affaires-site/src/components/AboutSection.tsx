import { Box, Container, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { IMAGES } from '../constants/images.ts'

const stats = [
  { value: '15+', key: 'years' as const },
  { value: '120+', key: 'deals' as const },
  { value: '8', key: 'jurisdictions' as const },
]

type AboutSectionProps = {
  showTitle?: boolean
  showMosaic?: boolean
}

export function AboutSection({ showTitle = true, showMosaic = false }: AboutSectionProps) {
  const { t } = useTranslation()

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 2, md: showTitle ? 10 : 2 },
        pb: { xs: 8, md: 10 },
        bgcolor: 'rgba(10,22,40,0.03)',
      }}
    >
      <Container maxWidth="lg">
        {showTitle && (
          <Typography variant="h2" component="h2" gutterBottom>
            {t('about.title')}
          </Typography>
        )}

        {showMosaic && (
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                component="img"
                src={IMAGES.brussels}
                alt=""
                sx={{ width: '100%', height: { xs: 220, sm: 280 }, objectFit: 'cover', borderRadius: 1, display: 'block' }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                component="img"
                src={IMAGES.courtroom}
                alt=""
                sx={{ width: '100%', height: { xs: 220, sm: 280 }, objectFit: 'cover', borderRadius: 1, display: 'block' }}
              />
            </Grid>
          </Grid>
        )}

        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2} sx={{ mt: showTitle ? 2 : 0 }}>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                {t('about.p1')}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                {t('about.p2')}
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                height: '100%',
                p: 3,
                border: '1px solid',
                borderColor: 'rgba(10,22,40,0.08)',
                bgcolor: 'background.paper',
              }}
            >
              <Stack divider={<Divider flexItem />} spacing={2}>
                {stats.map(({ value, key }) => (
                  <Box key={key}>
                    <Typography variant="h2" sx={{ color: 'secondary.dark', mb: 0.5 }}>
                      {value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t(`about.stats.${key}`)}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
