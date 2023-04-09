import React from 'react'
import { InstanceReview } from '../../http/Agent/Review.agent';
import { Box, Rating, Typography } from '@mui/material';

export const Review = ({id}:{id:number}) => {
    const [data, setData] = React.useState([]);
    React.useEffect(()=>{
        const f = async()=>{
            try {
                const data = await InstanceReview.getReviewProduct(id)
                setData(data)
            } catch {
            } 
        }
        if (id){
            f()

        }
    }, [id])
  return (
    <>
        <Typography variant="h4" component='h2'>Комментарии</Typography>
        <div>{data.length>0 ? data.map((elem:any)=><Box mt={2} mb={2} key={elem.id}>
            <div>
                <Typography>Owner comment: {elem.owner_id}</Typography>
                <Rating name="read-only" value={elem.rate} readOnly disabled />
            </div>
                <Typography component="p">{elem.text}</Typography>
            </Box> ) : 'Нет отзывов'}
        </div>
    </>
  )
}
