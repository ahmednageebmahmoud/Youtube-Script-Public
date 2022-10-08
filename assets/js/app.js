const ngApp = angular.module("ngApp", []);

ngApp.controller("myCtrl", [
  "$scope",
  function (s) {
    s.config = {
      addAllSubtitleLanguagesSupportedByYoutubeAndTubebuddyOnly: true,
      translateTitleAndDescriptionAutomaticallyByTubebuddyExtension: true,
      automaticallyTranslateSubtitleFiles: true,
    };

    s.buildScript = () => {
      s.script = `
      document.body.insertAdjacentHTML("beforeend",\`
        <script src="${document.location.origin}/assets/youtubeScript.js"></script>
        <span class="hljs-name">script</span>
        <script>
          let youtubeScriptLanguageObj =new YoutubeScriptLanguages();
          youtubeScriptLanguageObj.skipNotSupportedLanguages=${!s.config.addAllSubtitleLanguagesSupportedByYoutubeAndTubebuddyOnly};
          youtubeScriptLanguageObj.addLanguages();
          let youtubeScriptTranslationObj=new YoutubeScriptTranslation();
          youtubeScriptTranslationObj.isAllowAddSubtitle=${s.config.translateTitleAndDescriptionAutomaticallyByTubebuddyExtension};
          youtubeScriptTranslationObj.isAllowTranslateTitle=${s.config.automaticallyTranslateSubtitleFiles};
          youtubeScriptTranslationObj.translateRows();
        </script>\`)

`;

setTimeout(() => {
  
  
  hljs?.initHighlightingOnLoad();
}, 0);
    };

    s.buildScript();
  },
]);
