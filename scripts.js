// Write your JavaScript code here.
// Remember to pay attention to page loading!
// Use the window load event to ensure all elements have loaded before attaching event handlers.

window.addEventListener('DOMContentLoaded', () =>{
    //shuttle location:
    let height = 0;
    let left = 0;
    let right = 0;
    console.log('Hey,DOMContentLoaded');
    //HTML Elements: 
    const rocket = document.getElementById("rocket");
    const takeoffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("upControl");
    const downButton = document.getElementById("downControl");
    const rightButton = document.getElementById("rightControl");
    const leftButton = document.getElementById("leftControl");
    // Event Listeners:
    // When the "Take off" button is clicked
    takeoffButton.addEventListener('click', () =>{
       const flightConfirmation =  window.confirm("Confirm that the shuttle is ready for takeoff.");
       if(flightConfirmation){
           flightStatus.innerText = "shuttle in flight!";
           shuttleBackground.style.backgroundColor = "lightblue"; 
           height += 10000
           spaceShuttleHeight.innerText = height;        
       }
    });
    // When the "Land" button is clicked
    landingButton.addEventListener('click', function(){
        window.alert("The shuttle is landing.Landing gear engaged.")
        flightStatus.innerText = "The shuttle had landed!";
        height =0;
        spaceShuttleHeight.innerText = height;  
        shuttleBackground.style.backgroundColor = "green";
        returnToOriginalPosition();
    });

    const missionAbortHandler = () =>{
        const abortConfirmation =  window.confirm("Confirm that you want to abort the mission.");
        if(abortConfirmation){
            flightStatus.innerText = "Mission Aborted!";
        height =0;
        spaceShuttleHeight.innerText = height;  
        shuttleBackground.style.backgroundColor = "green";
        returnToOriginalPosition ();
    }
}
    missionAbortButton.addEventListener('click',missionAbortHandler);

    upButton.addEventListener('click', () =>{
        height += 10000;
        rocket.style.bottom =`${height / 1000}px`;
        spaceShuttleHeight.innerText = height;
    });
    downButton.addEventListener('click', () =>{
        height -= 10000;
        spaceShuttleHeight.innerText = height;
        rocket.style.bottom =`${height / 1000}px`;

    });

    leftButton.addEventListener('click', () =>{
        left -= 10 
        rocket.style.left =`${left}px`;
    });
    rightButton.addEventListener('click', () =>{
        left += 10 
        rocket.style.left =`${left}px`;

    });

    const returnToOriginalPosition = () => {
        rocket.style.left = "-23px";
        rocket.style.bottom = "-6px";
    }



});
