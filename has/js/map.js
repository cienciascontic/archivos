/**
 * map.js
 *
 * Final Project for CS50x: Electricity Generation in US
 * Sarah J. Pryputniewicz
 *
 * Highlights on US Map.
 */

defaultgeneration = "Este área mostrará cuánta electricidad fue generada cada año. <img src='img/2001-2011Generation/US.png'>";

default10year = "Este área mostrará la generación de fuentes de electricidad entre 2001 y 2010 (hasta 2011 para todo Estados Unidos). <img src='img/10year/US.png'>";

/**
 * Hover images over maps.
 */
$(window).load(function()
{ 
	// populate description box with default message
	bootstrap_alert("#10year", default10year);
	
	// populate description box with default message
	bootstrap_alert("#generation", defaultgeneration);

	var legend = $('#legend');
 
	 legend.mapster(
	 {
	 	scaleMap: true
	 });


	// on click, 10-year graph of electricity generation shows up in window beside the map
	var xref = 
		{
			AL: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/AL.png'>",
			AK: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/AK.png'>",
			AZ: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/AZ.png'>",
			AR: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/AR.png'>",
			CA: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/CA.png'>",
			CO: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/CO.png'>",
			CT: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/CT.png'>",
			DC: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/DC.png'>",
			DE: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/DE.png'>",
			FL: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/FL.png'>",
			GA: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/GA.png'>",
			HI: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/HI.png'>",
			ID: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/ID.png'>",
			IL: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/IL.png'>",
			IN: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/IN.png'>",
			IA: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/IA.png'>",
			KS: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/KS.png'>",
			KY: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/KY.png'>",
			LA: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/LA.png'>",
			ME: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/ME.png'>",
			MD: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/MD.png'>",
			MA: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/MA.png'>",
			MI: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/MI.png'>",
			MN: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/MN.png'>",
			MS: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/MS.png'>",
			MO: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/MO.png'>",
			MT: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/MT.png'>",
			NE: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/NE.png'>",
			NV: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/NV.png'>",
			NH: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/NH.png'>",
			NJ: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/NJ.png'>",
			NM: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/NM.png'>",
			NY: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/NY.png'>",
			NC: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/NC.png'>",
			ND: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/ND.png'>",
			OH: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/OH.png'>",
			OK: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/OK.png'>",
			OR: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/OR.png'>",
			PA: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/PA.png'>",
			RI: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/RI.png'>",
			SC: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/SC.png'>",
			SD: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/SD.png'>",
			TN: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/TN.png'>",
			TX: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/TX.png'>",
			UT: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/UT.png'>",
			VT: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/VT.png'>",
			VA: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/VA.png'>",
			WA: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/WA.png'>",
			WV: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/WV.png'>",
			WI: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/WI.png'>",
			WY: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/WY.png'>",
			US: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/10year/US.png'>"
		}
		
	// on click, 10-year graph of electricity generation shows up in window below the map
	var graph = 
		{
			AL: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/AL.png'>",
			AK: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/AK.png'>",
			AZ: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/AZ.png'>",
			AR: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/AR.png'>",
			CA: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/CA.png'>",
			CO: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/CO.png'>",
			CT: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/CT.png'>",
			DC: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/DC.png'>",
			DE: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/DE.png'>",
			FL: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/FL.png'>",
			GA: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/GA.png'>",
			HI: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/HI.png'>",
			ID: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/ID.png'>",
			IL: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/IL.png'>",
			IN: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/IN.png'>",
			IA: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/IA.png'>",
			KS: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/KS.png'>",
			KY: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/KY.png'>",
			LA: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/LA.png'>",
			ME: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/ME.png'>",
			MD: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/MD.png'>",
			MA: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/MA.png'>",
			MI: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/MI.png'>",
			MN: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/MN.png'>",
			MS: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/MS.png'>",
			MO: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/MO.png'>",
			MT: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/MT.png'>",
			NE: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/NE.png'>",
			NV: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/NV.png'>",
			NH: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/NH.png'>",
			NJ: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/NJ.png'>",
			NM: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/NM.png'>",
			NY: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/NY.png'>",
			NC: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/NC.png'>",
			ND: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/ND.png'>",
			OH: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/OH.png'>",
			OK: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/OK.png'>",
			OR: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/OR.png'>",
			PA: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/PA.png'>",
			RI: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/RI.png'>",
			SC: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/SC.png'>",
			SD: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/SD.png'>",
			TN: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/TN.png'>",
			TX: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/TX.png'>",
			UT: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/UT.png'>",
			VT: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/VT.png'>",
			VA: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/VA.png'>",
			WA: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/WA.png'>",
			WV: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/WV.png'>",
			WI: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/WI.png'>",
			WY: "<img src = 'https://has-resources.concord.org/resources/MappedUSA-950px/img/2001-2011Generation/WY.png'>",
			US: "<img src = 'img/2001-2011Generation/US.png'>"
		}

	 var image = $('#usmap');
 
	 image.mapster(
	 {
	 	scaleMap: true,
 	 	altImage: 'img/updatedpiechart.png',
 	 	altImageOpacity: 1.0,
 	 	fill: true,
		fillOpacity: 1.0,
		fillColor: "FFFF00",
		stroke: true,
		strokeColor: "0000FF",
		strokeOpacity: 1.0,
		strokeWidth: 4,
		singleSelect: true,
		mapKey: 'name',
		listKey: 'name',
		onClick: function(e)
		{
			// update piechart graph based on selected area
			$('#10year').html(xref[e.key]);
			
			// update generation capacity graph on selected area
			$('#generation').html(graph[e.key]);
		},
		showToolTip: false,
		toolTipClose: ["area-mouseout"],
		areas: [
			{
				key: "AL",
				toolTip: "<img src = 'img/2010/AL.png'>"
			},
			{
				key: "AK",
				toolTip: "<img src = 'img/2010/AK.png'>"
			},
			{
				key: "AZ",
				toolTip: "<img src = 'img/2010/AZ.png'>"
			},
			{
				key: "AR",
				toolTip: "<img src = 'img/2010/AR.png'>"
			},
			{
				key: "CA",
				toolTip: "<img src = 'img/2010/CA.png'>"
			},
			{
				key: "CO",
				toolTip: "<img src = 'img/2010/CO.png'>"
			},
			{
				key: "CT",
				toolTip: "<img src = 'img/2010/CT.png'>"
			},
			{
				key: "DE",
				toolTip: "<img src = 'img/2010/DE.png'>"
			},
			{
				key: "DC",
				toolTip: "<img src = 'img/2010/DC.png'>"
			},
			{
				key: "FL",
				toolTip: "<img src = 'img/2010/FL.png'>"
			},
			{
				key: "GA",
				toolTip: "<img src = 'img/2010/GA.png'>"
			},
			{
				key: "HI",
				toolTip: "<img src = 'img/2010/HI.png'>"
			},
			{
				key: "ID",
				toolTip: "<img src = 'img/2010/ID.png'>"
			},
			{
				key: "IL",
				toolTip: "<img src = 'img/2010/IL.png'>"
			},
			{
				key: "IN",
				toolTip: "<img src = 'img/2010/IN.png'>"
			},
			{
				key: "IA",
				toolTip: "<img src = 'img/2010/IA.png'>"
			},
			{
				key: "KS",
				toolTip: "<img src = 'img/2010/KS.png'>"
			},
			{
				key: "KY",
				toolTip: "<img src = 'img/2010/KY.png'>"
			},
			{
				key: "LA",
				toolTip: "<img src = 'img/2010/LA.png'>"
			},
			{
				key: "ME",
				toolTip: "<img src = 'img/2010/ME.png'>"
			},
			{
				key: "MD",
				toolTip: "<img src = 'img/2010/MD.png'>"
			},
			{
				key: "MA",
				toolTip: "<img src = 'img/2010/MA.png'>"
			},
			{
				key: "MI",
				toolTip: "<img src = 'img/2010/MI.png'>"
			},
			{
				key: "MN",
				toolTip: "<img src = 'img/2010/MN.png'>"
			},
			{
				key: "MS",
				toolTip: "<img src = 'img/2010/MS.png'>"
			},
			{
				key: "MO",
				toolTip: "<img src = 'img/2010/MO.png'>"
			},
			{
				key: "MT",
				toolTip: "<img src = 'img/2010/MT.png'>"
			},
			{
				key: "NE",
				toolTip: "<img src = 'img/2010/NE.png'>"
			},
			{
				key: "NV",
				toolTip: "<img src = 'img/2010/NV.png'>"
			},
			{
				key: "NH",
				toolTip: "<img src = 'img/2010/NH.png'>"
			},
			{
				key: "NJ",
				toolTip: "<img src = 'img/2010/NJ.png'>"
			},
			{
				key: "NM",
				toolTip: "<img src = 'img/2010/NM.png'>"
			},
			{
				key: "NY",
				toolTip: "<img src = 'img/2010/NY.png'>"
			},
			{
				key: "NC",
				toolTip: "<img src = 'img/2010/NC.png'>"
			},
			{
				key: "ND",
				toolTip: "<img src = 'img/2010/ND.png'>"
			},
			{
				key: "OH",
				toolTip: "<img src = 'img/2010/OH.png'>"
			},
			{
				key: "OK",
				toolTip: "<img src = 'img/2010/OK.png'>"
			},
			{
				key: "OR",
				toolTip: "<img src = 'img/2010/OR.png'>"
			},
			{
				key: "PA",
				toolTip: "<img src = 'img/2010/PA.png'>"
			},
			{
				key: "RI",
				toolTip: "<img src = 'img/2010/RI.png'>"
			},
			{
				key: "SC",
				toolTip: "<img src = 'img/2010/SC.png'>"
			},
			{
				key: "SD",
				toolTip: "<img src = 'img/2010/SD.png'>"
			},
			{
				key: "TN",
				toolTip: "<img src = 'img/2010/TN.png'>"
			},
			{
				key: "TX",
				toolTip: "<img src = 'img/2010/TX.png'>"
			},
			{
				key: "UT",
				toolTip: "<img src = 'img/2010/UT.png'>"
			},
			{
				key: "VT",
				toolTip: "<img src = 'img/2010/VT.png'>"
			},
			{
				key: "VA",
				toolTip: "<img src = 'img/2010/VA.png'>"
			},
			{
				key: "WA",
				toolTip: "<img src = 'img/2010/WA.png'>"
			},
			{
				key: "WV",
				toolTip: "<img src = 'img/2010/WV.png'>"
			},
			{
				key: "WI",
				toolTip: "<img src = 'img/2010/WI.png'>"
			},
			{
				key: "WY",
				toolTip: "<img src = 'img/2010/WY.png'>"
			},
			{
				key: "US",
				toolTip: "<img src = 'img/2010/US.png'>",
				selected: true
			}
			],
	});
});


/**
 * Makes a message for the notices box.
 */
//http://stackoverflow.com/questions/10082330/dynamically-create-bootstrap-alerts-box-through-javascript
function bootstrap_alert(elem, message, timeout) {
  $(elem).show().html('<div class="alert"><span>'+message+'</span></div>');

  if (timeout || timeout === 0) {
    setTimeout(function() { 
      $(elem).alert('close');
    }, timeout);    
  }
};