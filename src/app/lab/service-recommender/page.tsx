"use client";

import { useState } from "react";
import Link from "next/link";

const companySizes = [
  { value: "startup", label: "Startup (1-10 employees)" },
  { value: "small", label: "Small Business (11-50 employees)" },
  { value: "medium", label: "Medium Business (51-200 employees)" },
  { value: "large", label: "Large Enterprise (201-1000 employees)" },
  { value: "enterprise", label: "Enterprise (1000+ employees)" }
];

const industries = [
  { value: "technology", label: "Technology & Software" },
  { value: "healthcare", label: "Healthcare & Medical" },
  { value: "finance", label: "Finance & Banking" },
  { value: "retail", label: "Retail & E-commerce" },
  { value: "manufacturing", label: "Manufacturing & Industrial" },
  { value: "consulting", label: "Professional Services" },
  { value: "education", label: "Education & Training" },
  { value: "real-estate", label: "Real Estate" },
  { value: "logistics", label: "Logistics & Transportation" },
  { value: "other", label: "Other Industry" }
];

const businessGoals = [
  { value: "efficiency", label: "Improve Operational Efficiency" },
  { value: "automation", label: "Automate Manual Processes" },
  { value: "insights", label: "Generate Better Business Insights" },
  { value: "customer-experience", label: "Enhance Customer Experience" },
  { value: "cost-reduction", label: "Reduce Operational Costs" },
  { value: "growth", label: "Accelerate Business Growth" },
  { value: "innovation", label: "Drive Innovation & Competitive Advantage" },
  { value: "compliance", label: "Improve Compliance & Risk Management" }
];

const constraints = [
  { value: "budget", label: "Limited Budget" },
  { value: "time", label: "Tight Timeline" },
  { value: "resources", label: "Limited Technical Resources" },
  { value: "data", label: "Data Quality/Availability Issues" },
  { value: "change-management", label: "Change Management Concerns" },
  { value: "compliance", label: "Regulatory/Compliance Requirements" },
  { value: "integration", label: "System Integration Challenges" }
];

