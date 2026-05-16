import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined'
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { IMAGES } from '../constants/images.ts'

type ContactSectionProps = {
  showTitle?: boolean
  showSideImage?: boolean
}

export function ContactSection({ showTitle = true, showSideImage = false }: ContactSectionProps) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setOpen(true)
  }

  const addressBlock = (
    <Stack spacing={3}>
      <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
        <PlaceOutlinedIcon color="secondary" sx={{ mt: 0.25 }} />
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            {t('contact.addressLabel')}
          </Typography>
          <Typography variant="body1">{t('contact.address')}</Typography>
        </Box>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
        <EmailOutlinedIcon color="secondary" sx={{ mt: 0.25 }} />
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            {t('contact.emailLabel')}
          </Typography>
          <Typography variant="body1" component="a" href="mailto:contact@morel-associes.be" sx={{ color: 'primary.main' }}>
            contact@morel-associes.be
          </Typography>
        </Box>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
        <PhoneOutlinedIcon color="secondary" sx={{ mt: 0.25 }} />
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            {t('contact.phoneLabel')}
          </Typography>
          <Typography variant="body1">+32 2 512 34 56</Typography>
        </Box>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
        <ScheduleOutlinedIcon color="secondary" sx={{ mt: 0.25 }} />
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            {t('contact.availability')}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  )

  const formBlock = (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: { xs: 2.5, sm: 3 },
        border: '1px solid',
        borderColor: 'rgba(10,22,40,0.08)',
        borderRadius: 1,
        bgcolor: 'background.paper',
      }}
    >
      <Stack spacing={2.5}>
        <TextField required fullWidth label={t('contact.form.name')} name="name" autoComplete="name" />
        <TextField required fullWidth type="email" label={t('contact.form.email')} name="email" autoComplete="email" />
        <TextField required fullWidth multiline minRows={4} label={t('contact.form.message')} name="message" />
        <Button type="submit" variant="contained" color="primary" size="large">
          {t('contact.form.send')}
        </Button>
      </Stack>
    </Box>
  )

  return (
    <Box component="section" sx={{ py: { xs: 2, md: showTitle ? 10 : 2 }, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        {showTitle && (
          <>
            <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 1 }}>
              {t('contact.title')}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 560 }}>
              {t('contact.intro')}
            </Typography>
          </>
        )}

        {!showTitle && (
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 560 }}>
            {t('contact.intro')}
          </Typography>
        )}

        {showSideImage ? (
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                component="img"
                src={IMAGES.contactLouise}
                alt={t('contact.sideImageAlt')}
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: 420,
                  objectFit: 'cover',
                  borderRadius: 1,
                  display: 'block',
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack spacing={4}>
                {addressBlock}
                {formBlock}
              </Stack>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 5 }}>{addressBlock}</Grid>
            <Grid size={{ xs: 12, md: 7 }}>{formBlock}</Grid>
          </Grid>
        )}
      </Container>

      <Snackbar open={open} autoHideDuration={5000} onClose={() => setOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setOpen(false)} severity="info" variant="filled" sx={{ width: '100%' }}>
          {t('contact.form.demo')}
        </Alert>
      </Snackbar>
    </Box>
  )
}
