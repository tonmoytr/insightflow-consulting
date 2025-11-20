"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";

type FocusArea = {
  value: string;
  label: string;
};

type BriefFormData = {
  projectBrief: string;
  focusArea: string;
  companyContext: string;
  timeline: string;
  budget: string;
};

type Goal = {
  objective: string;
  assessment: string;
};

type Risk = {
  risk: string;
  severity: "High" | "Medium" | "Low" | string;
  mitigation: string;
};

type Recommendation = {
  title: string;
  description: string;
};

type BriefAnalysis = {
  summary: string;
  overallScore: number;
  complexity: string;
  recommendedApproach: string;
  goals: Goal[];
  risks: Risk[];
  gaps: string[];
  opportunities: string[];
  followUpQuestions: string[];
  recommendations: Recommendation[];
};

const focusAreas: FocusArea[] = [
  { value: "automation", label: "Process Automation" },
  { value: "analytics", label: "Data Analytics & Insights" },
  { value: "customer-experience", label: "Customer Experience" },
  { value: "operations", label: "Operations Optimization" },
  { value: "innovation", label: "Product Innovation" },
  { value: "cost-reduction", label: "Cost Reduction" },
  { value: "compliance", label: "Compliance & Risk Management" },
  { value: "growth", label: "Revenue Growth" },
];

