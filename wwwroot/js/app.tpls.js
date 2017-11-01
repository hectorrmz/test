angular.module('app.tpls', []).run(['$templateCache', function($templateCache) {$templateCache.put('home/home.tpl.html','<div class="home">\n    <div class="jumbotron">\n        <div class="container text-center">\n            <h1>My Heroku App Test</h1>\n            <p>Some sub headline text as description..</p>\n        </div>\n    </div>\n\n    <div class="week" ng-repeat="week in $hc.weeks">\n        <div class="weekday" ng-repeat="day in week.weekDays">\n            <header>{{day.name}} {{day.number}}</header>\n            <div class="day">\n\n            </div>\n        </div>\n    </div>\n\n    <div class="container-fluid bg-3 text-center" ng-hide="$hc.issues">\n        <h3>Some Headline Here</h3>\n\n        <form name="loginForm" class="col-xl-3 col-lg-4 col-md-6 col-sm-9 text-left" novalidate ng-submit="$hc.login(loginForm)">\n            <div class="form-group">\n                <label for="exampleInputEmail1">Email address</label>\n                <input type="email" class="form-control" id="exampleInputEmail1" ng-model="$hc.username" aria-describedby="emailHelp" placeholder="Enter email"\n                    autofocus>\n                <small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small>\n            </div>\n            <div class="form-group">\n                <label for="exampleInputPassword1">Password</label>\n                <input type="password" class="form-control" id="exampleInputPassword1" ng-model="$hc.password" placeholder="Password">\n            </div>\n            <p class="text-danger small">{{$hc.errorMsg}}</p>\n\n            <button type="submit" class="btn btn-primary">Submit</button>\n        </form>\n    </div>\n    <div class="container-fluid bg-3 text-center" ng-show="$hc.issues">\n        <h3>Another Headline Placed</h3>\n\n        <div class="issuesBox col-lg-7 col-md-8 text-left">\n            <h2 class="text-center">{{$hc.issues[0].project.name}}</h2>\n\n            <div class="issues-options">\n                Here will be the issues\n\n                <div class="issue" ng-repeat="issue in $hc.issues">\n                    {{issue.subject}}\n                </div>\n            </div>\n        </div>\n\n\n        <div class="calendarBox col-lg-8 col-md-9 text-left">\n                <div class="ibox-content">\n                        <div id=\'external-events\'>\n                            <p>Drag a event and drop into calendar.</p>\n                            <div id="evt1" class=\'external-event navy-bg\'>Development.</div>\n                            <div id="evt2" class=\'external-event navy-bg\'>Meetings.</div>\n                            <div id="evt3" class=\'external-event navy-bg\'>Other.</div>\n                            <div id="evt4" class=\'external-event navy-bg\'>Something Else.</div>\n                            <div id="evt5" class=\'external-event navy-bg\'>One more for luck.</div>\n                        </div>\n                    </div>\n            <div calendar-tracker id=\'calendar\'></div>\n        </div>\n\n        \n    </div>\n</div>');
$templateCache.put('layout/layout.tpl.html','<div class="layout">\n    <div ui-view="content"></div>\n</div>');}]);