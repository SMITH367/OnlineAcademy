class FetchData {

    constructor(url) {

        this.url = url


    }

    async FetchDataApiGet() {


        try {
            const res = await fetch(this.url)
            const data = await res.json()
            return data
        } catch (err) {
            console.log(err)
        }

    }
    async FetchDataApi(dataUser, method, token = "") {
        try {
            const res = await fetch(this.url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    authentication: token
                },
                body: JSON.stringify(dataUser)
            })
            const data = await res.json()

            return data

        } catch (err) {
            return false
        }
    }


}

export {
    FetchData
}