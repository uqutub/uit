import Axios from "axios";

export default class Request {



    static fetchRequest() {
        // fetch('API')  // RETURN PROMISE (THEN CATCH)
        fetch("https://api.github.com/users/uqutub").then((response) =>  response.json() )
            .then((jsonResponse) => {
                console.log(jsonResponse)

            })
    }

    static axiosRequest() {
        Axios.get("https://api.github.com/users/uqutub").then((response) => {
            console.log(response.data)
        })

    }

    static fetchRequestFromEpic() {
     return fetch("https://api.github.com/users/uqutub")
    }

    static axiosRequestFromEpic() {
       return Axios.get("https://api.github.com/users/uqutub")

    }
}