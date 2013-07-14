////////////////////////////////////////////////////////////////////////////////
// -------------------------------------------------------------------------- //
//                                                                            //
//                        (C) 2013-2013  David Krutsko                        //
//                        See LICENSE.md for copyright                        //
//                                                                            //
// -------------------------------------------------------------------------- //
////////////////////////////////////////////////////////////////////////////////

"use strict";

//----------------------------------------------------------------------------//
// Main                                                                       //
//----------------------------------------------------------------------------//

////////////////////////////////////////////////////////////////////////////////
/// Entry point for when the website loads.

$(function()
{
	//----------------------------------------------------------------------------//
	// Cache                                                                      //
	//----------------------------------------------------------------------------//

	// Cache document objects
	var uiBody = $("body");

	var uiBtnTime = $("#clock .btn-time");
	var uiBtnHex  = $("#clock .btn-hex");

	var uiTime = $("#clock .time");
	var uiHex  = $("#clock .hex" );

	// Display clock
	$("#clock").show();



	//----------------------------------------------------------------------------//
	// Clock                                                                      //
	//----------------------------------------------------------------------------//

	// The clock update function
	function Update (duration)
	{
		// Get the current time
		var time = new Date();
		var h = time.getHours();
		var m = time.getMinutes();
		var s = time.getSeconds();

		// Determine color values
		var r = (Math.round (232 * (h / 23))).toString (16);
		var g = (Math.round (232 * (m / 59))).toString (16);
		var b = (Math.round (232 * (s / 59))).toString (16);

		// Zero lead current times
		h = (h < 10 ? "0" : "") + h;
		m = (m < 10 ? "0" : "") + m;
		s = (s < 10 ? "0" : "") + s;

		r = (r.length === 1 ? "0" : "") + r;
		g = (g.length === 1 ? "0" : "") + g;
		b = (b.length === 1 ? "0" : "") + b;

		// Update the time text
		uiTime.text (h + ":" + m + ":" + s);
		uiHex .text ((r + g + b).toUpperCase());

		// Update background color
		uiBody.stop().animate ({ backgroundColor:
			"#" + r + g + b }, duration, "linear");
	}

	// Set the update interval
	setInterval (Update, 500, 400);
	Update (0);



	//----------------------------------------------------------------------------//
	// Mode                                                                       //
	//----------------------------------------------------------------------------//

	// Time display mode
	var showTime = true;

	// Connect the time button
	uiBtnTime.click (function()
	{
		if (!showTime)
		{
			showTime = true;

			uiBtnTime.fadeTo (400, 1.0);
			uiBtnHex .fadeTo (400, 0.5);

			uiTime.fadeTo (400, 1.0);
			uiHex .fadeTo (400, 0.0);
		}
	});

	// Connect the hex button
	uiBtnHex.click (function()
	{
		if (showTime)
		{
			showTime = false;

			uiBtnTime.fadeTo (400, 0.5);
			uiBtnHex .fadeTo (400, 1.0);

			uiTime.fadeTo (400, 0.0);
			uiHex .fadeTo (400, 1.0);
		}
	});
});
