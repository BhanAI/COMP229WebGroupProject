//IIFE  - Immediately Invoked function Expression
(() => {
    function Start(): void{
        console.log("App started...");
    }

    window.addEventListener('load', Start);
})();