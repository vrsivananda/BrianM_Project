clear;
nTrials = 1000;

preStimDurMin_inSecs = 1;
preStimDurMax_inSecs = 3;
expcdf_cutoff = expinv(.9); 

i_trial = 0;
while i_trial < nTrials
    t = exprnd(1);
    if t < expcdf_cutoff
        i_trial = i_trial + 1;
        preStimDur_inSecs(i_trial,1) = ((preStimDurMax_inSecs - preStimDurMin_inSecs)/expcdf_cutoff)*t + preStimDurMin_inSecs;
    end
end