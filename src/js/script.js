window.onload = function() {


    fetch('./res/json/posts.json')   //task 3, vahetasin myjson.json nime posts.json, sest see oli mitte midagi ütlev. lingi asemel panin sulgudesse andmete kausta
        .then((response) => response.json())   //nool tähendab, et loogelised sulud ja return
        .then(json => {
            console.log(json);
            
            //task1
            for ( let post of json){
                console.log(post.title, post.body)
                const postDiv = document.createElement('div')
                postDiv.className = 'post'   //task2
                const h3 = document.createElement('h3')
                h3.textContent = post.title
                const p = document.createElement('p')
                p.textContent=post.body
                postDiv.appendChild(h3)
                postDiv.appendChild(p)

                document.querySelector('body').appendChild(postDiv)
                //sama asi, aga teeme elemendi body-tegelt pole vaja, sest ei taaskasuta seda:
                //const body = document.querySelector('body')
                //body.appendChild(postDiv)

            }
        

            //task4 error handeling
        }) .catch(err => {
                console.error(err)
                let errDiv = document.createElement("div");
                errDiv.className = 'post';
                errDiv.innerText = err;
                document.body.appendChild(errDiv);
            })


            //task 5. finally block läheb ALATI käima
            .finally(() => {
                let footer = document.createElement("footer");
                const date = new Date().toLocaleString()
                footer.innerText = date;
                document.body.appendChild(footer);
                })



}