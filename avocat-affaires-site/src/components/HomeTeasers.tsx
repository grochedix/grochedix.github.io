import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IMAGES } from '../constants/images.ts'

export function HomeTeasers() {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'rgba(10,22,40,0.03)' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12 }}>
            <Card
              variant="outlined"
              sx={{
                overflow: 'hidden',
                borderColor: 'rgba(10,22,40,0.08)',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              <Box
                sx={{
                  flex: { md: '0 0 42%' },
                  minHeight: { xs: 220, md: 'auto' },
                  backgroundImage: `url(${IMAGES.contract})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                role="presentation"
              />
              <CardContent sx={{ flex: 1, p: { xs: 3, md: 4 } }}>
                <Stack spacing={2} sx={{ alignItems: 'flex-start' }}>
                  <Typography variant="h3" component="h2">
                    {t('home.teaserExpertiseTitle')}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {t('home.teaserExpertiseBody')}
                  </Typography>
                  <Button component={RouterLink} to="/expertise" variant="contained" color="primary" endIcon={<ArrowForwardIcon />}>
                    {t('home.ctaExpertise')}
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Card
              variant="outlined"
              sx={{
                overflow: 'hidden',
                borderColor: 'rgba(10,22,40,0.08)',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row-reverse' },
              }}
            >
              <Box
                sx={{
                  flex: { md: '0 0 42%' },
                  minHeight: { xs: 220, md: 'auto' },
                  backgroundImage: `url(${IMAGES.brussels})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                role="presentation"
              />
              <CardContent sx={{ flex: 1, p: { xs: 3, md: 4 } }}>
                <Stack spacing={2} sx={{ alignItems: 'flex-start' }}>
                  <Typography variant="h3" component="h2">
                    {t('home.teaserAboutTitle')}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {t('home.teaserAboutBody')}
                  </Typography>
                  <Button component={RouterLink} to="/about" variant="outlined" color="primary" endIcon={<ArrowForwardIcon />}>
                    {t('home.ctaAbout')}
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
