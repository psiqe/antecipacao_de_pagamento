import axios from "axios"

const url = "https://frontend-challenge-7bu3nxh76a-uc.a.run.app"

type APIProps = {
    url: string
    data: object

}

export const APIanticipate = ({url, data}: APIProps) =>{
    axios.post(url, data)
    .then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}