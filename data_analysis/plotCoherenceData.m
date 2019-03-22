function plotCoherenceData(coherenceData)
    
    
    
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%    Percent Correct     %%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    
    figure;
        
        x_mean = coherenceData.coherences;
        y_mean = coherenceData.pCorrect_mean;
        
        x_se =    e_norm_se;
        y_se = perf_norm_se;
        
        % errorbar(x_mean, y_mean, y_se, y_se, x_se, x_se, 'o');
        plot(x_mean, y_mean, 'Color', color, 'Marker', 'o', 'MarkerFaceColor', color);
        
    
    % Format graph
    title(['Performance vs. Normalized Evidence (n = ' num2str(n_subjects) ')']);
    ylabel('% Correct');
    xlabel('e normalized');
    ylim([0, 1]);
    
    
    % ------ Saving ------
    
    % Only save the figure if we want to
    if(saveFigure)
        
        % Create the file name and path to save
        savingFileName = 'perf_vs_e_norm.jpg';
        savingFilePath = [pwd '/Figures/Overall/' savingFileName];
        
        % Save the data
        saveas(gcf,savingFilePath);
        
    end
    
end