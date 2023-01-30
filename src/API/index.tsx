import axios from "axios"

type APIProps = {
    url: string
    dataRequest: object
    data: void
    
}

export async function APIanticipate(dataRequest: APIProps){
    const url = "https://frontend-challenge-7bu3nxh76a-uc.a.run.app"
    
    const data = await axios.post(url, dataRequest)
        .then(response => {
            return response
        }).catch((err)=>{
            console.log(err)
        })

        return data
}