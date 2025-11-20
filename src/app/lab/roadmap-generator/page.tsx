"use client";

import { useState } from "react";
import Link from "next/link";

const companyTypes = [
  { value: "startup", label: "Startup (Early Stage)" },
  { value: "scaleup", label: "Scale-up (Growth Stage)" },
  { value: "established", label: "Established Business" },
  { value: "enterprise", label: "Large Enterprise" }
];

const industries = [
  { value: "technology", label: "Technology & Software" },
  { value: "healthcare", label: "Healthcare & Medical" },
  { value: "finance", label: "Finance & Banking" },
  { value: "retail", label: "Retail & E-commerce" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "consulting", label: "Professional Services" },
  { value: "education", label: "Education" },
  { value: "other", label: "Other" }
];

const maturityLevels = [
  { value: "none", label: "No AI Experience" },
  { value: "beginner", label: "Exploring AI Options" },
  { value: "basic", label: "Some AI Tools in Use" },
  { value: "intermediate", label: "AI Implementation in Progress" },
  { value: "advanced", label: "Mature AI Operations" }
];

const priorities = [
  { value: "efficiency", label: "Operational Efficiency" },
  { value: "automation", label: "Process Automation" },
  { value: "insights", label: "Data Insights & Analytics" },
  { value: "customer", label: "Customer Experience" },
  { value: "innovation", label: "Product Innovation" },
  { value: "cost", label: "Cost Reduction" },
  { value: "growth", label: "Revenue Growth" },
  { value: "competitive", label: "Competitive Advantage" }
];

