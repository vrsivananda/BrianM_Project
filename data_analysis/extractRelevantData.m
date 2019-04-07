function esa = extractRelevantData(sa)
    
    % These 4 workers below had their blocks tagged improperly, so we need
    % to correct the tagging here.

    if(strcmp(sa.workerId{1},'workerId_1554341343'))
    % Get the indices for the experiment block
    exp_block_indices = [returnIndices(sa.trialType,'exp_block_5'), ...
                         returnIndices(sa.trialType,'exp_block_3'), ...
                         returnIndices(sa.trialType,'exp_block_6'), ...
                         returnIndices(sa.trialType,'exp_block_2'), ...
                         returnIndices(sa.trialType,'exp_block_4'), ...
                         returnIndices(sa.trialType,'exp_block_1')];
                     
    elseif(strcmp(sa.workerId{1},'workerId_1554348163'))
    % Get the indices for the experiment block
    exp_block_indices = [returnIndices(sa.trialType,'exp_block_2'), ...
                         returnIndices(sa.trialType,'exp_block_3'), ...
                         returnIndices(sa.trialType,'exp_block_5'), ...
                         returnIndices(sa.trialType,'exp_block_4'), ...
                         returnIndices(sa.trialType,'exp_block_6'), ...
                         returnIndices(sa.trialType,'exp_block_1')];
                     
    elseif(strcmp(sa.workerId{1},'workerId_1554332721'))
    % Get the indices for the experiment block
    exp_block_indices = [returnIndices(sa.trialType,'exp_block_1'), ...
                         returnIndices(sa.trialType,'exp_block_5'), ...
                         returnIndices(sa.trialType,'exp_block_3'), ...
                         returnIndices(sa.trialType,'exp_block_6'), ...
                         returnIndices(sa.trialType,'exp_block_2'), ...
                         returnIndices(sa.trialType,'exp_block_4')];
                     
    elseif(strcmp(sa.workerId{1},'workerId_1554348941'))
    % Get the indices for the experiment block
    exp_block_indices = [returnIndices(sa.trialType,'exp_block_2'), ...
                         returnIndices(sa.trialType,'exp_block_5'), ...
                         returnIndices(sa.trialType,'exp_block_1'), ...
                         returnIndices(sa.trialType,'exp_block_4'), ...
                         returnIndices(sa.trialType,'exp_block_6'), ...
                         returnIndices(sa.trialType,'exp_block_3')];
    else
    % Get the indices for the experiment block
    exp_block_indices = [returnIndices(sa.trialType,'exp_block_1'), ...
                         returnIndices(sa.trialType,'exp_block_2'), ...
                         returnIndices(sa.trialType,'exp_block_3'), ...
                         returnIndices(sa.trialType,'exp_block_4'), ...
                         returnIndices(sa.trialType,'exp_block_5'), ...
                         returnIndices(sa.trialType,'exp_block_6')];
    end
        
        
        
    % Columns we want to extract
    columns = {...
        'nDotsArray', ...
        'coherenceArray', ...
        'coherentDirectionArray', ...
        'stimulusSideArray', ...
        'leftRightResponseArray', ...
        'leftRightRTArray', ...
        'correctOrNotArray', ...
        'confRespOrNotArray', ...
        'confidenceResponseArray', ...
        'confidenceRTArray', ...
        'avgFrameTimeArray'
    };
                     
    % For loop that goes through each column from the RDK-BM data
    for i = 1:length(columns)
        
        % Extract the string from the cell array
        column = columns{i};
    
        % Prepare the container to merge all 3 blocks
        container = [];

        % For loop that goes through each of the blocks
        for index = exp_block_indices

            % Take out the string array
            arr = sa.(column){index};

            % Truncate the ends of the array
            arr = arr(2:end-1);

            % Parse it into a cell array
            arr = strsplit(arr,',')';
            
            % Convert the nulls to '0's
            if (strcmp(column,'confidenceResponseArray'))
                for j = 1:length(arr)
                    if(strcmp(arr{j},'null'))
                        arr{j} = '0';
                    end
                end
            end
            
            % Truncate the end for these 2 arrays
            if (strcmp(column,'confidenceResponseArray') || ...
                strcmp(column,'leftRightResponseArray'))
                arr = arr(1:end-1);
            end
            
            % Check if it can be converted to numbers
            [num, canBeConverted] = str2num(arr{1});
                
            if(canBeConverted)
                % Convert strings in cell array into numbers
                arr = cellfun(@str2num,arr);
            % Else it is the 'left'/'right' cell array and we convert it to
            % numeric
            else
                tempArr = nan(length(arr),1);
                for k = 1:length(arr)
                    if(strcmp(arr{k},'"left"'))
                        tempArr(k) = 1;
                    elseif(strcmp(arr{k},'"right"'))
                        tempArr(k) = 2;
                    else
                        tempArr(k) = 0;
                    end
                end
                arr = tempArr;
            end

            % Add this to the container
            container = [container; arr];

        end
        
        % Place the container to esa
        esa.(column) = container;
    
    end
    
                     
end