export default function BriefAnalyzerPage() {
  const [formData, setFormData] = useState<BriefFormData>({
    projectBrief: "",
    focusArea: "",
    companyContext: "",
    timeline: "",
    budget: "",
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<BriefAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = <K extends keyof BriefFormData>(
    field: K,
    value: BriefFormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setError(null);

    try {
      const response = await fetch("/api/ai/brief-analyzer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze brief");
      }

      const result = (await response.json()) as BriefAnalysis;
      setAnalysis(result);

      // Store in localStorage for dashboard
      const briefAnalysis = {
        timestamp: new Date().toISOString(),
        company: "Brief Analysis",
        type: "Brief Analysis",
        focusArea: formData.focusArea,
        score: result.overallScore ?? 85,
      };

      const existingAnalyses = JSON.parse(
        localStorage.getItem("lab-analyses") || "[]"
      ) as unknown[];

      const updated = [briefAnalysis, ...existingAnalyses].slice(0, 10);
      localStorage.setItem("lab-analyses", JSON.stringify(updated));
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Unknown error occurred";
      setError(message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetForm = () => {
    setFormData({
      projectBrief: "",
      focusArea: "",
      companyContext: "",
      timeline: "",
      budget: "",
    });
    setAnalysis(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-green-500 to-green-600">
              <span className="text-3xl text-white">📊</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              AI Brief Analyzer
            </h1>
            <p className="text-xl leading-relaxed text-gray-600">
              Upload your project brief and get structured analysis with
              AI-powered insights, risk assessment, and actionable
              recommendations.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {!analysis ? (
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl bg-white p-8 shadow-lg lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Project Brief */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-gray-900">
                    Project Brief
                  </h2>

                  <div className="mb-6">
                    <label className="mb-3 block text-sm font-medium text-gray-900">
                      Project Brief / Description *
                    </label>
                    <textarea
                      value={formData.projectBrief}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                        handleChange("projectBrief", e.target.value)
                      }
                      rows={8}
                      className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                      placeholder="Paste your project brief here or describe your project in detail. Include objectives, scope, requirements, and any specific challenges you're facing..."
                      required
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      Tip: The more detail you provide, the better our AI
                      analysis will be
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-3 block text-sm font-medium text-gray-900">
                        Primary Focus Area *
                      </label>
                      <select
                        value={formData.focusArea}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                          handleChange("focusArea", e.target.value)
                        }
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                        required
                      >
                        <option value="">Select focus area</option>
                        {focusAreas.map((area) => (
                          <option key={area.value} value={area.value}>
                            {area.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-medium text-gray-900">
                        Company Context
                      </label>
                      <textarea
                        value={formData.companyContext}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                          handleChange("companyContext", e.target.value)
                        }
                        rows={4}
                        className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                        placeholder="Brief company background, industry, size, current tech stack..."
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Context */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-gray-900">
                    Project Context
                  </h2>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-3 block text-sm font-medium text-gray-900">
                        Expected Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                          handleChange("timeline", e.target.value)
                        }
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Select timeline</option>
                        <option value="1-2 weeks">1-2 weeks</option>
                        <option value="1 month">1 month</option>
                        <option value="2-3 months">2-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-medium text-gray-900">
                        Estimated Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                          handleChange("budget", e.target.value)
                        }
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k+">$250,000+</option>
                        <option value="discuss">Prefer to discuss</option>
                      </select>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                    <p className="text-red-800">Error: {error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="btn-primary w-full py-4 text-lg disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          className="opacity-25"
                        />
                        <path
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          className="opacity-75"
                        />
                      </svg>
                      Analyzing Brief with AI...
                    </span>
                  ) : (
                    "Analyze Project Brief"
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl bg-white p-8 shadow-lg lg:p-12">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-10 w-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Brief Analysis Complete
                </h2>
                <p className="mb-6 text-gray-600">
                  Our AI has analyzed your project brief and identified key
                  insights, risks, and opportunities:
                </p>
              </div>

              <div className="space-y-8">
                {/* Executive Summary */}
                <div className="rounded-2xl bg-gradient-to-r from-green-50 to-blue-50 p-8">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    Executive Summary
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    {analysis.summary}
                  </p>

                  <div className="mt-6 grid gap-6 md:grid-cols-3">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">
                        {analysis.overallScore}/100
                      </div>
                      <div className="text-sm text-gray-600">
                        Project Feasibility
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">
                        {analysis.complexity}
                      </div>
                      <div className="text-sm text-gray-600">
                        Complexity Level
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">
                        {analysis.recommendedApproach}
                      </div>
                      <div className="text-sm text-gray-600">
                        Recommended Approach
                      </div>
                    </div>
                  </div>
                </div>

                {/* Goals Analysis */}
                <div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Goals & Objectives Analysis
                  </h3>
                  <div className="rounded-xl bg-gray-50 p-6">
                    <div className="space-y-4">
                      {analysis.goals.map((goal, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <svg
                            className="mt-1 h-5 w-5 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div>
                            <div className="font-medium text-gray-900">
                              {goal.objective}
                            </div>
                            <div className="text-sm text-gray-600">
                              {goal.assessment}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Risk Assessment */}
                <div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Risk Assessment
                  </h3>
                  <div className="space-y-4">
                    {analysis.risks.map((risk, index) => {
                      const severityClass =
                        risk.severity === "High"
                          ? "border-red-500 bg-red-50"
                          : risk.severity === "Medium"
                          ? "border-yellow-500 bg-yellow-50"
                          : "border-green-500 bg-green-50";

                      const badgeClass =
                        risk.severity === "High"
                          ? "bg-red-100 text-red-800"
                          : risk.severity === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800";

                      return (
                        <div
                          key={index}
                          className={`border-l-4 pl-4 py-3 ${severityClass}`}
                        >
                          <div className="mb-2 flex items-center justify-between">
                            <h4 className="font-semibold text-gray-900">
                              {risk.risk}
                            </h4>
                            <span
                              className={`rounded-full px-2 py-1 text-xs font-semibold ${badgeClass}`}
                            >
                              {risk.severity}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700">
                            {risk.mitigation}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Gaps & Opportunities */}
                <div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Identified Gaps & Opportunities
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-semibold text-red-600">
                        🚨 Potential Gaps
                      </h4>
                      <ul className="space-y-2">
                        {analysis.gaps.map((gap, index) => (
                          <li key={index} className="text-sm text-gray-700">
                            • {gap}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-green-600">
                        💡 Opportunities
                      </h4>
                      <ul className="space-y-2">
                        {analysis.opportunities.map((opportunity, index) => (
                          <li key={index} className="text-sm text-gray-700">
                            • {opportunity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Follow-up Questions */}
                <div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Recommended Follow-up Questions
                  </h3>
                  <div className="rounded-xl bg-blue-50 p-6">
                    <div className="space-y-3">
                      {analysis.followUpQuestions.map((question, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <span className="font-bold text-blue-600">
                            Q{index + 1}:
                          </span>
                          <p className="text-gray-700">{question}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Strategic Recommendations
                  </h3>
                  <div className="space-y-4">
                    {analysis.recommendations.map((rec, index) => (
                      <div key={index} className="rounded-xl bg-gray-50 p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="mb-2 font-semibold text-gray-900">
                              {rec.title}
                            </h4>
                            <p className="text-sm text-gray-700">
                              {rec.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="border-t border-gray-200 pt-8">
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Link href="/contact" className="btn-primary px-8 py-4">
                      Discuss This Analysis
                    </Link>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="btn-secondary px-8 py-4"
                    >
                      Analyze Another Brief
                    </button>
                  </div>
                  <p className="mt-4 text-center text-sm text-gray-500">
                    This analysis is generated by AI and should be used as
                    guidance. Schedule a consultation for detailed review and
                    next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
