import React from 'react'
import { z } from 'zod'

type Props = {}

const Zod = (props: Props) => {



    const userSchema = z.object({
        userName: z.string(),
        id : z.number(),
        address : z.string().optional()
    })


type User = z.infer<typeof userSchema>

    const siam  : User = { userName: "Samiul", id : 1  }

    console.log(userSchema.parse(siam));



    return (
        <div>Zod</div>
    )
}

export default Zod