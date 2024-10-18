// function calculateLove() {
//     const name = document.getElementById("name").value.trim();
//     const name1 = document.getElementById("name1").value.trim();
    
//     if (name === "" || name1 === "") {
//         alert("Please enter both names.");
//         return;
//     }

//     const lovePercentage = Math.floor(Math.random() * 101);
//     if (name === "Rohith S" && name1 === "Chinmayi P") {
//         lovePercentage = 100;
//     }
//     const result = document.getElementById("result");
   

//     if (lovePercentage < 30) {
//         result.innerHTML = "Not a great match. Keep looking!";
//     } else if (lovePercentage >= 30 && lovePercentage < 70) {
//         result.innerHTML = "There is potential. Give it a try!";
//     } else {
//         result.innerHTML = "Great match! Love is in the air!";
//     }
//     if(name === "Rohith S" && name1==="Chinmayi P"){
//         lovePercentage= 100;
//     }

//     result.innerHTML += `<br>${name} and ${name1}'s Love Percentage: ${lovePercentage}%`;
// }
function calculateLove() {
    const name = document.getElementById("name").value.trim();
    const name1 = document.getElementById("name1").value.trim();
    
    if (name === "" || name1 === "") {
        alert("Please enter both names.");
        return;
    }

    let lovePercentage = Math.floor(Math.random() * 101); // Use 'let' to allow reassignment
       
    // Check for special case first
    if (name === "Rohith S" && name1 === "Chinmayi P") {
        lovePercentage = 100; // Set love percentage to 100 if the names match
    }

    const result = document.getElementById("result");
   
    // Display the result based on lovePercentage
    if (lovePercentage < 30) {
        result.innerHTML = "Not a great match. Keep looking!";
    } else if (lovePercentage >= 30 && lovePercentage < 70) {
        result.innerHTML = "There is potential. Give it a try!";
    } else {
        result.innerHTML = "Great match! Love is in the air!";
    }

    // Display the love percentage
    result.innerHTML += `<br>${name} and ${name1}'s Love Percentage: ${lovePercentage}%`;
}
