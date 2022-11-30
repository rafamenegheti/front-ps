class Fetcher {

    #options
    #baseUrl

    constructor(baseUrl, options = {}) {
        this.#baseUrl = baseUrl
        if(options) this.#options = options
        else {
            this.#options = {
                method: 'GET',
                mode: 'cors',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
        }
    }

    get(url) {
        this.#options = {
            ...this.#options,
            method: 'GET'
        }
        return fetch(this.#baseUrl + url, this.#options)
    }

    post(url, body) {
        const _body = JSON.stringify(body)
        this.#options = {
            ...this.#options,
            method: 'POST',
            body: _body
        }
        console.log({OPTIONS: this.#options})
        return fetch(this.#baseUrl + url, this.#options)
    }

    put(url, body) {
        const _body = JSON.stringify(body)
        this.#options = {
            ...this.#options,
            method: 'PUT',
            body: _body
        }
        return fetch(this.#baseUrl + url, this.#options)
    }

    patch(url, body) {
        const _body = JSON.stringify(body)
        this.#options = {
            ...this.#options,
            method: 'PATCH',
            body: _body
        }
        return fetch(this.#baseUrl + url, this.#options)
    }

    delete(url) {
        this.#options = {
            ...this.#options,
            method: 'DELETE'
        }
        return fetch(this.#baseUrl + url, this.#options)
    }

}

const api = new Fetcher('https://agoravai-fausto.onrender.com/')

export default api