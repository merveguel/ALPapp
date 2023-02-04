sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/risksthree/test/integration/FirstJourney',
		'ns/risksthree/test/integration/pages/RisksList',
		'ns/risksthree/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/risksthree') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);