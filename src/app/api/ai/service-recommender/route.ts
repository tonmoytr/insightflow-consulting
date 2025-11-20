import Groq from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

interface ServiceRecommendationFormData {
  companySize: string;
  industry: string;
  primaryGoal: string;
  secondaryGoals: string[];
  mainConstraints: string[];
  currentChallenges: string;
  aiExperience?: string;
  timeline?: string;
}

export async function POST(request: NextRequest) {
  try {
    const raw = await request.json();

    // Basic runtime safety + typing
    const formData = raw as Partial<ServiceRecommendationFormData>;

    const secondaryGoalsArray = Array.isArray(formData.secondaryGoals)
      ? formData.secondaryGoals
      : [];
    const mainConstraintsArray = Array.isArray(formData.mainConstraints)
      ? formData.mainConstraints
      : [];

    // Create the consulting-style prompt
    const prompt = `You are a senior AI consulting strategist. Based on the company profile below, provide a detailed service recommendation.

COMPANY PROFILE:
- Size: ${formData.companySize || "Not specified"}
- Industry: ${formData.industry || "Not specified"}
- Primary Goal: ${formData.primaryGoal || "Not specified"}
- Secondary Goals: ${
      secondaryGoalsArray.length > 0
        ? secondaryGoalsArray.join(", ")
        : "None specified"
    }
- Constraints: ${
      mainConstraintsArray.length > 0
        ? mainConstraintsArray.join(", ")
        : "None specified"
    }
- Current Challenges: ${formData.currentChallenges || "Not specified"}
- AI Experience: ${formData.aiExperience || "Not specified"}
- Timeline: ${formData.timeline || "Not specified"}

AVAILABLE SERVICES:
1. AI Discovery & Automation Audit ($15K-$25K, 2-3 weeks)
2. Workflow & Process Automation ($25K-$50K, 4-6 weeks)
3. Custom AI Tooling ($50K-$150K, 6-12 weeks)
4. AI Strategy & Roadmapping ($20K-$40K, 3-4 weeks)
5. AI Readiness Scorecard ($8K-$15K, 1-2 weeks)

Provide a JSON response with this exact structure:
{
  "primaryService": "Service name",
  "reasoning": "2-3 sentence explanation of why this service fits best",
  "confidenceScore": 85,
  "estimatedInvestment": "$XX,XXX - $XX,XXX",
  "timeline": "X-X weeks",
  "expectedROI": "XXX% in X months",
  "keyBenefits": [
    "Specific benefit 1",
    "Specific benefit 2", 
    "Specific benefit 3",
    "Specific benefit 4"
  ],
  "nextSteps": [
    "Step 1 description",
    "Step 2 description",
    "Step 3 description"
  ],
  "alternativeServices": [
    {
      "service": "Alternative service name",
      "reason": "Why this could be considered",
      "timeline": "X weeks",
      "investment": "$XX,XXX"
    }
  ]
}

Make the recommendation highly specific to their industry, size, and goals. Focus on practical business outcomes and ROI. Be consultative and professional.`;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.1-8b-instant",
      temperature: 0.1,
      max_tokens: 1500,
    });

    const responseText = completion.choices[0]?.message?.content;

    if (!responseText) {
      throw new Error("No response from AI");
    }

    // Parse the JSON response
    let recommendation;
    try {
      recommendation = JSON.parse(responseText);
    } catch {
      // If JSON parsing fails, create a fallback response
      recommendation = {
        primaryService: "AI Discovery & Automation Audit",
        reasoning:
          "Based on your profile, we recommend starting with a comprehensive audit to identify the best AI opportunities for your specific needs.",
        confidenceScore: 75,
        estimatedInvestment: "$15,000 - $25,000",
        timeline: "2-3 weeks",
        expectedROI: "300-500% in 6 months",
        keyBenefits: [
          "Identify high-impact automation opportunities",
          "Create a prioritized AI implementation roadmap",
          "Assess current technology stack compatibility",
          "Establish baseline metrics for ROI tracking",
        ],
        nextSteps: [
          "Clarify stakeholders and critical workflows to review",
          "Conduct a short discovery session to align on goals and constraints",
          "Perform a structured audit of key processes and systems",
          "Deliver a concise findings report and phased implementation plan",
        ],
        alternativeServices: [
          {
            service: "AI Strategy & Roadmapping",
            reason:
              "If you need a broader strategic view and prioritization across multiple teams before implementation.",
            timeline: "3-4 weeks",
            investment: "$20,000",
          },
        ],
      };
    }

    return NextResponse.json(recommendation);
  } catch (error: unknown) {
    console.error("AI Service Recommender Error:", error);

    const message =
      error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json(
      {
        error: "Failed to generate recommendation",
        details: message,
      },
      { status: 500 }
    );
  }
}