export default function ServiceRecommenderPage() {
  const [formData, setFormData] = useState({
    companySize: '',
    industry: '',
    primaryGoal: '',
    secondaryGoals: [],
    mainConstraints: [],
    currentChallenges: '',
    aiExperience: '',
    timeline: '',
    budget: ''
  });
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendation, setRecommendation] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMultiSelect = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setError(null);

    try {
      const response = await fetch('/api/ai/service-recommender', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to get recommendation');
      }

      const result = await response.json();
      setRecommendation(result);
      
      // Store in localStorage for dashboard
      const analysis = {
        timestamp: new Date().toISOString(),
        company: `${formData.companySize} ${formData.industry} company`,
        industry: formData.industry,
        recommendation: result.primaryService,
        score: result.confidenceScore
      };
      
      const existingAnalyses = JSON.parse(localStorage.getItem('lab-analyses') || '[]');
      existingAnalyses.unshift(analysis);
      localStorage.setItem('lab-analyses', JSON.stringify(existingAnalyses.slice(0, 10)));

    } catch (err) {
      setError(err.message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetForm = () => {
    setFormData({
      companySize: '',
      industry: '',
      primaryGoal: '',
      secondaryGoals: [],
      mainConstraints: [],
      currentChallenges: '',
      aiExperience: '',
      timeline: '',
      budget: ''
    });
    setRecommendation(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">🎯</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI Service Recommender
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get personalized AI consulting recommendations based on your company profile, 
              goals, and constraints. Powered by advanced AI analysis.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {!recommendation ? (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Company Basics */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Profile</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-3">
                        Company Size *
                      </label>
                      <div className="space-y-2">
                        {companySizes.map((size) => (
                          <label key={size.value} className="flex items-center">
                            <input
                              type="radio"
                              name="companySize"
                              value={size.value}
                              checked={formData.companySize === size.value}
                              onChange={(e) => handleChange('companySize', e.target.value)}
                              className="mr-3 text-blue-600 focus:ring-blue-500"
                              required
                            />
                            <span className="text-gray-700">{size.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-3">
                        Industry *
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => handleChange('industry', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select your industry</option>
                        {industries.map((industry) => (
                          <option key={industry.value} value={industry.value}>
                            {industry.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Goals */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Goals</h2>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      Primary Business Goal *
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {businessGoals.map((goal) => (
                        <label key={goal.value} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="radio"
                            name="primaryGoal"
                            value={goal.value}
                            checked={formData.primaryGoal === goal.value}
                            onChange={(e) => handleChange('primaryGoal', e.target.value)}
                            className="mr-3 text-blue-600 focus:ring-blue-500"
                            required
                          />
                          <span className="text-gray-700">{goal.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      Secondary Goals (select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {businessGoals.filter(g => g.value !== formData.primaryGoal).map((goal) => (
                        <label key={goal.value} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.secondaryGoals.includes(goal.value)}
                            onChange={() => handleMultiSelect('secondaryGoals', goal.value)}
                            className="mr-3 text-blue-600 focus:ring-blue-500 rounded"
                          />
                          <span className="text-gray-700">{goal.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Constraints */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Constraints & Challenges</h2>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      Main Constraints (select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {constraints.map((constraint) => (
                        <label key={constraint.value} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.mainConstraints.includes(constraint.value)}
                            onChange={() => handleMultiSelect('mainConstraints', constraint.value)}
                            className="mr-3 text-blue-600 focus:ring-blue-500 rounded"
                          />
                          <span className="text-gray-700">{constraint.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      Describe your current challenges *
                    </label>
                    <textarea
                      value={formData.currentChallenges}
                      onChange={(e) => handleChange('currentChallenges', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your main operational challenges, pain points, or areas where you need improvement..."
                      required
                    />
                  </div>
                </div>

                {/* Additional Context */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Context</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-3">
                        AI Experience Level
                      </label>
                      <select
                        value={formData.aiExperience}
                        onChange={(e) => handleChange('aiExperience', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select experience level</option>
                        <option value="none">No AI experience</option>
                        <option value="basic">Basic understanding</option>
                        <option value="intermediate">Some AI tools/projects</option>
                        <option value="advanced">Extensive AI experience</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-3">
                        Preferred Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleChange('timeline', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP (1-2 weeks)</option>
                        <option value="month">Within 1 month</option>
                        <option value="quarter">Within 3 months</option>
                        <option value="flexible">Flexible timeline</option>
                      </select>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-800">Error: {error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"></circle>
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75"></path>
                      </svg>
                      Analyzing with AI...
                    </span>
                  ) : (
                    'Get AI Recommendation'
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Analysis Complete</h2>
                <p className="text-gray-600 mb-6">
                  Based on your company profile and goals, here's our personalized recommendation:
                </p>
              </div>

              <div className="space-y-8">
                {/* Primary Recommendation */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Recommended Service: {recommendation.primaryService}
                      </h3>
                      <p className="text-gray-600">{recommendation.reasoning}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600">{recommendation.confidenceScore}/100</div>
                      <div className="text-sm text-gray-500">Confidence Score</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Estimated Investment</h4>
                      <p className="text-2xl font-bold text-green-600">{recommendation.estimatedInvestment}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Timeline</h4>
                      <p className="text-2xl font-bold text-blue-600">{recommendation.timeline}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Expected ROI</h4>
                      <p className="text-2xl font-bold text-purple-600">{recommendation.expectedROI}</p>
                    </div>
                  </div>
                </div>

                {/* Key Benefits */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits for Your Business</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {recommendation.keyBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                        <svg className="w-5 h-5 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Implementation Steps */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Next Steps</h3>
                  <div className="space-y-4">
                    {recommendation.nextSteps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alternative Services */}
                {recommendation.alternativeServices && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Alternative Considerations</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {recommendation.alternativeServices.map((alt, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl p-6">
                          <h4 className="font-semibold text-gray-900 mb-2">{alt.service}</h4>
                          <p className="text-gray-600 text-sm mb-3">{alt.reason}</p>
                          <p className="text-green-600 font-medium">{alt.timeline} • {alt.investment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="border-t border-gray-200 pt-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="btn-primary px-8 py-4">
                      Schedule Free Consultation
                    </Link>
                    <button 
                      onClick={resetForm}
                      className="btn-secondary px-8 py-4"
                    >
                      Try Another Analysis
                    </button>
                  </div>
                  <p className="text-center text-gray-500 text-sm mt-4">
                    This recommendation is generated by AI and should be used as guidance. 
                    Schedule a consultation for personalized advice.
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
