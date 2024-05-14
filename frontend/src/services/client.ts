import axios from "axios";

const apiInstance = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        "Content-Type": "application/json"
    },
})


export const apiURLs = {
    recognize: "/recognize/",
    analyze: "/analyze/",
    extractResumeJson: '/extract_resume_json/',
    extractJdJson: '/extract_JD_json/',
    generateQuestions: '/generate_questions/'
}

export default apiInstance;