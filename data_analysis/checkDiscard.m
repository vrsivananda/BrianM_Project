function [discarded, discardSubject] = checkDiscard(esa, sa, discarded)
    
    % If trialcount isn't there, discard it
    if(length(esa.nDotsArray) ~= 300)
        discarded.subjectId = [discarded.subjectId; sa.workerId{1}];
        discarded.nInsufficientData = discarded.nInsufficientData + 1;
        discardSubject = 1;
    elseif(sum(zeros(length(esa.correctOrNotArray),1) == esa.correctOrNotArray) >= 30)
        discarded.subjectId = [discarded.subjectId; sa.workerId{1}];
        discarded.nTooLittleResponse = discarded.nTooLittleResponse + 1;
        discardSubject = 1;
    else
        discardSubject = 0;
    end
    
end