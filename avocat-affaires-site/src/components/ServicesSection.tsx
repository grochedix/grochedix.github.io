import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import GavelIcon from '@mui/icons-material/Gavel'
import HandshakeIcon from '@mui/icons-material/Handshake'
import PolicyIcon from '@mui/icons-material/Policy'
import type { SvgIconComponent } from '@mui/icons-material'
import { Box, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SERVICE_CARD_IMAGES } from '../constants/images.ts'

const items: { key: 'mna' | 'corporate' | 'disputes' | 'compliance'; Icon: SvgIconComponent }[] = [
  { key: 'mna', Icon: HandshakeIcon },
  { key: 'corporate', Icon: AccountBalanceIcon },
  { key: 'disputes', Icon: GavelIcon },
  { key: 'compliance', Icon: PolicyIcon },
]

type ServicesSectionProps = {
  showTitle?: boolean
}

export function ServicesSection({ showTitle = true }: ServicesSectionProps) {
  const { t } = useTranslation()

  return (
    <Box component="section" sx={{ py: { xs: 2, md: showTitle ? 10 : 2 }, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        {showTitle && (
          <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 4 }}>
            {t('services.title')}
          </Typography>
        )}
        <Grid container spacing={3}>
          {items.map(({ key, Icon }) => (
            <Grid key={key} size={{ xs: 12, sm: 6 }}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderColor: 'rgba(10,22,40,0.08)',
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                  '&:hover': {
                    boxShadow: '0 12px 40px rgba(10,22,40,0.08)',
                    borderColor: 'secondary.main',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={SERVICE_CARD_IMAGES[key]}
                  alt={t('services.cardImageAlt')}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Stack spacing={2} sx={{ flex: 1 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'rgba(184,146,58,0.12)',
                        color: 'secondary.dark',
                      }}
                    >
                      <Icon fontSize="medium" />
                    </Box>
                    <Typography variant="h3" component="h2">
                      {t(`services.${key}.title`)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {t(`services.${key}.body`)}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
