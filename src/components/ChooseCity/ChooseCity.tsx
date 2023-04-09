import { Button, ButtonGroup, MenuItem, Select } from '@mui/material'
import React from 'react'
import s from './ChooseCity.module.scss'
import { InstanceCity } from '../../http/Agent/City.agent'
import { styled } from '@mui/system'



const StyledGroup = styled(ButtonGroup)({
    width:'100%'
})

const StyledButton = styled(Button)({
    width:'100%'
})


export const ChooseCity = () => {
    const [selectCity, setSelectedCity]= React.useState<any>("City") 
    const [object, setObject] = React.useState<any>(null)
    const [AllCity, setAllCity] =React.useState([])
    const [load, setLoad] = React.useState(false)
    const [page, setPage] = React.useState(0)

    React.useEffect(()=>{
        const f = async ()=>{
            try {
                setLoad(true)
                const data = await InstanceCity.getAllCity(10, page)
                setObject(data)
                setAllCity(data.items)
            } catch  {  
            } finally{
                setLoad(false)
            }
        }
        f()
    }, [page])
    React.useEffect(()=>{
        console.log(selectCity)
    }, [selectCity])
    const ChangePage = (next:boolean)=>{
        console.log(next)
        if (next){
            if (object.total> page*10){
                
                setPage(page+1)
            }
        }else{
            if (0< page*10){
                setPage(page-1)
            }
        }
    }
  return (
    <div className={s.block}>
        <Select  size="small" defaultValue={'city'} onChange={(e)=>setSelectedCity(e.target.value)} value={selectCity}>
            <MenuItem value={selectCity}>{selectCity.name ? selectCity.name : 'City'}</MenuItem>   
            {AllCity && AllCity.length>0 ? AllCity.map((elem:any)=> <MenuItem key={elem.id} value={elem}>{elem.name}</MenuItem> ) : <MenuItem value={"NotFound"}>Нет городов</MenuItem>}   
           <StyledGroup >
            <StyledButton onClick={()=>ChangePage(false)} disabled={load}>back</StyledButton>
            <StyledButton disabled={load} onClick={()=>ChangePage(true)}>next</StyledButton>

           </StyledGroup>
        </Select>
    </div>
    
  )
}
