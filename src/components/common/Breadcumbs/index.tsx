import { FC } from 'react'
import { Breadcrumbs as BreadcrumbsMUI } from '@mui/material'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export const Breadcrumbs: FC<{
  path: string,
  currentPage: string,
  color: string,
}> = ({ path, currentPage, color }) => {
  return (
    <BreadcrumbsMUI separator="|" aria-label="breadcrumb">
      <Link key="1" color="inherit" href={path}>
        Home
      </Link>
      <Typography
        variant="subtitle2"
        key="2"
        color={color}>
        {currentPage}
      </Typography>
    </BreadcrumbsMUI>
  )
}
