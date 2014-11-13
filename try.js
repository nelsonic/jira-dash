var JiraApi = require('jira').JiraApi;
var config = require('./config');
var jira = new JiraApi('https', config.host, config.port, config.user, config.password, '2.0.alpha1');

jira.findIssue('WEB-2650', function(error, issue) {
    console.log('Status: ' + issuex§);
});
