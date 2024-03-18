const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Function to process the array
function processArray(inputArray) {
    const status = "Success";
    const userId = 123;  // Dummy user ID
    const emailId = "example@example.com";  // Dummy email ID
    const collegeRollNumber = "20240001";  // Dummy college roll number

    const evenNumbers = inputArray.filter(num => num % 2 === 0);
    const oddNumbers = inputArray.filter(num => num % 2 !== 0);
    const alphabetsUppercase = inputArray.filter(char => typeof char === 'string' && char.match(/[a-zA-Z]/)).map(char => char.toUpperCase());

    return {
        status,
        userId,
        emailId,
        collegeRollNumber,
        evenNumbers,
        oddNumbers,
        alphabetsUppercase
    };
}

// POST endpoint to process the array
app.get("/",(req,res)=>{
  console.log("this is home page");
})
app.post('/bfhl', (req, res) => {
    const inputArray = req.body.array;

    if (!inputArray || !Array.isArray(inputArray)) {
        return res.status(400).json({ error: "Input must be an array" });
    }

    const result = processArray(inputArray);
    res.json(result);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
