class AnimalService {
/*
|*
|*/
async getAnimals() {
    const url = '/api/animals';
    const headers = new Headers({'Content-Type':'application/json'});
    const requets = new Request(url, { headers});
    const response = await fetch(request);
    if (response.ok)
    {
        return await response.json();
    } else {
        throw await response.json();
    }
}


}