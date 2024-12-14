//API URL to fetch the data
const URL="https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";

async function fetchData() {
    try{
        //Get and fetch the data from the API URL
        const responseData= await fetch(URL);
        // If no response (not ok or not 200) then error message
        if(!responseData.ok || responseData !== 200){
            console.error('ERROR in fetching the data of the student from the API');
        }

        // Parse JSON response
        const UOBStData = await responseData.json();

        //Call PrintUOBStData Funcition
        PrintUOBStData(UOBStData.results);
    }
    catch(error){
        console.error('There is an Error Occured',error);
    }
}

function PrintUOBStData(results){
    // Get a reference to the TableBody element in the DOM
    const TB = document.getElementById('TableBody');

    // Loop through each result in the results array and create a table row for each
    results.forEach(result => {
        // Create a new table row element
        const tRow = document.createElement('tr');
        // Populate the table row with data from each result
        tRow.innerHTML =
        `
        <td> ${result.year}</td>
        <td> ${result.semester}</td>
        <td> ${result.the_programs}</td>
        <td> ${result.nationality}</td>
        <td> ${result.colleges}</td>
        <td> ${result.number_of_students}</td>

        `
        // Append the new table row to the TableBody element
        TB.appendChild(tRow);
    });
}
// Add an event listener for when the DOM content is loaded to call the fetchData function
document.addEventListener('DOMContentLoaded', fetchData);