const carouselImages = [
    {id: 1, imgLink: 'https://images.unsplash.com/photo-1558030089-02acba3c214e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80'},
    {id: 2, imgLink: 'https://images.unsplash.com/photo-1558030137-a56c1b004fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80'},
    {id: 3, imgLink: 'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80'}
]
const arrowTop = () =>{
    window.scrollTo({
        top:0
    })
}
const carousel = (currentImg = 1) =>{
   
    const carouselDisplay = document.querySelector('section.grills');

    carouselImages.map(img => (
        img.id == currentImg ?
        carouselDisplay.style.backgroundImage = `url(${img.imgLink})`
        : false
    ))

}
const carouselTimer = ( navigate = 0) =>{
    let counter = 1
    
    setInterval(()=>{

        if(counter >= carouselImages.length || counter < 1){
            counter = 1
            
        }else{
            //(navigate != '') ? eval(counter + navigate) : counter++
            counter++
            carousel(counter)
            console.log(eval(counter+navigate))
        }
        
    }, 6000);
}
const carouselNavLeft = () =>{
    let leftBtn = document.querySelector('button.btnLeft');
    leftBtn.addEventListener('click', carouselTimer(-1))
}
const carouselNavRight = () =>{
    let rightBtn = document.querySelector('button.btnRight');
    rightBtn.addEventListener('click', carouselTimer(+1))
}
carouselNavLeft()
carouselNavRight()
carouselTimer()
carousel()