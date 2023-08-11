const title = document.getElementById("title")
const description = document.getElementById("description")
const form = document.querySelector("form")
const container =document.querySelector(".container")

const tasks=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

showtasks()

function showtasks(){
    tasks.forEach((val,index)=>{
        const div = document.createElement("div")
        div.setAttribute("class","task")

        const innerdiv=document.createElement("div")
        div.append(innerdiv)

        const p = document.createElement("p")
        p.innerText=val.title
        innerdiv.append(p)
        const span = document.createElement("span")
        span.innerText=val.description
        innerdiv.append(span)

        const button = document.createElement("button")
        button.setAttribute("class","deleteBtn")
        button.innerText="-"
        div.append(button)
        button.addEventListener("click",()=>{
            rem()
            tasks.splice(index,1)
            localStorage.setItem("tasks",JSON.stringify(tasks))

            showtasks()
        })
        container.append(div)
    })
}

function rem(){
    tasks.forEach(()=>{
        const div= document.querySelector(".task")
        div.remove()
    })
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    rem()
    tasks.push(
        {
            title: title.value,
            description:description.value,
        }
    )
    console.log(tasks)
    localStorage.setItem("tasks",JSON.stringify(tasks))
    showtasks()


    form.reset()
})