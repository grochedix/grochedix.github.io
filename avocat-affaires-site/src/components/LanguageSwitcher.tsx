import { Box, IconButton, Stack, Tooltip } from '@mui/material'
import { FR, GB, NL } from 'country-flag-icons/react/3x2'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'fr' as const, Flag: FR, label: 'Français' },
  { code: 'en' as const, Flag: GB, label: 'English' },
  { code: 'nl' as const, Flag: NL, label: 'Nederlands' },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language.slice(0, 2)

  return (
    <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }} role="group" aria-label="Language">
      {languages.map(({ code, Flag, label }) => {
        const active = current === code
        return (
          <Tooltip key={code} title={label}>
            <IconButton
              size="small"
              onClick={() => void i18n.changeLanguage(code)}
              aria-pressed={active}
              aria-label={label}
              sx={{
                p: 0.5,
                borderRadius: 1,
                border: '2px solid',
                borderColor: active ? 'secondary.main' : 'transparent',
                opacity: active ? 1 : 0.75,
                '&:hover': { opacity: 1, borderColor: 'rgba(255,255,255,0.35)' },
              }}
            >
              <Box
                sx={{
                  width: 28,
                  lineHeight: 0,
                  borderRadius: 0.5,
                  overflow: 'hidden',
                  boxShadow: '0 0 0 1px rgba(0,0,0,0.12)',
                  '& svg': { display: 'block', width: '100%', height: 'auto' },
                }}
              >
                <Flag title={label} />
              </Box>
            </IconButton>
          </Tooltip>
        )
      })}
    </Stack>
  )
}
