import Card from 'antd/lib/card/Card'
import { useRouter } from 'next/router'
import React from 'react'

const CardMapel = ({label}:any) => {
  const route = useRouter()

  return (
    <Card onClick={()=>route.push(`mapel/${label}`)} style={{cursor:"pointer"}}>
        {label}
    </Card>
  )
}

export default CardMapel