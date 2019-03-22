function coherenceData = getCoherenceData(esa, coherenceData)
    
    % Counters
    totalCorrect = sum(ones(length(esa.correctOrNotArray),1) == esa.correctOrNotArray);
    totalIncorrect = sum(zeros(length(esa.correctOrNotArray),1)-1 == esa.correctOrNotArray);
    totalNoResponse = sum(zeros(length(esa.correctOrNotArray),1) == esa.correctOrNotArray);
    
    totalPCorrect = totalCorrect/length(esa.correctOrNotArray);
    
    % Break down into each coherence level
    pCorrect = [];
    meanConfidence = [];
    meanFrameTime = [];
    
    for coh = coherenceData.coherences
        
        indices = returnIndices(esa.coherenceArray, coh);
        
        % Get the percent correct
        pCorrect = [pCorrect, sum(ones(length(esa.correctOrNotArray((indices))),1) == esa.correctOrNotArray(indices))/length(indices)];
        
        % Get the confidence
        meanConfidence = [meanConfidence, mean(esa.confidenceResponseArray(indices))];
        
        % Get the avg frame time
        meanFrameTime = [meanFrameTime, mean(esa.avgFrameTimeArray(indices))];
        
    end
    
    coherenceData.pCorrect = [coherenceData.pCorrect; pCorrect];
    coherenceData.meanConfidence = [coherenceData.meanConfidence; meanConfidence];
    coherenceData.meanFrameTime = [coherenceData.meanFrameTime; meanFrameTime];
    coherenceData.correct_incorrect_noResponse = [coherenceData.correct_incorrect_noResponse; [totalCorrect, totalIncorrect, totalNoResponse]];
    
end