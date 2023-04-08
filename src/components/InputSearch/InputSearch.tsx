import style from './InputSearch.module.scss'
import { IoSearchOutline } from 'react-icons/io5'
import { useMediaQuery } from '@mui/material'

export const InputSearch = () => {
  const isMobile = useMediaQuery('(max-width: 576px)')

  return (
    <div className={style.search_field}>
      <input
        className={style.search}
        placeholder={
          !isMobile ? 'Услуга, компания или специалист' : 'Введите услугу...'
        }
      />
      <IoSearchOutline className={style.icon} />
    </div>
  )
}
