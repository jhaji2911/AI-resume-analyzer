import { z } from "zod";

export const AnalyzePayloadSchema = z.object({
    resume: z.string(),
    job_description: z.string()
})


export const ResponseAnalyzeSchema = z.object({
    model: z.string(),
    success: z.boolean(),
    error: z.boolean(),
    output: z.object({
        name: z.string(),
        role: z.object({
            resume_role: z.string().nullable(),
            job_description_role: z.string().nullable(),
        }),
        location: z.object({
            job_location: z.string().nullable(),
            resume_location: z.string().nullable(),
        }),
        skills: z.object({
            job_skills: z.array(z.string()),
            resume_skills: z.array(z.string()),
        }),
        education: z.object({
            job_education: z.string().nullable(),
            resume_education: z.string().nullable(),
        }),
        yearsOfExperience: z.object({
            job_experience: z.number().nullable(),
            resume_experience: z.number().nullable(),
        }),
        responsibilitiesTaken: z.object({
            job_responsibilities: z.array(z.string()),
            resume_responsibilities: z.array(z.string())
        }),
        domain: z.string().nullable(),
        confidence: z.number().nullable(),
    })
});
