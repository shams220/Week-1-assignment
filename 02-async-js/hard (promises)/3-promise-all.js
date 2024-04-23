/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Resolved after 1 second");
            resolve();
        }, 1000);
    });
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Resolved after 2 seconds");
            resolve();
        }, 2000);
    });
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Resolved after 3 seconds");
            resolve();
        }, 3000);
    });
}

async function calculateTime() {
    const startTime = Date.now(); // Record the start time

    // Execute each function sequentially
    // await waitOneSecond();
    // await waitTwoSecond();
    // await waitThreeSecond();

    // Excutes each function using Promise.all

    await Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()]);

    const endTime = Date.now(); // Record the end time
    const elapsedTime = endTime - startTime; // Calculate elapsed time in milliseconds
    console.log(`Total time waited: ${elapsedTime / 1000} seconds`);
}

calculateTime(); // Call calculateTime function to demonstrate
