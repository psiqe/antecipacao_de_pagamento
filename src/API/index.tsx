import axios from "axios"

const url = "https://frontend-challenge-7bu3nxh76a-uc.a.run.app"

type APIProps = {
    url: string
    data: object

}

export function APIanticipate(data: APIProps) {
    const APIdata = JSON.stringify(data) 
    console.log(typeof(APIdata))
    console.log(APIdata)
    // fetch("https://frontend-challenge-7bu3nxh76a-uc.a.run.app",{
        
    // })
    //     .then(function(response){
    //         if (!response.ok) throw new Error("Error" + response.status)
    //     })
    //     .then(function(data){
    //         console.log(data)
    //     }).catch(function(err){
    //         console.log(err)
    //     })
    axios.post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
        .then(response => {
            return console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
}