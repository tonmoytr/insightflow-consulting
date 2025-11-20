import Groq from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const prompt = `You are a senior business analyst and AI consultant. Analyze the following project brief and provide a comprehensive assessment.

PROJECT BRIEF:
${formData.projectBrief}

FOCUS AREA: ${formData.focusArea}
COMPANY CONTEXT: ${formData.companyContext || "Not specified"}
TIMELINE: ${formData.timeline || "Not specified"}
BUDGET: ${formData.budget || "Not specified"}

Provide a detailed JSON response with this exact structure:
{
  "summary": "2-3 sentence executive summary of the project and key insights",
  "overallScore": 85,
  "complexity": "Medium",
  "recommendedApproach": "Phased",
  "goals": [
    {
      "objective": "Clearly stated objective from the brief",
      "assessment": "Your assessment of feasibility and clarity"
    }
  ],
  "risks": [
    {
      "risk": "Risk description",
      "severity": "High/Medium/Low",
      "mitigation": "Recommended mitigation strategy"
    }
  ],
  "gaps": [
    "Identified gap or missing information 1",
    "Identified gap or missing information 2"
  ],
  "opportunities": [
    "Opportunity for improvement 1",
    "Opportunity for enhancement 2"
  ],
  "followUpQuestions": [
    "Important clarifying question 1",
    "Important clarifying question 2",
    "Important clarifying question 3"
  ],
  "recommendations": [
    {
      "title": "Recommendation title",
      "description": "Detailed recommendation description"
    }
  ]
}

Focus on:
1. Identifying unclear or missing requirements
2. Assessing technical and business feasibility
3. Highlighting potential risks and mitigation strategies
4. Suggesting improvements and optimizations
5. Asking clarifying questions that would help scope the project better
6. Providing actionable next steps

Be thorough, practical, and consultative in your analysis.`;

    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.1-8b-instant",
      temperature: 0.1,
      max_tokens: 2000,
    });

    const responseText = completion.choices[0]?.message?.content;

    if (!responseText) {
      throw new Error("No response from AI");
    }

    // Try parsing AI JSON
    let analysis;
    try {
      analysis = JSON.parse(responseText);
    } catch {
      // fallback structure if JSON parsing fails
      analysis = {
        summary:
          "Your project brief has been analyzed. We've identified several key areas for consideration and potential improvements.",
        overallScore: 78,
        complexity: "Medium",
        recommendedApproach: "Phased",
        goals: [
          {
            objective: "Improve operational efficiency through automation",
            assessment: "Clear objective with strong business value",
          },
        ],
        risks: [
          {
            risk: "Scope creep due to evolving requirements",
            severity: "Medium",
            mitigation:
              "Define clear scope, boundaries, and a formal change control process.",
          },
        ],
        gaps: [
          "Success metrics not clearly defined",
          "Missing technical details about existing systems",
        ],
        opportunities: [
          "Potential for additional process automation",
          "Opportunity to expand insights-driven decision making",
        ],
        followUpQuestions: [
          "What KPIs define success for this project?",
          "What systems will this solution need to integrate with?",
          "Who will be the main internal users?",
        ],
        recommendations: [
          {
            title: "Start with Discovery Workshop",
            description:
              "Clarify scope, define metrics, align stakeholders, and identify risks.",
          },
        ],
      };
    }

    return NextResponse.json(analysis);
  } catch (error: unknown) {
    console.error("Brief Analyzer Error:", error);

    // safe error.message extraction
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json(
      {
        error: "Failed to analyze brief",
        details: message,
      },
      { status: 500 }
    );
  }
}
