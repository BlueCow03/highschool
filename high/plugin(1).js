require(['gitbook'],function(gitbook){gitbook.events.bind('start',function(e,config){var githubURL=config.github.url;gitbook.toolbar.createButton({icon:'https://bluecow03.github.io/python/github.png',label:'GitHub',position:'right',onClick:function(){window.open(githubURL)}});});});