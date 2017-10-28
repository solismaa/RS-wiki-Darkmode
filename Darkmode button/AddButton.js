// create darkmode on/off switch in page header
(function() {  
    function getStyleSheet() {
        if($('link[rel=stylesheet][href*="darkmode.css"]').length === 0) {
            importArticle({type: "style", article: "User:CephHunter/darkmode.css"});
        }
    }
 
    var darkModeCookie = 'dark-mode-status';
 
    if ($.cookie(darkModeCookie) === null) {
        $.cookie(darkModeCookie, false, {expires:7, path:'/'});
    }
    
    function darkmodeON() {
        $("#darkModeButton #greenBackground").animate({width: "100%"}, 200);
        $.cookie(darkModeCookie, true, {expires:7, path:'/'});
        getStyleSheet();
        $('link[rel=stylesheet][href*="darkmode.css"]').prop('disabled', false);
    }
    
    function darkmodeOFF() {
        $("#darkModeButton #greenBackground").animate({width: "57.5%"}, 200);
        $.cookie(darkModeCookie, false, {expires:7, path:'/'});
        $('link[rel=stylesheet][href*="darkmode.css"]').prop('disabled', true);
    }
     
    //create the button
    var darkModeButton = $("<div id='darkModeButton'></div>");
    
    var dmSwitchMoving = $("<div id='dmSwitchMoving'></div>")
        .css({
            "background": "#262626", 
            "border-radius": "5px", 
            "height": "10px", 
            "width": "23px", 
            "position": "relative", 
            "float": "right"
        });
        
    var greenBackground = $("<div id='greenBackground'></div>")
        .css({
            "background":"green",
            "width": "57.5%",
            "height": "100%",
            "border-radius": "5px",
            "display": "inline-block"
        })
        .append(dmSwitchMoving);
        
    var dmSwitchStationary = $("<div id='dmSwitchStationary'></div>")
        .css({
            "background": "red", 
            "border": "solid 4px grey", 
            "border-radius": "10px" , 
            "height": "10px", 
            "width": "40px"
        })
        .append(greenBackground);
        
    $(darkModeButton)
        .addClass("wds-button wds-is-squished wds-is-secondary")
        .append(dmSwitchStationary)
        .css({
            "margin-right": "6px"
        }) 
        .click(function() {
            if($.cookie(darkModeCookie) === "true") {
                darkmodeOFF();
            } else {
                darkmodeON();
            }
        });
 
    //add dm buttons to pages
        //normal button
        $(".page-header__contribution-buttons").append(darkModeButton);
    
        //button on edit pages
        $(darkModeButton)
            .clone(true)
            .css({
                "display": "inline-block", 
                "float": "left", 
                "margin": "4px 5px 5px 0px"
            })
            .prependTo("#EditPageRail > div.module.module_page_controls .wpSummaryFields");
            
        $('.EditPage .module_page_controls label[for="wpSummary"].wpSummary_canMinorEdit').css("margin-top", "0px"); // fix for overlapping text on module pages
    
        //button on preview of edit pages
        $('.EditPage .module_page_controls .preview_box .preview_icon svg').click(function() {
            var observer = new MutationObserver(function(mutations) {   //wait until the preview element exists
                mutations.forEach(function(mutation) {
                    if (!mutation.addedNodes) return;

                    for (var i = 0; i < mutation.addedNodes.length; i++) {  
                        if ($(mutation.addedNodes[i]).attr("id") === "EditPageDialog") {
                            $(darkModeButton)
                                .clone(true)
                                .css({
                                    "float": "right", 
                                    "position": "absolute",
                                    "top": "12px",
                                    "right": "70px"
                                })
                                .appendTo('#EditPageDialog');
                                
                            observer.disconnect();
                            if ($.cookie(darkModeCookie) === "true") {
                                darkmodeON();
                            }
                        }
                    }
                });
            });

            observer.observe(document.body, {childList: true});
            
        });
    
        //button on user profile pages
        $(darkModeButton)
            .clone(true)
            .css({
                "float": "right", 
                "margin": "0px 15px 0px 0px"
            })
            .appendTo("#WikiaUserPagesHeader > div > ul");  
 
    //auto activate darkmode if the cookie returned true when the page loaded
    if ($.cookie(darkModeCookie) === "true") {
        darkmodeON();
    }
    
    //auto change darkmode of all other open rs wiki pages
    document.addEventListener("visibilitychange", function() {
        if($.cookie(darkModeCookie) === "true") {
            darkmodeON();
        } else {
            darkmodeOFF();
        }
    });
})();
