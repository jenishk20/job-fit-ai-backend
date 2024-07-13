const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

async function getComments(req, res) {
  try {
    
    const resumeSkills = req.body.resumeSection;
    const jobDescription = req.body.jobDescription;
    console.log(resumeSkills);
    const prompt = `Compare the following resume skills with the job description and provide comments on the match: Resume Skills:
${resumeSkills}

Job Description:
${jobDescription}

Provide detailed feedback on how well the skills match the job requirements and suggest any improvements or additional skills that could be beneficial.`;

    console.log(process.env.API_KEY);
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
}

module.exports = {
  getComments,
};
