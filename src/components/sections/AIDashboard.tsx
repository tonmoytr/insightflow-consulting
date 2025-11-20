"use client";

import React from "react";
import Lottie from "lottie-react";

// Lottie animation data - using CDN links as JSON
const useLottieFromUrl = (url: string) => {
  const [animationData, setAnimationData] = React.useState(null);

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, [url]);

  return animationData;
};

const AIDashboard: React.FC = () => {
  const dashboardAnim = useLottieFromUrl(
    "https://lottie.host/0e4826c3-3bc1-4c77-8e19-c0adc0dc1bd7/OkJLlRCLdT.json"
  );
  const liveAnim = useLottieFromUrl(
    "https://lottie.host/embed/3e3f6e1f-8e1a-4a1f-9b1e-3d3f6e1f8e1a/KYgJPvwGzR.json"
  );
  const floatingAnim = useLottieFromUrl(
    "https://lottie.host/cc154e6a-d7f8-4f5e-9b7c-f2e1e9a5e1c3/xYrj9lxoqh.json"
  );

  return (
    <div className="relative">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200">
        <div className="space-y-6">
          {/* Header with Live Status */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              AI Insights Dashboard
            </h3>
            <div className="flex items-center space-x-2">
              {liveAnim && (
                <Lottie
                  animationData={liveAnim}
                  loop={true}
                  style={{ width: 24, height: 24 }}
                />
              )}
              <span className="text-sm text-green-600 font-medium">Live</span>
            </div>
          </div>

          {/* Main Dashboard Animation */}
          <div className="flex justify-center my-6">
            {dashboardAnim && (
              <Lottie
                animationData={dashboardAnim}
                loop={true}
                style={{ width: 300, height: 200 }}
              />
            )}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-2xl font-bold text-green-600">340%</div>
                <div className="text-sm text-gray-600">Efficiency Boost</div>
              </div>
              <div className="absolute -right-2 -top-2 opacity-30">
                {floatingAnim && (
                  <Lottie
                    animationData={floatingAnim}
                    loop={true}
                    style={{ width: 80, height: 80 }}
                  />
                )}
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-2xl font-bold text-blue-600">98.7%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="absolute -right-2 -top-2 opacity-30">
                {floatingAnim && (
                  <Lottie
                    animationData={floatingAnim}
                    loop={true}
                    style={{ width: 80, height: 80 }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">AI Automation Score</span>
              <span className="text-sm font-medium text-gray-900">92/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: "92%", animation: "fillBar 2s ease-out" }}
              />
            </div>
          </div>

          {/* Recent Implementations */}
          <div className="pt-4 border-t border-gray-100">
            <div className="text-sm text-gray-600 mb-2">
              Recent AI Implementations
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 hover:bg-green-50 p-2 rounded-lg transition-colors">
                {liveAnim && (
                  <Lottie
                    animationData={liveAnim}
                    loop={true}
                    style={{ width: 16, height: 16 }}
                  />
                )}
                <span className="text-sm text-gray-700">
                  Workflow Automation Deployed
                </span>
              </div>
              <div className="flex items-center space-x-3 hover:bg-blue-50 p-2 rounded-lg transition-colors">
                {liveAnim && (
                  <Lottie
                    animationData={liveAnim}
                    loop={true}
                    style={{ width: 16, height: 16 }}
                  />
                )}
                <span className="text-sm text-gray-700">
                  Predictive Analytics Active
                </span>
              </div>
              <div className="flex items-center space-x-3 hover:bg-purple-50 p-2 rounded-lg transition-colors">
                {liveAnim && (
                  <Lottie
                    animationData={liveAnim}
                    loop={true}
                    style={{ width: 16, height: 16 }}
                  />
                )}
                <span className="text-sm text-gray-700">
                  Smart Recommendations Running
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Lottie elements */}
      <div className="absolute -top-8 -right-8">
        {floatingAnim && (
          <Lottie
            animationData={floatingAnim}
            loop={true}
            style={{ width: 100, height: 100, opacity: 0.4 }}
          />
        )}
      </div>
      <div className="absolute -bottom-8 -left-8">
        {floatingAnim && (
          <Lottie
            animationData={floatingAnim}
            loop={true}
            style={{ width: 80, height: 80, opacity: 0.3 }}
          />
        )}
      </div>

      <style jsx>{`
        @keyframes fillBar {
          from {
            width: 0%;
          }
          to {
            width: 92%;
          }
        }
      `}</style>
    </div>
  );
};

export default AIDashboard;
