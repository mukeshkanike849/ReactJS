
// const Api = "https://jsonplaceholder.typicode.com/posts"

async function post()
{
    
    let fetch1=await fetch("https://jsonplaceholder.typicode.com/posts")
    let fetch2=await fetch1.json()

    let posts=document.getElementById("posts")

    fetch2.map((val)=>
    {
        let {title}=val
        posts.innerHTML += `<p>${title}</p>`
        // posts.innerHTML = `${posts.innerHTML}<p>${userId}</p>`

    })

//    console.log(fetch2);
}
post()