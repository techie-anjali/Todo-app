// function toggleTask(id){

//     const audio = document.getElementById("sound");

//     // play sound
//     if(audio){
//         audio.pause();
//         audio.currentTime = 0;
//         audio.play().catch(()=>{});
//     }

//     // confetti
//     confetti({
//         particleCount:120,
//         spread:80,
//         origin:{y:0.6}
//     });

//     // backend toggle (NO redirect)
//     fetch("/tasks/"+id+"/toggle")
//     .then(()=>{
//         // update UI without reload
//         const text = event.target.closest(".card-body").querySelector("span");
//         text.classList.toggle("text-strikethrough");
//     })
//     .catch(err=>console.log(err));
// }



// function toggleDark(){
//     document.body.classList.toggle("dark-mode");
// }

function toggleTask(event,id){

    const audio = document.getElementById("sound");

    if(audio){
        audio.pause();
        audio.currentTime = 0;
        audio.play().catch(()=>{});
    }

    confetti({
        particleCount:120,
        spread:80,
        origin:{y:0.6}
    });

    // backend call
    fetch("/tasks/"+id+"/toggle")
    .then(()=>{

        // UI toggle instantly
        const text = event.target
            .closest(".card-body")
            .querySelector("span");

        text.classList.toggle("text-strikethrough");
    });
}


function toggleDark(){
    document.body.classList.toggle("dark-mode");
}