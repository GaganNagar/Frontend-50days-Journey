//topic---->>>Lazy loading(like images) with intersactionObserver
// screeen par website ka jitna part dikhra isko 0berserve karo or utne part ko load karo
//  like images hoti h to unko load karo jitna dikhra

let imgs = document.querySelectorAll("img");

const observer = new IntersectionObserver(
    function(entries,obsever){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                const img = entry.target;
                img.src=img.dataset.src;
                img.classList.add("loaded");
                observer.unobserve(entry);
            }
        })
    },
    {
    root: null,
    threshold: 0.1,
    }
)

imgs.forEach(function(img){
observer.observe(img);
})