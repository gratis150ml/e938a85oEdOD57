$("form").submit(function(e){
    e.preventDefault();
    activate();
});
url = "https://api.agify.io/?name="
const find = (name) => fetch(url+name)
const activate = async() => {
    try {
        $('p').html('<div class="spinner-border text-danger" role="status"></div>')
        const r = await find($('input').val())
        const d = await r.json()
        if(d.age) {
            $('p').html(`Your age is: ${d.age}`)
        } else {
            $('p').html(`Something went wrong`)
        }
    } catch (err) {
        console.log(err)
    }
}
