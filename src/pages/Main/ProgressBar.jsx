function ProgressBar({ currentStep, totalSteps = 2 }) {
    return (
      <div className="progress-bar w-72 max-w-md">
        <div className="relative h-4 bg-white rounded-full">
          {/* Progress fill */}
          <div 
            className="progress-bar-fill absolute h-full rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
          
          {/* Step circle */}
          <div 
            className=" absolute top-1/2 -translate-y-1/2"
            style={{ left: `${(currentStep / totalSteps) * 100}%` }}
          >
            <div className="relative -ml-4">
              <div className="progress-bar-circle w-8 h-8 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {currentStep}/{totalSteps}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProgressBar;