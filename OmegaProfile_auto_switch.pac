var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)google-analytics\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)steamstatic\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)xvideos-cdn\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)gmail\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)gentoo\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)domains\.google$/.test(host)) return "+socks5";
        return "+__ruleListOf_auto switch";
    },
    "+__ruleListOf_auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)1024image\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)1ka\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)1rx\.io$/.test(host)) return "+socks5";
        if (/(?:^|\.)23img\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)2mdn\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)33across\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)360yield\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)3mo\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)4dex\.io$/.test(host)) return "+socks5";
        if (/(?:^|\.)4hu\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)4hu\.tv$/.test(host)) return "+socks5";
        if (/(?:^|\.)69img\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)6sc\.co$/.test(host)) return "+socks5";
        if (/(?:^|\.)91p.*\./.test(host)) return "+socks5";
        if (/(?:^|\.)a-mo\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)aaxads\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)ackcdn\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)adblockplus\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)adform\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)adlightning\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)admanmedia\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)adnxs\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)ads-twitter\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)adsafeprotected\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)adsrvr\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)adsymptotic\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)adthrive\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)adtng\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)agendav\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)aixyz\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)ajax\.googleapis\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)akamaized\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)alexametrics\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)algolia\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)algolianet\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)alltubedownload\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)alphacoders\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)alternativeto\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)amazon-adsystem\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)amazonaws\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)amgdgt\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)amplitude\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)android\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)androidfilehost\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)animejs\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)aniview\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)ant\.design$/.test(host)) return "+socks5";
        if (/(?:^|\.)anymorphic\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)apkpure\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)app\.link$/.test(host)) return "+socks5";
        if (/(?:^|\.)appspot\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)archlinux\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)atoolbox\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)audrte\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)auricom\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)ax21pics\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)azureedge\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)barfooze\.de$/.test(host)) return "+socks5";
        if (/(?:^|\.)bcprm\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)bennadel\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)bidswitch\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)bitcoin\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)bitsrc\.io$/.test(host)) return "+socks5";
        if (/(?:^|\.)bitwarden\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)bitwarden\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)blockvalue\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)blogger\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)blogspot\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)bluekai\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)bngprl\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)bngpst\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)bookstackapp\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)bootstrapcdn\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)broadcom\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)btc\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)buttons\.github\.io$/.test(host)) return "+socks5";
        if (/(?:^|\.)buysellads\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)bvmqkla\.de$/.test(host)) return "+socks5";
        if (/(?:^|\.)cabbi\.bo$/.test(host)) return "+socks5";
        if (/(?:^|\.)cade\.me$/.test(host)) return "+socks5";
        if (/(?:^|\.)caldavsynchronizer\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)captifymedia\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)carbonads\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)casalemedia\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)chrome\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)chromium\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)ckvwpzp\.xyz$/.test(host)) return "+socks5";
        if (/(?:^|\.)clearbit\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)cloudflare\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)cloudflareinsights\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)cloudfront\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)cloudinary\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)cloudup\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)codecademy\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)codeleading\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)codepen\.io$/.test(host)) return "+socks5";
        if (/(?:^|\.)codesandbox\.io$/.test(host)) return "+socks5";
        if (/(?:^|\.)cognitivlabs\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)confiant-integrations\.global\.ssl\.fastly\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)connectad\.io$/.test(host)) return "+socks5";
        if (/(?:^|\.)consensu\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)contextweb\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)coursebetter\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)create-react-app\.dev$/.test(host)) return "+socks5";
        if (/(?:^|\.)creativecommons\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)criteo\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)criteo\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)crwdcntrl\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)csb\.app$/.test(host)) return "+socks5";
        if (/(?:^|\.)csp\.withgoogle\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)css-tricks\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)css2scss\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)cssgenerator\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)cssmatic\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)customer\.io$/.test(host)) return "+socks5";
        if (/(?:^|\.)cxybb\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)d3nslu0hdya83q\.cloudfront\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)datadome\.co$/.test(host)) return "+socks5";
        if (/(?:^|\.)de17a\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)dev\.to$/.test(host)) return "+socks5";
        if (/(?:^|\.)diagrams\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)discord\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)discordapp\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)discourse-cdn\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)disqus\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)disquscdn\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)districtm\.io$/.test(host)) return "+socks5";
        if (/(?:^|\.)dns\.google$/.test(host)) return "+socks5";
        if (/(?:^|\.)docker\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)dokuwiki\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)doogie\.de$/.test(host)) return "+socks5";
        if (/(?:^|\.)doubleclick\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)doubleverify\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)draculatheme\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)drassil\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)dribbble\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)duckduckgo\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)duyaoss\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)easymock\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)ecmascript\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)endeavouros\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)epicgames\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)eth6\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)everestads\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)exelator\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)facebook\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)fappenpics\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)fastly\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)fb\.me$/.test(host)) return "+socks5";
        if (/(?:^|\.)fbcdn\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)fbsbx\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)feedsky\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)figma\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)filestackapi\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)flexboxfroggy\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)flickr\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)flowplayer\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)fnkc\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)focas\.jp$/.test(host)) return "+socks5";
        if (/(?:^|\.)followme\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)fontawesome\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)fonts\.googleapis\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)fonts\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)frpic\.xyz$/.test(host)) return "+socks5";
        if (/(?:^|\.)fsdn\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)ft\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)getcssscan\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)getloli\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)ghbtns\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)gifyu\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)gitblog\.cn$/.test(host)) return "+socks5";
        if (/(?:^|\.)github\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)github\.io$/.test(host)) return "+socks5";
        if (/(?:^|\.)gmail\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)go-mpulse\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)go\.dev$/.test(host)) return "+socks5";
        if (/(?:^|\.)google.*\./.test(host)) return "+socks5";
        if (/(?:^|\.)google\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)gravatar\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)greensock\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)gvt1\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)haadf\.xyz$/.test(host)) return "+socks5";
        if (/(?:^|\.)haproxy\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)hcaptcha\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)hjfile\.cn$/.test(host)) return "+socks5";
        if (/(?:^|\.)hotjar\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)html-css-js\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)i3geek\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)ibb\.co$/.test(host)) return "+socks5";
        if (/(?:^|\.)iitu\.xyz$/.test(host)) return "+socks5";
        if (/(?:^|\.)ilovefreesoftware\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)imagesharing\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)imgur\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)imgxx\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)imrworldwide\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)intotheblock\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)ipvoid\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)javascripttutorial\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)javbus\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)javdb\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)javdove\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)javhd\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)javlibrary\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)jekyllthemes\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)jetbrains\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)jitudisk\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)jnn-pa\.googleapis\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)jpg\.cm$/.test(host)) return "+socks5";
        if (/(?:^|\.)jquery\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)js\.wiki$/.test(host)) return "+socks5";
        if (/(?:^|\.)js7k\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)jsdelivr\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)jsdelivr\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)jsfiddle\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)jshell\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)juicyads\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)kakao\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)kanjiantu\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)katacoda\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)kde\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)kestrel\.tokyo$/.test(host)) return "+socks5";
        if (/(?:^|\.)killcovid2021\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)kubernetes\.io$/.test(host)) return "+socks5";
        if (/(?:^|\.)lc-cn-n1-shared\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)leadsbridge\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)leaflette\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)leetcode\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)licdn\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)lijit\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)lineageos\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)linkedin\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)lintian\.co$/.test(host)) return "+socks5";
        if (/(?:^|\.)linuxhint\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)live\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)logrocket\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)loli\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)loopme\.me$/.test(host)) return "+socks5";
        if (/(?:^|\.)lottiefiles\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)louiswolf\.nl$/.test(host)) return "+socks5";
        if (/(?:^|\.)lovelive\.tools$/.test(host)) return "+socks5";
        if (/(?:^|\.)lusion\.co$/.test(host)) return "+socks5";
        if (/(?:^|\.)lustre\.ai$/.test(host)) return "+socks5";
        if (/(?:^|\.)lynsoft\.co\.uk$/.test(host)) return "+socks5";
        if (/(?:^|\.)mactype\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)mailchimp\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)maketecheasier\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)makeuseof\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)massou\.tk$/.test(host)) return "+socks5";
        if (/(?:^|\.)material\.io$/.test(host)) return "+socks5";
        if (/(?:^|\.)meba\.kr$/.test(host)) return "+socks5";
        if (/(?:^|\.)mediarithmics\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)mediawiki\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)medium\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)meleedrive\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)metroline\.io$/.test(host)) return "+socks5";
        if (/(?:^|\.)microad\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)microsoft\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)minus\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)ml314\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)mmuaa\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)modelhub\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)mongodb\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)mouseflow\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)mozilla\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)mozilla\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)msecnd\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)msi\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)mts\.ru$/.test(host)) return "+socks5";
        if (/(?:^|\.)mui\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)mvps\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)mxpnl\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)mxptint\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)myqcloud\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)narrativ\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)nasa\.gov$/.test(host)) return "+socks5";
        if (/(?:^|\.)nervjs\.github\.io$/.test(host)) return "+socks5";
        if (/(?:^|\.)netcoretec\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)next-auth\.js\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)nextcloud\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)nextjs\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)nocser\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)notion\.so$/.test(host)) return "+socks5";
        if (/(?:^|\.)npmjs\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)nr-data\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)nsaimg\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)nslookup\.io$/.test(host)) return "+socks5";
        if (/(?:^|\.)office\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)omnitagjs\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)op\.gg$/.test(host)) return "+socks5";
        if (/(?:^|\.)opencollective\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)openmediavault\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)openx\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)outbrain\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)ovkwiz\.xyz$/.test(host)) return "+socks5";
        if (/(?:^|\.)paypalobjects\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)pcgamer\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)pcmag\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)peerspot\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)pepipost\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)personyze\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)pghub\.io$/.test(host)) return "+socks5";
        if (/(?:^|\.)phncdn\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)photoprism\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)pi22y\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)pic606\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)picel48\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)piesocket\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)pinimg\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)pinterest\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)pinterest\.jp$/.test(host)) return "+socks5";
        if (/(?:^|\.)pixiv\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)pixiv\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)plnkr\.co$/.test(host)) return "+socks5";
        if (/(?:^|\.)pluralsight\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)pornhub\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)portableapps\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)postimg\.cc$/.test(host)) return "+socks5";
        if (/(?:^|\.)postimg\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)ppccdd\.xyz$/.test(host)) return "+socks5";
        if (/(?:^|\.)premcloa\.shop$/.test(host)) return "+socks5";
        if (/(?:^|\.)primis\.tech$/.test(host)) return "+socks5";
        if (/(?:^|\.)pro-market\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)pscp\.tv$/.test(host)) return "+socks5";
        if (/(?:^|\.)pub\.network$/.test(host)) return "+socks5";
        if (/(?:^|\.)pubmatic\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)pugjs\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)pximg\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)qualaroo\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)quantserve\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)quora\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)quoracdn\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)rapidtables\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)rawgit\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)razersupport\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)razerzone\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)reactjs\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)reactrouter\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)realfavicongenerator\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)realsrv\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)rean\.ren$/.test(host)) return "+socks5";
        if (/(?:^|\.)recaptcha\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)redd\.it$/.test(host)) return "+socks5";
        if (/(?:^|\.)reddit\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)redditmail\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)redditmedia\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)redditstatic\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)redircdn\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)requarks\.io$/.test(host)) return "+socks5";
        if (/(?:^|\.)resetdigital\.co$/.test(host)) return "+socks5";
        if (/(?:^|\.)retool-edge\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)rkdms\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)rlcdn\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)rmdown\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)roamresearch\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)rocketcdn\.me$/.test(host)) return "+socks5";
        if (/(?:^|\.)rsshub\.app$/.test(host)) return "+socks5";
        if (/(?:^|\.)rubiconproject\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)s2tu\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)samanthaming\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)scihub\.idk$/.test(host)) return "+socks5";
        if (/(?:^|\.)scorecardresearch\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)sefidian\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)segmentfault\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)sentry-cdn\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)servarr\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)setupad\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)shadowsocks\./.test(host)) return "+socks5";
        if (/(?:^|\.)sharepointonline\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)sharethrough\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)siimg\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)simplenextjs\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)skeimg\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)skuimg\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)skviap\.xyz$/.test(host)) return "+socks5";
        if (/(?:^|\.)slant\.co$/.test(host)) return "+socks5";
        if (/(?:^|\.)smartadserver\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)socdm\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)softunity\.com\.ru$/.test(host)) return "+socks5";
        if (/(?:^|\.)softwaretestinghelp\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)speedcurve\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)sqlservertutorial\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)sstatic\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)stackadapt\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)stackauth\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)stackexchange\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)stackoverflow\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)stackpathcdn\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)staticblitz\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)staticstuff\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)steamcommunity\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)steampowered\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)stepzen\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)stpd\.cloud$/.test(host)) return "+socks5";
        if (/(?:^|\.)stripe\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)substack\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)superuser\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)swapi\.co$/.test(host)) return "+socks5";
        if (/(?:^|\.)swiperjs\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)sxotu\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)t\.co$/.test(host)) return "+socks5";
        if (/(?:^|\.)t\.me$/.test(host)) return "+socks5";
        if (/(?:^|\.)t66y\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)tabnine\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)taboola\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)tailscale\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)tailwindcss\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)tailwindui\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)tapad\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)tawk\.to$/.test(host)) return "+socks5";
        if (/(?:^|\.)tazmandevil\.info$/.test(host)) return "+socks5";
        if (/(?:^|\.)tdesktop\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)teads\.tv$/.test(host)) return "+socks5";
        if (/(?:^|\.)techsolutionshere\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)telegram\./.test(host)) return "+socks5";
        if (/(?:^|\.)tgtw\.cc$/.test(host)) return "+socks5";
        if (/(?:^|\.)themoneytizer\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)threejs\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)thumbsnap\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)tietuku\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)tiktok\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)tiptap\.dev$/.test(host)) return "+socks5";
        if (/(?:^|\.)touimg\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)touxiangwu\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)trackjs\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)traefik\.cn$/.test(host)) return "+socks5";
        if (/(?:^|\.)trafficjunky\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)tru\.am$/.test(host)) return "+socks5";
        if (/(?:^|\.)ttvnw\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)tufts\.edu$/.test(host)) return "+socks5";
        if (/(?:^|\.)tugraz\.at$/.test(host)) return "+socks5";
        if (/(?:^|\.)tutorialspoint\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)twimg\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)twitch\.tv$/.test(host)) return "+socks5";
        if (/(?:^|\.)twitchcdn\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)tymnet\.dyndns\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)typekit\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)typescriptlang\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)ucarecdn\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)uecook\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)umu\.se$/.test(host)) return "+socks5";
        if (/(?:^|\.)underhentai\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)unpkg\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)unrealengine\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)unrulymedia\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)unsplash\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)us-central1-adaptive-growth\.cloudfunctions\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)userscript\.zone$/.test(host)) return "+socks5";
        if (/(?:^|\.)v2ex\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)venue\.cloud$/.test(host)) return "+socks5";
        if (/(?:^|\.)vercel\.app$/.test(host)) return "+socks5";
        if (/(?:^|\.)vercel\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)videobyte\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)videolan\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)videoplayerhub\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)vimeo\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)visualstudio\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)vitejs\.dev$/.test(host)) return "+socks5";
        if (/(?:^|\.)vrdesktop\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)vscode-cdn\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)vscode-unpkg\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)vscode\.dev$/.test(host)) return "+socks5";
        if (/(?:^|\.)vuetifyjs\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)vxotu\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)w\.wiki$/.test(host)) return "+socks5";
        if (/(?:^|\.)w55c\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)wad526\.se$/.test(host)) return "+socks5";
        if (/(?:^|\.)web\.dev$/.test(host)) return "+socks5";
        if (/(?:^|\.)webpack\.js\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)webpkgcache\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)wepublish\.cn$/.test(host)) return "+socks5";
        if (/(?:^|\.)wikimedia\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)wikipedia\.org$/.test(host)) return "+socks5";
        if (/(?:^|\.)windhoff\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)windows\.net$/.test(host)) return "+socks5";
        if (/(?:^|\.)withgoogle\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)wonderfulday.*\.live$/.test(host)) return "+socks5";
        if (/(?:^|\.)wordpress\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)workarea.*\.live$/.test(host)) return "+socks5";
        if (/(?:^|\.)wp\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)x6img\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)xamyzh\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)xda-developers\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)xoimg\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)xvideos.*\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)yahoo\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)yarnpkg\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)ycombinator\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)yieldmo\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)yimg\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)youtube-nocookie\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)zed\.ink$/.test(host)) return "+socks5";
        if (/(?:^|\.)zemanta\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)zenzire\.com$/.test(host)) return "+socks5";
        if (/(?:^|\.)zeotap\.com$/.test(host)) return "+socks5";
        return "DIRECT";
    },
    "+socks5": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 10.10.10.10:10800; SOCKS 10.10.10.10:10800";
    }
});