url = 'https://jsonplaceholder.typicode.com/users'
$('form').on('submit', (e) => {
    e.preventDefault()
    search(url)
})
const search = async(url) => {
    try {
        let html = '<ul>'
        let resp = await fetch(url)
        let data = await resp.json()
        data.map(d => html += `<li>${d.email}</li>`)
        html += '</ul>'
        $('p').html(html)
    } catch (err) {
        console.error(err)
    }

}
