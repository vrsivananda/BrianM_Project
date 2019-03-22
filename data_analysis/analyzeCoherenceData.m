function coherenceData = analyzeCoherenceData(coherenceData)
    
    % Get the cell array of field names
    fieldNames = fieldnames(coherenceData);
    
    % Go through each field and analyze it
    for i = 1:length(fieldNames)
        
        fieldName = fieldNames{i};
        
        % Get the matrix
        matrix = coherenceData.(fieldName);
        
        % Calculate the values
        meanMatrix = mean(matrix,1);
        sdMatrix = std(matrix,1);
        seMatrix = sdMatrix./sqrt(size(matrix,1));
        
        % Create the field names
        meanName = [fieldName '_mean'];
        sdName = [fieldName '_sd'];
        seName = [fieldName '_se'];
        
        % Place them in the structure array
        coherenceData.(meanName) = meanMatrix;
        coherenceData.(sdName) = sdMatrix;
        coherenceData.(seName) = seMatrix;
    end
    
end