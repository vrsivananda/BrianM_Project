% This script goes through the data, subject-by-subject, and analyzes them. 
% This analyzes the data in a data structure form by default, but you can
% change it to analyze the cell array or other data if you have it

clear;
close all;

% Create a path to the text file with all the subjects
path='subjects.txt';
% Make an ID for the subject list file
subjectListFileId=fopen(path);
% Read in the number from the subject list
numberOfSubjects = fscanf(subjectListFileId,'%d');


% Declare the structure arrays to store the processed data
discarded.subjectId = [];
discarded.nInsufficientData = 0;
discarded.nTooLittleResponse = 0;

coherenceData.pCorrect = [];
coherenceData.meanConfidence = [];
coherenceData.meanFrameTime = [];
coherenceData.correct_incorrect_noResponse = [];
coherenceData.coherences = [0.2, 0.4, 0.6, 0.8, 1];

% For loop that loops through all the subjects
for i = 1:numberOfSubjects
    
    % Read the subject ID from the file, stop after each line
    subjectId = fscanf(subjectListFileId,'%s',[1 1]);
    % Print out the subject ID
    fprintf('subject: %s\n',subjectId);
    
    % Import the data
    Alldata = load([pwd '/Data/structure_data_' subjectId '.mat']);
    % Structure Array that contains all the data for this subject
    sa = Alldata.data;
    
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%% Your data extraction here %%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    
    % Extract the relevant data and place it in esa (extracted sa)
    esa = extractRelevantData(sa);
    Alldata.data.esa = esa;
    data = Alldata.data;
    
    fileName = [pwd '/Data/structure_data_' subjectId '.mat'];
    disp(fileName);
    save(fileName,'data');
    
    % Check if the data should be discarded
    [discarded, discardSubject] = checkDiscard(esa, sa, discarded);
    
    if(discardSubject)
        continue;
    end
    
    coherenceData = getCoherenceData(esa, coherenceData);
    
    
    
    
    
    
end % End of for loop that loops through each subject


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%% Your analysis here %%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

coherenceData = analyzeCoherenceData(coherenceData);





