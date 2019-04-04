
jsPsych.plugins["RDK-BM"] = (function() {

	var plugin = {};
	
	plugin.info = {
		name: "RDK-BM",
		parameters: {
			n_dots_array: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "n_dots_array",
				default: [],
				array: true,
				description: "n_dots_array"
			},
			coherence_array: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "coherence_array",
				default: [],
				array: true,
				description: "coherence_array"
			},
			stimulus_side_array: {
				type: jsPsych.plugins.parameterType.STRING,
				pretty_name: "stimulus_side_array",
				default: [],
				array: true,
				description: "stimulus_side_array"
			},
			coherent_direction_array: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "coherent_direction_array",
				default: [],
				array: true,
				description: "coherent_direction_array"
			},
			preStim_dur_in_ms: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "preStim_dur_in_ms",
				default: [],
				array: true,
				description: "preStim_dur_in_ms"
			},
			choices: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "Choices",
				default: [],
				array: true,
				description: "The valid keys that the subject can press to indicate a response"
			},
			trial_duration: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "Trial duration",
				default: 6000000,
				description: "The length of stimulus presentation"
			},
			response_ends_trial: {
				type: jsPsych.plugins.parameterType.BOOL,
				pretty_name: "Response ends trial",
				default: true,
				description: "If true, then any valid key will end the trial"
			},
			dot_radius: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "Dot radius",
				default: 2,
				description: "The radius of the dots in pixels"
			},
			dot_life: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "Dot life",
				default: 20,
				description: "The number of frames that pass before each dot disappears and reappears somewhere else"
			},
			move_distance: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "Move distance",
				default: 1,
				description: "The distance in pixels each dot moves per frame"
			},
			aperture_width: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "Aperture width",
				default: 600,
				description: "The width of the aperture in pixels"
			},
			aperture_height: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "Aperture height",
				default: 400,
				description: "The height of the aperture in pixels"
			},
			dot_color: {
				type: jsPsych.plugins.parameterType.STRING,
				pretty_name: "Dot color",
				default: "black",
				description: "The color of the dots"
			},
			aperture_type: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "Aperture Type",
				default: 2,
				description: "The shape of the aperture"
			},
			aperture_center_x: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "Aperture center X",
				default: window.innerWidth/2,
				description: "The x-coordinate of the center of the aperture"
			},
			aperture_center_y: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "Aperture center Y",
				default: window.innerHeight/2,
				description: "The y-coordinate of the center of the aperture"
			},
			fixation_cross: {
			    type: jsPsych.plugins.parameterType.INT, //boolean
			    pretty_name: "Fixation cross",
			    default: true,
			    description: "If true, then a fixation cross will be present in the middle of the screen"
			},
			fixation_cross_width: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "Fixation cross width",
				default: 20,
				description: "The width of the fixation cross in pixels"
			},
			fixation_cross_height: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "Fixation cross height",
				default: 20,
				description: "The height of the fixation cross in pixels"
			},
			fixation_cross_thickness: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "Fixation cross thickness",
				default: 1,
				description: "The thickness of the fixation cross"
			},
			border: {
				type: jsPsych.plugins.parameterType.BOOL,
				pretty_name: "Border",
				default: false,
				description: "The presence of a border around the aperture"
			},
			border_width: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: "Border width",
				default: 1,
				description: "The thickness of the border in pixels"
			},
			border_color: {
				type: jsPsych.plugins.parameterType.STRING,
				pretty_name: "Border Color",
				default: 1,
				description: "The color of the border"
			},
			visible_circle: {
				type: jsPsych.plugins.parameterType.BOOL,
				pretty_name: "visible_circle",
				default: false,
				description: "visible_circle"
			}
		
		}
	}


	//BEGINNING OF TRIAL 
	plugin.trial = function(display_element, trial) {

		//--------------------------------------
		//---------SET PARAMETERS BEGIN---------
		//--------------------------------------
		
		
		trial.choices = assignParameterValue(trial.choices, []);
		trial.trial_duration = assignParameterValue(trial.trial_duration, 6000000);
		trial.response_ends_trial = assignParameterValue(trial.response_ends_trial, false);
		trial.dot_radius = assignParameterValue(trial.dot_radius, 2);
		trial.dot_life = assignParameterValue(trial.dot_life, -1);
		trial.move_distance = assignParameterValue(trial.move_distance, 2);
		trial.aperture_width = assignParameterValue(trial.aperture_width, 600);
		trial.aperture_height = assignParameterValue(trial.aperture_height, 400);
		trial.dot_color = assignParameterValue(trial.dot_color, "black");
		trial.aperture_type = assignParameterValue(trial.aperture_type, 2);
		trial.aperture_center_x = assignParameterValue(trial.aperture_center_x, window.innerWidth/2);
		trial.aperture_center_y = assignParameterValue(trial.aperture_center_y, window.innerHeight/2);
		trial.fixation_cross = assignParameterValue(trial.fixation_cross, false); 
		trial.fixation_cross_width = assignParameterValue(trial.fixation_cross_width, 20);
		trial.fixation_cross_height = assignParameterValue(trial.fixation_cross_height, 20);
		trial.fixation_cross_thickness = assignParameterValue(trial.fixation_cross_thickness, 1);
		trial.border = assignParameterValue(trial.border, false);
		trial.border_width =  assignParameterValue(trial.border_width, 1);
		trial.border_color = assignParameterValue(trial.borderColor, "black");
		trial.visible_circle = assignParameterValue(trial.visible_circle, false);
		
		
		//For square and circle, set the aperture height == aperture width
		if (apertureType == 1 || apertureType == 3) {
			trial.aperture_height = trial.aperture_width;
		}
		
		
		//Convert the parameter variables to those that the code below can use

		//Trial parameter arrays
		var nDotsArray = trial.n_dots_array;
		var coherenceArray = trial.coherence_array;
		var stimulusSideArray = trial.stimulus_side_array;
		var coherentDirectionArray = trial.coherent_direction_array;
		var preStimDurInMS = trial.preStim_dur_in_ms;

		
		//Duration variables (ms)
		//var minPreStimDuration = 1000;
		//var maxPreStimDuration = 3000;
		var stimulusDuration = 500;
		var postStimDuration = 3000;
				
				
		//Keyboard responses
		var leftResponseKeyCode = 49; //49 is '1'
		var rightResponseKeyCode = 50;//50 is '2'
		var confidenceKeyCode1 = 55; //55 is '7'
		var confidenceKeyCode2 = 56; //56 is '8'
		var confidenceKeyCode3 = 57; //57 is '9'
		var confidenceKeyCode4 = 48; //58 is '0'
		
		
		var backgroundColor = "white"; //Color of the background
		var fixationCrossColor = "red"; //The color of the fixation cross
		var leftRightFCColor = "black";
		var confidenceFCColor = "gray";
		
		
		var stimulusDistanceX = 200; //How far the stimulus is from the center
		var stimulusRadius = 150; //Radius of the stimulus circle
		var coherentDirection = coherentDirectionArray[0];
		
		var currentFCColor = fixationCrossColor; //This is used to update the color
		var remainderFCColor = backgroundColor;
		//Fixation Cross Parameters
		var fixationCross = trial.fixation_cross; //To display or not to display the cross
		var fixationCrossWidth = trial.fixation_cross_width;  //The width of the fixation cross in pixels
		var fixationCrossHeight = trial.fixation_cross_height; //The height of the fixation cross in pixels
		var fixationCrossThickness = trial.fixation_cross_thickness; //The thickness of the fixation cross, must be positive number above 1
		
		var nDots = trial.n_dots_array[0]; //Number of dots per set (equivalent to number of dots per frame)
		var nSets = trial.number_of_sets; //Number of sets to cycle through per frame
		var coherence; //Proportion of dots to move together, range from 0 to 1
		var dotRadius = trial.dot_radius; //Radius of each dot in pixels
		var dotLife = trial.dot_life; //How many frames a dot will keep following its trajectory before it is redrawn at a random location. -1 denotes infinite life (the dot will only be redrawn if it reaches the end of the aperture).
		var moveDistance = trial.move_distance; //How many pixels the dots move per frame
		var apertureWidth = trial.aperture_width; // How many pixels wide the aperture is. For square aperture this will be the both height and width. For circle, this will be the diameter.
		var apertureHeight = trial.aperture_height; //How many pixels high the aperture is. Only relevant for ellipse and rectangle apertures. For circle and square, this is ignored.
		var dotColor = trial.dot_color; //Color of the dots
		var apertureCenterX = trial.aperture_center_x; // The x-coordinate of center of the aperture on the screen, in pixels
		var apertureCenterY = trial.aperture_center_y; // The y-coordinate of center of the aperture on the screen, in pixels
		


		/* 
		Shape of aperture
		 1 - Circle
		 2 - Ellipse
		 3 - Square
		 4 - Rectangle
		 */
		 var apertureType = trial.aperture_type;
		 
		//Border Parameters
		var border = trial.border; //To display or not to display the border
		var borderThickness = trial.border_thickness; //The width of the border in pixels
		var borderWidth = trial.border_width;
		var borderColor = trial.border_color; //The color of the border
		
		
		var visibleCircle = trial.visible_circle; //To display or not to display the circle



		//--------------------------------------
		//----------SET PARAMETERS END----------
		//--------------------------------------

		//--------Set up Canvas begin-------
		
		//Create a canvas element and append it to the DOM
		var canvas = document.createElement("canvas");
		display_element.appendChild(canvas); 
		
		
		//The document body IS 'display_element' (i.e. <body class="jspsych-display-element"> .... </body> )
		var body = document.getElementsByClassName("jspsych-display-element")[0];
		
		//Save the current settings to be restored later
		var originalMargin = body.style.margin;
		var originalPadding = body.style.padding;
		var originalBackgroundColor = body.style.backgroundColor;
		
		//Remove the margins and paddings of the display_element
		body.style.margin = 0;
		body.style.padding = 0;
		body.style.backgroundColor = backgroundColor; //Match the background of the display element to the background color of the canvas so that the removal of the canvas at the end of the trial is not noticed

		//Remove the margins and padding of the canvas
		canvas.style.margin = 0;
		canvas.style.padding = 0;		
		
		//Get the context of the canvas so that it can be painted on.
		var ctx = canvas.getContext("2d");

		//Declare variables for width and height, and also set the canvas width and height to the window width and height
		var canvasWidth = canvas.width = window.innerWidth;
		var canvasHeight = canvas.height = window.innerHeight;

		//Set the canvas background color
		canvas.style.backgroundColor = backgroundColor;

		//--------Set up Canvas end-------
		
		
		
		//--------RDK variables and function calls begin--------

		// [This is the main part of RDK that makes everything run]

		//Variables to control trials
		var stimulusIsOn = 0; //To control if the stimulus is present
		var preStimIsOn = 0;
		var postStimIsOn = 1;
		var preStimTimeStamp;
		var stimulusTimeStamp;
		var postStimTimeStamp = performance.now();
		var preStimDuration = getPreStimDuration();

		var nTrials = nDotsArray.length;
		console.log("nTrials: " + nTrials);
		var trialCounter = 0;
		var stimulusSide; //'left' or 'right'

		//Variables to control responses
		var openToLeftRightResponse = 0;
		var openToConfidenceResponse = 0;
		var leftRightResponseArray = [];
		var confidenceResponseArray = [];
		//Set up the event listener
		window.onkeyup = function(e) {
			keyIsPressed(e);
		}
		var correctOrNotArray = [];
		var confRespOrNotArray = [];
		var confRespOrNot_flag = 0;//Per trial
		var points = 0;
		
		var avgFrameTimeArray = [];
		var tempFrameTime = [];
		var previousTimestamp = null;

		var stimulusLeftX = apertureCenterX - stimulusDistanceX;
		var stimulusLeftY = apertureCenterY;
		var stimulusRightX = apertureCenterX + stimulusDistanceX;
		var stimulusRightY = apertureCenterY;

		//Declare aperture parameters for initialization based on shape (used in initializeApertureDimensions function below)
		var horizontalAxis;
		var verticalAxis;

		//Initialize the aperture parameters
		initializeApertureDimensions();

		//Calculate the x and y jump sizes for coherent dots
		var coherentJumpSizeX;
		var coherentJumpSizeY;

		var dotArray = makeDotArray(); //Declare a global variable to hold the current array

		//Initialize stopping condition for animateDotMotion function that runs in a loop
		var stopDotMotion = false;
		
		//Variable to control the frame rate, to ensure that the first frame is skipped because it follows a different timing
		var firstFrame = true; //Used to skip the first frame in animate function below (in animateDotMotion function)
		
		//Variable to start the timer when the time comes
		var timerHasStarted = false;

		//Initialize object to store the response data. Default values of -1 are used if the trial times out and the subject has not pressed a valid key
		var response = {
			rt: -1,
			key: -1
		}
		
		//Declare a global timeout ID to be initialized below in animateDotMotion function and to be used in after_response function
		var timeoutID;
		
		//Declare global variable to be defined in startKeyboardListener function and to be used in end_trial function
		var keyboardListener; 
		
		//Declare global variable to store the frame rate of the trial
		var frameRate = []; //How often the monitor refreshes, in ms. Currently an array to store all the intervals. Will be converted into a single number (the average) in end_trial function.
		
		//variable to store how many frames were presented.
		var numberOfFrames = 0;

		//This runs the dot motion simulation, updating it according to the frame refresh rate of the screen.
		animateDotMotion();
		
		
		//--------RDK variables and function calls end--------



		//-------------------------------------
		//-----------FUNCTIONS BEGIN-----------
		//-------------------------------------

		//----JsPsych Functions Begin----

		//Function to end the trial proper
		function end_trial() {
			
			//Stop the dot motion animation
			stopDotMotion = true;
			
			//Backstop for these arrays
			leftRightResponseArray[trialCounter] = 'end';
			confidenceResponseArray[trialCounter] = 'end';

			//Kill the keyboard listener if keyboardListener has been defined
			if (typeof keyboardListener !== 'undefined') {
				jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
			}

			//Place all the data to be saved from this trial in one data object
			var trial_data = { 
				"nDotsArray": JSON.stringify(trial.n_dots_array),
				"coherenceArray": JSON.stringify(trial.coherence_array),
				"stimulusSideArray": JSON.stringify(trial.stimulus_side_array),
				"coherentDirectionArray": JSON.stringify(trial.coherent_direction_array),
				"leftRightResponseArray": JSON.stringify(leftRightResponseArray),
				"confidenceResponseArray": JSON.stringify(confidenceResponseArray),
				"avgFrameTimeArray": JSON.stringify(avgFrameTimeArray),
				"correctOrNotArray": JSON.stringify(correctOrNotArray),
				"confRespOrNotArray": JSON.stringify(confRespOrNotArray),
				"dot_radius": trial.dot_radius,
				"dot_life": trial.dot_life,
				"move_distance": trial.move_distance,
				"aperture_width": trial.aperture_width,
				"aperture_height": trial.aperture_height,
				"dot_color": trial.dot_color,
				"background_color": backgroundColor,
				"aperture_type": trial.aperture_type,
				"aperture_center_x": trial.aperture_center_x,
				"aperture_center_y": trial.aperture_center_y,
				"fixation_cross": trial.fixation_cross,
				"fixation_cross_width": trial.fixation_cross_width,
				"fixation_cross_height": trial.fixation_cross_height,
				"fixation_cross_color": trial.fixation_cross_color,
				"fixation_cross_thickness": trial.fixation_cross_thickness,
				"border": trial.border,
				"border_thickness": trial.border_thickness,
				"border_color": trial.border_color,
				"canvas_width": canvasWidth,
				"canvas_height": canvasHeight,
				"points": points
				
			}
			
			//Remove the canvas as the child of the display_element element
			display_element.innerHTML='';
			
			//Restore the settings to JsPsych defaults
			body.style.margin = originalMargin;
			body.style.padding = originalPadding;
			body.style.backgroundColor = originalBackgroundColor

			//End this trial and move on to the next trial
			jsPsych.finishTrial(trial_data);
			
		} //End of end_trial

		//----JsPsych Functions End----

		//----RDK Functions Begin----

		//Initialize the parameters for the aperture for further calculation
		function initializeApertureDimensions() {
			//For circle and square
			if (apertureType == 1 || apertureType == 3) {
				horizontalAxis = verticalAxis = apertureWidth / 2;
			}
			//For ellipse and rectangle
			else if (apertureType == 2 || apertureType == 4) {
				horizontalAxis = apertureWidth / 2;
				verticalAxis = apertureHeight / 2;
			}
		}

    	//Function to update all the dots all the apertures and then draw them
    	function updateAndDraw(){
	        //Clear the canvas by drawing over the current dots
	        clearDots();
			//Update the dots
			updateDots();
			//Draw on the canvas
			draw();
		} 
			
	    //Function that clears the dots on the canvas by drawing over it with the color of the background
	    function clearDots(){
	    	//Loop through the dots one by one and draw them
	    	for (var i = 0; i < nDots; i++) {
	    		dot = dotArray[i];
	    		ctx.beginPath();
	    		ctx.arc(dot.x, dot.y, dotRadius+1, 0, Math.PI * 2);
	    		ctx.fillStyle = backgroundColor;
	    		ctx.fill();
	    	}
		}

	    //Update the dots with their new location
	    function updateDots() {

			//Loop through the dots one by one and update them accordingly
			for (var i = 0; i < nDots; i++) {
				var dot = dotArray[i]; //Load the current dot into the variable for easy handling
				
		    	//Generate a random value
		    	var randomValue = Math.random();

				//Update based on the dot's update type
				if (dot.updateType == "random direction") {
					dot = randomDirectionUpdate(dot);
				} else if (dot.updateType == "coherent direction") {
					dot = coherentDirectionUpdate(dot);
			    }//End of if dotUpdate == ...

				//Increment the life count
				dot.lifeCount++;

				//Check if out of bounds or if life ended
				if (lifeEnded(dot) || outOfBounds(dot)) {
					dot = resetLocation(dot);
					if(stimulusIsOn && dotInCircle(dot) && Math.random() <= coherence){
						dot.updateType = 'coherent direction';
					}
					else{
						dot = setvx2vy2(dot);
						dot.updateType = 'random direction';
					}
				}

			} //End of for loop
		} //End of updateDots function
		
	    //Function to determine if the dot is in the circle
	    function dotInCircle(dot){
	    	
	    	//Determine if it is the left or right circle and calculate the distance from the circle center
	    	if(stimulusSide === 'left'){
	    		return Math.sqrt(Math.pow(dot.x-stimulusLeftX,2) + Math.pow(dot.y-stimulusLeftY,2)) <= stimulusRadius;
	    	}else if(stimulusSide === 'right'){
	    		return Math.sqrt(Math.pow(dot.x-stimulusRightX,2) + Math.pow(dot.y-stimulusRightY,2)) <= stimulusRadius;
	    	}
	  	}
	  

		//Function to check if dot life has ended
		function lifeEnded(dot) {
			//If we want infinite dot life
			if (dotLife < 0) {
				dot.lifeCount = 0; //resetting to zero to save memory. Otherwise it might increment to huge numbers.
				return false;
			}
			//Else if the dot's life has reached its end
			else if (dot.lifeCount >= dotLife) {
				dot.lifeCount = 0;
				return true;
			}
			//Else the dot's life has not reached its end
			else {
				return false;
			}
		}

		//Function to check if dot is out of bounds
		function outOfBounds(dot) {
			//For circle and ellipse
			if (apertureType == 1 || apertureType == 2) {
				if (dot.x < xValueNegative(dot.y) || dot.x > xValuePositive(dot.y) || dot.y < yValueNegative(dot.x) || dot.y > yValuePositive(dot.x)) {
					return true;
				} else {
					return false;
				}
			}
			//For square and rectangle
			if (apertureType == 3 || apertureType == 4) {
				if (dot.x < (apertureCenterX) - horizontalAxis || dot.x > (apertureCenterX) + horizontalAxis || dot.y < (apertureCenterY) - verticalAxis || dot.y > (apertureCenterY) + verticalAxis) {
					return true;
				} else {
					return false;
				}
			}

		}//End of outOfBounds

		//Calculate the POSITIVE y value of a point on the edge of the ellipse given an x-value
		function yValuePositive(x) {
			var x = x - (apertureCenterX); //Bring it back to the (0,0) center to calculate accurately (ignore the y-coordinate because it is not necessary for calculation)
			return verticalAxis * Math.sqrt(1 - (Math.pow(x, 2) / Math.pow(horizontalAxis, 2))) + apertureCenterY; //Calculated the positive y value and added height/2 to recenter it on the screen 
		}

		//Calculate the NEGATIVE y value of a point on the edge of the ellipse given an x-value
		function yValueNegative(x) {
			var x = x - (apertureCenterX); //Bring it back to the (0,0) center to calculate accurately (ignore the y-coordinate because it is not necessary for calculation)
			return -verticalAxis * Math.sqrt(1 - (Math.pow(x, 2) / Math.pow(horizontalAxis, 2))) + apertureCenterY; //Calculated the negative y value and added height/2 to recenter it on the screen
		}

		//Calculate the POSITIVE x value of a point on the edge of the ellipse given a y-value
		function xValuePositive(y) {
			var y = y - (apertureCenterY); //Bring it back to the (0,0) center to calculate accurately (ignore the x-coordinate because it is not necessary for calculation)
			return horizontalAxis * Math.sqrt(1 - (Math.pow(y, 2) / Math.pow(verticalAxis, 2))) + apertureCenterX; //Calculated the positive x value and added width/2 to recenter it on the screen
		}

		//Calculate the NEGATIVE x value of a point on the edge of the ellipse given a y-value
		function xValueNegative(y) {
			var y = y - (apertureCenterY); //Bring it back to the (0,0) center to calculate accurately (ignore the x-coordinate because it is not necessary for calculation)
			return -horizontalAxis * Math.sqrt(1 - (Math.pow(y, 2) / Math.pow(verticalAxis, 2))) + apertureCenterX; //Calculated the negative x value and added width/2 to recenter it on the screen
		}

		//Draw the dots on the canvas after they're updated
		function draw() {
			//Loop through the dots one by one and draw them
			for (var i = 0; i < nDots; i++) {
				dot = dotArray[i];
				ctx.beginPath();
				ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
		        //[sivaNotes] if statement here, reading the update type of the dot, then filling in the appropriate color
		        ctx.fillStyle = dot.color;
		        ctx.fill();
		    }
		    
    
			//Draw the fixation cross if we want it
			if(fixationCross === true){
				
				//Horizontal line
				ctx.beginPath();
				ctx.lineWidth = fixationCrossThickness;
				ctx.strokeStyle = currentFCColor;
				ctx.moveTo(canvasWidth/2 - fixationCrossWidth, canvasHeight/2);
				ctx.lineTo(canvasWidth/2 + fixationCrossWidth, canvasHeight/2);
				ctx.stroke();
				
				//Vertical line
				ctx.beginPath();
				ctx.lineWidth = fixationCrossThickness;
				ctx.strokeStyle = currentFCColor;
				ctx.moveTo(canvasWidth/2, canvasHeight/2 - fixationCrossHeight);
				ctx.lineTo(canvasWidth/2, canvasHeight/2 + fixationCrossHeight);
				ctx.stroke();
			}
    
		    //Draw the border if we want it
		    if(border === true){
		    	
		    	//For circle and ellipse
		    	if(apertureType === 1 || apertureType === 2){
		    		ctx.lineWidth = borderWidth;
		    		ctx.strokeStyle = borderColor;
		    		ctx.beginPath();
		    		ctx.ellipse(apertureCenterX, apertureCenterY, horizontalAxis+(borderWidth/2), verticalAxis+(borderWidth/2), 0, 0, Math.PI*2);
		    		ctx.stroke();
		    	}//End of if circle or ellipse
		    	
		    	//For square and rectangle
		    	if(apertureType === 3 || apertureType === 4){
		    		ctx.lineWidth = borderWidth;
		    		ctx.strokeStyle = borderColor;
		    		ctx.strokeRect(apertureCenterX-horizontalAxis-(borderWidth/2), apertureCenterY-verticalAxis-(borderWidth/2), (horizontalAxis*2)+borderWidth, (verticalAxis*2)+borderWidth);
		    	}//End of if square or rectangle
		      
		    }//End of if border === true
    
		    //Draw the circle if we want it
		    if(visibleCircle === true){
		    	ctx.lineWidth = 1;
		    	ctx.strokeStyle = "gray";
		    	ctx.beginPath();
		    	ctx.ellipse(stimulusLeftX, stimulusLeftY, stimulusRadius+(1/2), stimulusRadius+(1/2), 0, 0, Math.PI*2);
		    	ctx.stroke();
		    	
		    	
		    	ctx.lineWidth = 1;
		    	ctx.strokeStyle = "gray";
		    	ctx.beginPath();
		    	ctx.ellipse(stimulusRightX, stimulusRightY, stimulusRadius+(1/2), stimulusRadius+(1/2), 0, 0, Math.PI*2);
		    	ctx.stroke();
		    }//End of if visibleCircle === true
      
		}//End of draw

	    //Make the dot array
	    function makeDotArray() {
    	
	    	var tempArray = []
	    	
	    	for (var i = 0; i < nDots; i++) {

				//Initialize a dot to be modified and inserted into the array
				var dot = {
					x: 0, //x coordinate
					y: 0, //y coordinate
					vx: 0, //coherent x jumpsize (if any)
					vy: 0, //coherent y jumpsize (if any)
					vx2: 0, //incoherent (random) x jumpsize (if any)
					vy2: 0, //incoherent (random) y jumpsize (if any)
					lifeCount: Math.floor(randomNumberBetween(0, dotLife)), //Counter for the dot's life. Updates every time it is shown in a frame
					updateType: "", //String to determine how this dot is updated
					color: dotColor
				}
				
				dot = resetLocation(dot);//randomly set the x and y coordinates
				dot = setvxvy(dot); //Set the dot's coherent motion
        		dot = setvx2vy2(dot); //Set the dot's random direction
				dot.updateType = "random direction"; //Initialize as all being random first
				
				tempArray.push(dot);
				
			} //End of for loop
			
			return tempArray;
		}

		//Generates a random number (with decimals) between 2 values
		function randomNumberBetween(lowerBound, upperBound) {
			return lowerBound + Math.random() * (upperBound - lowerBound);
		}

		//Calculate a random x and y coordinate in the ellipse
		function resetLocation(dot) {

			//For circle and ellipse
			if (apertureType == 1 || apertureType == 2) {
				var phi = randomNumberBetween(-Math.PI, Math.PI);
				var rho = Math.random();

				x = Math.sqrt(rho) * Math.cos(phi);
				y = Math.sqrt(rho) * Math.sin(phi);

				x = x * horizontalAxis + apertureCenterX;
				y = y * verticalAxis + apertureCenterY;

				dot.x = x;
				dot.y = y;
			}
			//For square and rectangle
			else if (apertureType == 3 || apertureType == 4) {
				dot.x = randomNumberBetween((apertureCenterX) - horizontalAxis, (apertureCenterX) + horizontalAxis); //Between the left and right edges of the square / rectangle
				dot.y = randomNumberBetween((apertureCenterY) - verticalAxis, (apertureCenterY) + verticalAxis); //Between the top and bottom edges of the square / rectangle
			}

			return dot;
		}

		//Set the vx and vy for the dot to the coherent jump sizes of the X and Y directions
		function setvxvy(dot) {
			dot.vx = calculateCoherentJumpSizeX(coherentDirection);
			dot.vy = calculateCoherentJumpSizeY(coherentDirection);
			return dot;
		}

	    //Calculate coherent jump size in the x direction
	    function calculateCoherentJumpSizeX(coherentDirection) {
	    	var angleInRadians = coherentDirection * Math.PI / 180;
	    	return moveDistance * Math.cos(angleInRadians);
	    }

		//Calculate coherent jump size in the y direction
		function calculateCoherentJumpSizeY(coherentDirection) {
			var angleInRadians = -coherentDirection * Math.PI / 180; //Negative sign because the y-axis is flipped on screen
			return moveDistance * Math.sin(angleInRadians);
		}

		//Set the vx2 and vy2 based on a random angle
		function setvx2vy2(dot) {
			//Generate a random angle of movement
			var theta = randomNumberBetween(-Math.PI, Math.PI);
			//Update properties vx2 and vy2 with the alternate directions
			dot.vx2 = Math.cos(theta) * moveDistance;
			dot.vy2 = -Math.sin(theta) * moveDistance;
			return dot;
		}

		//Updates the x and y coordinates with the alternative move direction
		function randomDirectionUpdate(dot) {
			dot.x += dot.vx2;
			dot.y += dot.vy2;
			dot.latestXMove = dot.vx2;
			dot.latestYMove = dot.vy2;
			return dot;
		}

		//Updates the x and y coordinates by moving it in the x and y coherent directions
		function coherentDirectionUpdate(dot) {
			dot.x += dot.vx;
			dot.y += dot.vy;
			dot.latestXMove = dot.vx;
			dot.latestYMove = dot.vy;
			return dot;
		}


    // TIMING FUNCTIONS

	    function monitorStimulus(){
	    	
			//If this is the first trial or during the postStim
			if(trialCounter === 0 || (!preStimIsOn && !stimulusIsOn && postStimIsOn)){
			  //If the time for the postStim has passed, end the postStim, prepare for the next trial, and start the preStim
			  if(performance.now()-postStimTimeStamp >= postStimDuration){
			  	console.log('postStim Ended');
			  	console.log('preStim Started');
			  	currentFCColor = fixationCrossColor;
			  	prepareDotsForNextTrial();
			  	postStimIsOn = 0;
			  	preStimIsOn = 1;
			  	preStimDuration = getPreStimDuration();
			  	preStimTimeStamp = performance.now();
			  	console.log('-----------------------------');
			  	if(trialCounter === nTrials){
			  		//endExp();
			  		end_trial();
			  	}
			  	else{
			  		trialCounter += 1;
			  		console.log('trialCounter = ' + trialCounter);
			  	}
			  }
			}
			//Else if this is during the preStim
			else if(preStimIsOn && !stimulusIsOn && !postStimIsOn){
			  //If the preStim time has passed, end the preStim and start the stimulus
			  if(performance.now()-preStimTimeStamp >= preStimDuration){
			  	console.log('preStim Ended');
			  	console.log('stimulus Started');
			  	preStimIsOn = 0;
			  	stimulusIsOn = 1;
			  	stimulusTimeStamp = performance.now();
			  }
			}
			//Else if this is during the stimulus
			else if(!preStimIsOn && stimulusIsOn && !postStimIsOn){
				//If the time for the stimulus has passed, end the stimulus and start the postStim
				if(performance.now()-stimulusTimeStamp >= stimulusDuration){
					console.log('stimulus Ended');
					console.log('postStim Started');
					stimulusIsOn = 0;
					setAllDotsToRandom();
					postStimIsOn = 1;
					postStimTimeStamp = performance.now();
					currentFCColor = leftRightFCColor;
					openToLeftRightResponse = 1;
				}
			}

		}//End of monitorStimulus function

		//Function to calculate the duration of the preStimulus
		function getPreStimDuration(){
			let index = Math.floor(randomNumberBetween(0,preStimDurInMS.length));
			console.log("preStimDuration: " + preStimDurInMS[index]);
			return  preStimDurInMS[index];
		}
		
		//Function to change all the dot's updateType to "random direction"
		function setAllDotsToRandom(){
			for(var i = 0; i < nDots; i++){
				dot = dotArray[i];
				dot.updateType = 'random direction';
			}
		}

		//Function to change the number of dots for the following trial
		function prepareDotsForNextTrial(){
			
			//Load in the variables for the following trial
			stimulusSide = stimulusSideArray[trialCounter];
			coherence = coherenceArray[trialCounter];
			coherentDirection = coherentDirectionArray[trialCounter];
			
			//Update the coherent direction for the dots for this trial
			dotArray.forEach(function(dot){
				dot = setvxvy(dot);
			});
			
			//Calculate the number of dots
			let nVisibleDots = nDotsArray[trialCounter];
			let nInvisibleDots = nDots - nVisibleDots;
			
			//Loop through all the dots and change the colors to the appropriate number
			for(var i = 0; i < nDots; i++){
				dot = dotArray[i];
				if(i < nInvisibleDots){
					dot.color = backgroundColor;
				}
				else{
					dot.color = dotColor;
				}
			}
			
			//Calculate Frame Rate only if it is the first trial or more
			if(trialCounter !== 0){
				calculateFrameTime();
				correctOrNot();
				confRespOrNot();
			}
		}
		
		//Function to calculate the frame rate for this trial and push it into the array
		function calculateFrameTime(){
			
			//Sum the time for all frames
			var sumFrameTimes = 0;
			tempFrameTime.forEach(time => sumFrameTimes += time);
			//Divide to get the average Frame time
			var avgFrameTime = sumFrameTimes/tempFrameTime.length;
			//Push it into the array to be saved
			avgFrameTimeArray.push(avgFrameTime);
			console.log("avgFrameTime: " + avgFrameTime);
			
			//Reset the array for the next trial
			tempFrameTime = []; 
		}

		//Function to deal with keypresses
		function keyIsPressed(e){
			
		  //Get the key
		  var key = e.keyCode ? e.keyCode : e.which;
		  
		  //If it is time for the LeftRightResponse
		  if(openToLeftRightResponse){
		  	
		    //If the key matches any of the leftRightResponses
		    if(key === leftResponseKeyCode || key === rightResponseKeyCode ){
		    	
		    	console.log('LeftRight key = ' + key);
		    	
		    	//Push the response into the array
		    	if(key === leftResponseKeyCode){
		    		leftRightResponseArray[trialCounter - 1] = 'left';
		    	}
		    	else if(key === rightResponseKeyCode){
		    		leftRightResponseArray[trialCounter - 1] = 'right';
		    	}
		    	else{
		    		console.log('Something wrong here in LeftRightResponse');
		    	}

		    	//Start listening for confidence responses and change the FC color
		    	openToLeftRightResponse = 0;
		    	openToConfidenceResponse = 1;
		    	currentFCColor = confidenceFCColor;
		  }
		}
		  //Else if it is time to listen for confidence responses
		  else if(openToConfidenceResponse){
		  	
		    //If the key matches any of the confidenceResponses
		    if(key === confidenceKeyCode1 || key === confidenceKeyCode2 || key === confidenceKeyCode3 || key === confidenceKeyCode4){
		    	
		    	console.log('Confidence key = ' + key);
		    	
		    	//Change the flag
				confRespOrNot_flag = 1;
		    	
		    	//Push the response into the array
		    	if(key === confidenceKeyCode1){
		    		confidenceResponseArray[trialCounter - 1] = 1;
		    	}
		    	else if(key === confidenceKeyCode2){
		    		confidenceResponseArray[trialCounter - 1] = 2;
		    	}
		    	else if(key === confidenceKeyCode3){
		    		confidenceResponseArray[trialCounter - 1] = 3;
		    	}
		    	else if(key === confidenceKeyCode4){
		    		confidenceResponseArray[trialCounter - 1] = 4;
		    	}
		    	else{
		    		console.log('Something wrong here in ConfidenceResponse');
		    	}

		    	//Stop listening for confidence responses and change the FC color
		    	openToConfidenceResponse = 0;
		    	currentFCColor = remainderFCColor;
		  	}
		}
		  //Else there is an error
		  else{
		  	console.log('All responses closed.');
		  }
		}
		
		//Function to check if the response was correct
		function correctOrNot(){
			
			let stimulusLocation = stimulusSideArray[trialCounter-1];
			let response = leftRightResponseArray[trialCounter-1];
			 
			//If they got it right
			if((stimulusLocation === 'left'  && response == 'left') || 
			   (stimulusLocation === 'right' && response == 'right')){
				//Place a 1
				correctOrNotArray[trialCounter-1] = 1;
				points += 1;
			}
			//Else if they got it wrong (0)
			else if((stimulusLocation === 'left'  && response == 'right') || 
					(stimulusLocation === 'right' && response == 'left')){
				//Place a -1
				correctOrNotArray[trialCounter-1] = 0;
				
			}
			//Else they did not respond (-1)
			else{
				//Place a 0
				correctOrNotArray[trialCounter-1] = -1;
				points -= 1;
				
			}
		}
		
		//Function to check if the the confidence response was made
		function confRespOrNot(){
			
			console.log("confRespOrNot_flag: " + confRespOrNot_flag);
			if(confRespOrNot_flag){
				confRespOrNotArray[trialCounter-1] = 1;
				points += 1;
			}
			else{
				confRespOrNotArray[trialCounter-1] = -1;
				points -= 1;
			}
			
			//Reset the confResp flag for next trial
			confRespOrNot_flag = 0;
		}


		//Function to make the dots move on the canvas
		function animateDotMotion() {
			//frameRequestID saves a long integer that is the ID of this frame request. The ID is then used to terminate the request below.
			var frameRequestID = window.requestAnimationFrame(animate);
			
			function animate() {
				//If stopping condition has been reached, then stop the animation
				if (stopDotMotion) {
					window.cancelAnimationFrame(frameRequestID); //Cancels the frame request
				}
				//Else continue with another frame request
				else {
          			monitorStimulus();
					updateAndDraw(); //Update and draw each of the dots in their respective apertures
					frameRequestID = window.requestAnimationFrame(animate); //Calls for another frame request
					
					//If this is before the first frame, then start the timestamp
					if(previousTimestamp == null){
						previousTimestamp = performance.now();
					}
					//Else calculate the time and push it into the array
					else{
						var currentTimeStamp = performance.now(); //Variable to hold current timestamp
						tempFrameTime.push(currentTimeStamp - previousTimestamp); //Push the interval into the frameRate array
						previousTimestamp = currentTimeStamp; //Reset the timestamp
					}
				}
			}
		}

		//----RDK Functions End----
	
		//----General Functions Begin//----
		
		//Function to assign the default values for the staircase parameters
		function assignParameterValue(argument, defaultValue){
			return typeof argument !== 'undefined' ? argument : defaultValue;
		}
		
		//----General Functions End//----
		
		//-------------------------------------
		//-----------FUNCTIONS END-------------
		//-------------------------------------


	}; // END OF TRIAL

	//Return the plugin object which contains the trial
	return plugin;
})();