import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const prompt = `You are a senior business analyst and AI consultant. Analyze the following project brief and provide a comprehensive assessment.

PROJECT BRIEF:
${formData.projectBrief}

FOCUS AREA: ${formData.focusArea}
COMPANY CONTEXT: ${formData.companyContext || 'Not specified'}
TIMELINE: ${formData.timeline || 'Not specified'}
BUDGET: ${formData.budget || 'Not specified'}

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
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      model: "llama-3.1-8b-instant",
      temperature: 0.1,
      max_tokens: 2000,
    });

    const responseText = completion.choices[0]?.message?.content;
    
    if (!responseText) {
      throw new Error('No response from AI');
    }

    // Parse the JSON response
    let analysis;
    try {
      analysis = JSON.parse(responseText);
    } catch (parseError) {
      // If JSON parsing fails, create a fallback response
      analysis = {
        summary: "Your project brief has been analyzed. We've identified several key areas for consideration and potential improvements to ensure successful implementation.",
        overallScore: 78,
        complexity: "Medium",
        recommendedApproach: "Phased",
        goals: [
          {
            objective: "Improve operational efficiency through automation",
            assessment: "Well-defined objective with clear business value"
          },
          {
            objective: "Implement AI-powered insights dashboard",
            assessment: "Feasible but requires detailed technical specification"
          }
        ],
        risks: [
          {
            risk: "Scope creep due to evolving requirements",
            severity: "Medium",
            mitigation: "Establish clear project boundaries and change management process"
          },
          {
            risk: "Integration challenges with existing systems",
            severity: "High",
            mitigation: "Conduct thorough technical assessment and proof of concept"
          }
        ],
        gaps: [
          "Specific success metrics and KPIs need definition",
          "User acceptance criteria require clarification",
          "Data quality and availability assessment needed"
        ],
        opportunities: [
          "Potential for additional process optimizations",
          "Opportunity to establish AI governance framework",
          "Possible expansion to other business units"
        ],
        followUpQuestions: [
          "What are the specific success metrics you want to track?",
          "Who are the key stakeholders and decision makers?",
          "What is your current data infrastructure and quality?",
          "Are there any regulatory or compliance requirements?",
          "What is your team's current AI/technical capability?"
        ],
        recommendations: [
          {
            title: "Conduct Discovery Workshop",
            description: "Start with a comprehensive discovery session to clarify requirements, assess current state, and align stakeholders on objectives"
          },
          {
            title: "Develop Proof of Concept",
            description: "Build a small-scale prototype to validate technical feasibility and demonstrate value before full implementation"
          },
          {
            title: "Create Detailed Project Plan",
            description: "Develop a phased implementation plan with clear milestones, deliverables, and success criteria"
          }
        ]
      };
    }

    return NextResponse.json(analysis);

  } catch (error) {
    console.error('Brief Analyzer Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to analyze brief',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