export default function RoadmapGeneratorPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    companyType: '',
    industry: '',
    employeeCount: '',
    revenue: '',
    currentMaturity: '',
    mainChallenge: '',
    primaryPriority: '',
    secondaryPriorities: [],
    budget: '',
    timeline: '',
    technicalTeam: '',
    companyDescription: ''
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [roadmap, setRoadmap] = useState(null);
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
    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch('/api/ai/roadmap-generator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate roadmap');
      }

      const result = await response.json();
      setRoadmap(result);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const resetForm = () => {
    setFormData({
      companyName: '',
      companyType: '',
      industry: '',
      employeeCount: '',
      revenue: '',
      currentMaturity: '',
      mainChallenge: '',
      primaryPriority: '',
      secondaryPriorities: [],
      budget: '',
      timeline: '',
      technicalTeam: '',
      companyDescription: ''
    });
    setRoadmap(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-50 to-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">🗺️</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI Roadmap Generator
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get a comprehensive 6-month AI implementation roadmap tailored to your company's 
              specific needs, industry, and maturity level.
            </p>
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold tracking-wide uppercase mt-4">
              🚧 Beta Version
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {!roadmap ? (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Company Basics */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-3">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => handleChange('companyName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your Company Name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-3">
                        Company Type *
                      </label>
                      <select
                        value={formData.companyType}
                        onChange={(e) => handleChange('companyType', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      >
                        <option value="">Select company type</option>
                        {companyTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-3">
                        Industry *
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => handleChange('industry', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      >
                        <option value="">Select industry</option>
                        {industries.map((industry) => (
                          <option key={industry.value} value={industry.value}>
                            {industry.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-3">
                        Number of Employees
                      </label>
                      <select
                        value={formData.employeeCount}
                        onChange={(e) => handleChange('employeeCount', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select employee count</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-1000">201-1000</option>
                        <option value="1000+">1000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      Company Description *
                    </label>
                    <textarea
                      value={formData.companyDescription}
                      onChange={(e) => handleChange('companyDescription', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                      placeholder="Describe your company, what you do, your main products/services, and current operations..."
                      required
                    />
                  </div>
                </div>

                {/* AI Maturity & Goals */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Readiness & Goals</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-3">
                        Current AI Maturity Level *
                      </label>
                      <div className="space-y-2">
                        {maturityLevels.map((level) => (
                          <label key={level.value} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                            <input
                              type="radio"
                              name="currentMaturity"
                              value={level.value}
                              checked={formData.currentMaturity === level.value}
                              onChange={(e) => handleChange('currentMaturity', e.target.value)}
                              className="mr-3 text-indigo-600 focus:ring-indigo-500"
                              required
                            />
                            <span className="text-gray-700">{level.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-3">
                        Primary Priority *
                      </label>
                      <div className="space-y-2">
                        {priorities.map((priority) => (
                          <label key={priority.value} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                            <input
                              type="radio"
                              name="primaryPriority"
                              value={priority.value}
                              checked={formData.primaryPriority === priority.value}
                              onChange={(e) => handleChange('primaryPriority', e.target.value)}
                              className="mr-3 text-indigo-600 focus:ring-indigo-500"
                              required
                            />
                            <span className="text-gray-700">{priority.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      Secondary Priorities (select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {priorities.filter(p => p.value !== formData.primaryPriority).map((priority) => (
                        <label key={priority.value} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.secondaryPriorities.includes(priority.value)}
                            onChange={() => handleMultiSelect('secondaryPriorities', priority.value)}
                            className="mr-3 text-indigo-600 focus:ring-indigo-500 rounded"
                          />
                          <span className="text-gray-700">{priority.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      Main Business Challenge *
                    </label>
                    <textarea
                      value={formData.mainChallenge}
                      onChange={(e) => handleChange('mainChallenge', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                      placeholder="Describe your biggest operational challenge or pain point that you hope AI can help address..."
                      required
                    />
                  </div>
                </div>

                {/* Implementation Context */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Context</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-3">
                        Budget Range for AI Initiative
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleChange('budget', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="500k+">$500,000+</option>
                        <option value="discuss">Prefer to discuss</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-3">
                        Implementation Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleChange('timeline', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select preferred timeline</option>
                        <option value="3-months">3 months</option>
                        <option value="6-months">6 months</option>
                        <option value="12-months">12 months</option>
                        <option value="18-months">18+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      Technical Team Capability
                    </label>
                    <textarea
                      value={formData.technicalTeam}
                      onChange={(e) => handleChange('technicalTeam', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                      placeholder="Describe your current technical team's capabilities, AI experience, and any specific skills or gaps..."
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-800">Error: {error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"></circle>
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75"></path>
                      </svg>
                      Generating AI Roadmap...
                    </span>
                  ) : (
                    'Generate 6-Month AI Roadmap'
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Roadmap Generated</h2>
                <p className="text-gray-600 mb-6">
                  Your personalized 6-month AI implementation roadmap for {formData.companyName}
                </p>
              </div>

              <div className="space-y-8">
                {/* Executive Summary */}
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{roadmap.executiveSummary}</p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-600">{roadmap.totalInvestment}</div>
                      <div className="text-sm text-gray-600">Total Investment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">{roadmap.expectedROI}</div>
                      <div className="text-sm text-gray-600">Expected ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">{roadmap.timeToValue}</div>
                      <div className="text-sm text-gray-600">Time to Value</div>
                    </div>
                  </div>
                </div>

                {/* 6-Month Roadmap */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">6-Month Implementation Roadmap</h3>
                  
                  <div className="space-y-6">
                    {roadmap.phases.map((phase, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${
                              index === 0 ? 'from-green-500 to-green-600' :
                              index === 1 ? 'from-blue-500 to-blue-600' :
                              'from-purple-500 to-purple-600'
                            } rounded-xl flex items-center justify-center`}>
                              <span className="text-white font-bold">{index + 1}</span>
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-gray-900">{phase.title}</h4>
                              <p className="text-gray-600">{phase.duration}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gray-900">{phase.investment}</div>
                            <div className="text-sm text-gray-500">Investment</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-4">{phase.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Key Activities:</h5>
                            <ul className="space-y-1">
                              {phase.activities.map((activity, actIndex) => (
                                <li key={actIndex} className="text-gray-600 text-sm">• {activity}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Expected Outcomes:</h5>
                            <ul className="space-y-1">
                              {phase.outcomes.map((outcome, outIndex) => (
                                <li key={outIndex} className="text-gray-600 text-sm">• {outcome}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Success Metrics */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Success Metrics & KPIs</h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {roadmap.successMetrics.map((metric, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <div className="font-medium text-gray-900">{metric.metric}</div>
                            <div className="text-gray-600 text-sm">{metric.target}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Risk Considerations */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Considerations & Mitigation</h3>
                  <div className="space-y-4">
                    {roadmap.risks.map((risk, index) => (
                      <div key={index} className={`border-l-4 pl-4 py-3 ${
                        risk.level === 'High' ? 'border-red-500 bg-red-50' :
                        risk.level === 'Medium' ? 'border-yellow-500 bg-yellow-50' :
                        'border-green-500 bg-green-50'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{risk.risk}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            risk.level === 'High' ? 'bg-red-100 text-red-800' :
                            risk.level === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {risk.level}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm">{risk.mitigation}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Steps */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Immediate Next Steps</h3>
                  <div className="space-y-4">
                    {roadmap.nextSteps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="border-t border-gray-200 pt-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="btn-primary px-8 py-4">
                      Schedule Implementation Call
                    </Link>
                    <button 
                      onClick={resetForm}
                      className="btn-secondary px-8 py-4"
                    >
                      Generate Another Roadmap
                    </button>
                  </div>
                  <p className="text-center text-gray-500 text-sm mt-4">
                    This roadmap is AI-generated and should be validated with expert consultation. 
                    Schedule a call to discuss implementation details.
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
