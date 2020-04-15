

angular.module('test')
    .controller('TestTabeController', ['$scope', '$http', '$rootScope', '$window',
        function TestTabeController($scope, $http, $rootScope, $window) {


            var chk1 = $("input[type='checkbox'][value='1']");
            var chk2 = $("input[type='checkbox'][value='2']");
            var chk3 = $("input[type='checkbox'][value='3']");
            var chk4 = $("input[type='checkbox'][value='4']");
            var chk5 = $("input[type='checkbox'][value='5']");


            chk2.on('change', function(){
                chk1.prop('checked',this.checked);
            });

            chk3.on('change', function(){
                chk1.prop('checked',this.checked);
            });

            chk4.on('change', function(){
                chk1.prop('checked',this.checked);
            });

            chk5.on('change', function(){
                chk1.prop('checked',this.checked);
            });

            //read the localStorage an get the current applicant
            $scope.init = function init() {
                $scope.ClassDetailID = $window.localStorage.getItem("ClassDetailID");
                $scope.ClassDetailIDError = ($scope.ClassDetailID == null || $scope.ClassDetailID === -1);

                $scope.list = [];
                var post={};
                post.ClassDetailID=$scope.ClassDetailID;

                $scope.loadAztec = function loadAztec() {
                    $http({
                        method: "POST",
                        url: "php/test-getAztecScores.php",
                        data: Object.toparams(post),
                        headers: {"Content-Type": "application/x-www-form-urlencoded"}
                    }).then(function (result) {

                            $scope.list = result.data;
                            convertDatesInArrayToHtml($scope.list);
                        },
                        function (result) {

                            alert("Error getting Record");

                        });
                };
                $http({
                    method:"POST",
                    url:"./php/test-getPreTabeScores.php",
                    data:Object.toparams(post),
                    headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (result) {

                        $scope.tests=result.data;
                        convertDatesInArrayToHtml($scope.tests);
                    },
                    function (result) {

                        alert("Error adding Record");

                    });


                $http({
                    method:"POST",
                    url:"./php/test-getPostTabeScores.php",
                    data:Object.toparams(post),
                    headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (result) {

                        $scope.postTests=result.data;
                        convertDatesInArrayToHtml($scope.postTests);
                    },
                    function (result) {

                        alert("Error adding Record");

                    });
                $http({
                    method:"POST",
                    url:"php/test-getTestScores.php",
                    data:Object.toparams(post),
                    headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (result) {

                        $scope.practiceTests=result.data;
                        convertDatesInArrayToHtml($scope.practiceTests);
                    },
                    function (result) {

                        alert("Error adding Record");

                    });
                $scope.editPreTabe=function editPreTabe(editPre)
                {
                    $scope.editMode=true;
                    var post={};
                    post.SubTest=editPre.SubTest;
                    post.ScaledScore=editPre.ScaledScore;
                    post.SubmitDate=editPre.SubmitDate;
                    post.ClassDetailID=$scope.ClassDetailID;
                    post.TabeID=editPre.TabeID;
                    convertDatesInObjectToSql(post);

                    $http({
                        method:"POST",
                        url:"./php/test-editPreTabe.php",
                        data:Object.toparams(post),
                        headers:{"Content-Type": "application/x-www-form-urlencoded"}
                    }).then(function (result) {
                            alert("Record updated:" +result.data);
                            $scope.init();
                        },
                        function () {
                            alert("Error adding Record");

                        });

                };
                $scope.editPostTabe=function editPostTabe(editPos)
                {
                    $scope.editMode=true;
                    var post={};
                    post.SubTest=editPos.SubTest;
                    post.ScaledScore=editPos.ScaledScore;
                    post.SubmitDate=editPos.SubmitDate;
                    post.ClassDetailID=$scope.ClassDetailID;
                    post.TabeID=editPos.TabeID;
                    convertDatesInObjectToSql(post);

                    $http({
                        method:"POST",
                        url:"./php/test-editPostTabe.php",
                        data:Object.toparams(post),
                        headers:{"Content-Type": "application/x-www-form-urlencoded"}
                    }).then(function (result) {
                            alert("Record updated:" +result.data);
                            $scope.init();
                        },
                        function () {
                            alert("Error adding Record");

                        });

                };
                $scope.editGedScores=function editGedScores(editGed)
                {
                    $scope.editMode=true;
                    var post={};
                    post.Subject=editGed.Subject;
                    post.Score=editGed.Score;
                    post.Date=editGed.Date;
                    post.ClassDetailID=$scope.ClassDetailID;
                    post.GED_ID=editGed.GED_ID;
                    convertDatesInObjectToSql(post);

                    $http({
                        method:"POST",
                        url:"./php/test-editGedScores.php",
                        data:Object.toparams(post),
                        headers:{"Content-Type": "application/x-www-form-urlencoded"}
                    }).then(function (result) {
                            alert("Record updated:" +result.data);
                            $scope.init();
                        },
                        function () {
                            alert("Error adding Record");

                        });

                };
                $scope.editTestScores=function editTestScores(editTests)
                {
                    $scope.editMode=true;
                    var post={};
                    post.SubTest=editTests.SubTest;
                    post.TestType=editTests.TestType;
                    post.TestScore=editTests.TestScore;
                    post.TestDate=editTests.TestDate;
                    post.ClassDetailID=$scope.ClassDetailID;
                    post.TestID=editTests.TestID;
                    convertDatesInObjectToSql(post);

                    $http({
                        method:"POST",
                        url:"./php/test-editTestScores.php",
                        data:Object.toparams(post),
                        headers:{"Content-Type": "application/x-www-form-urlencoded"}
                    }).then(function (result) {
                            alert("Record updated:" +result.data);
                            $scope.init();
                        },
                        function () {
                            alert("Error adding Record");

                        });

                };

                $scope.deletePreTabeScores = function deletePreTabeScores(delPre){
                    var post = {};
                    post.TabeID = delPre.TabeID;
                    $http({
                        method: "POST",
                        url: "php/test-deletePreTabeScores.php",
                        data: Object.toparams(post),
                        headers: {"Content-Type": "application/x-www-form-urlencoded"}
                    }).then (function (result)
                        {
                            alert("record updated: " + result.data);
                            $scope.init();
                        },
                        function(){
                            alert("Error adding record");
                        });
                };

                $scope.deletePostTabeScores = function deletePostTabeScores(delPos){
                    var post = {};
                    post.TabeID = delPos.TabeID;
                    $http({
                        method: "POST",
                        url: "php/test-deletePostTabeScores.php",
                        data: Object.toparams(post),
                        headers: {"Content-Type": "application/x-www-form-urlencoded"}
                    }).then (function (result)
                        {
                            alert("record updated: " + result.data);
                            $scope.init();
                        },
                        function(){
                            alert("Error adding record");
                        });
                };
                $scope.deleteGedScores = function deleteGedScores(delGed){
                    var post = {};
                    post.GED_ID = delGed.GED_ID;
                    $http({
                        method: "POST",
                        url: "php/test-deleteGedScores.php",
                        data: Object.toparams(post),
                        headers: {"Content-Type": "application/x-www-form-urlencoded"}
                    }).then (function (result)
                        {
                            alert("record updated: " + result.data);
                            $scope.init();
                        },
                        function(){
                            alert("Error adding record");
                        });
                };
                $scope.deletePracticeScores = function deletePracticeScores(delPractice){
                    var post = {};
                    post.TestID = delPractice.TestID;
                    $http({
                        method: "POST",
                        url: "php/test-deleteTestScores.php",
                        data: Object.toparams(post),
                        headers: {"Content-Type": "application/x-www-form-urlencoded"}
                    }).then (function (result)
                        {
                            alert("record updated: " + result.data);
                            $scope.init();
                        },
                        function(){
                            alert("Error adding record");
                        });
                };
                $scope.addPreTabeScores = function addPreTabeScores(addPre){
                    var post = {};
                    post.ClassDetailID = $scope.ClassDetailID;
                    post.SubTest = addPre.SubTest;
                    post.SubmitDate = addPre.SubmitDate;
                    post.ScaledScore = addPre.ScaledScore;
                    convertDatesInObjectToSql(post);
                    $http({
                        method: "POST",
                        url: "php/test-createPreTabeScores.php",
                        data: Object.toparams(post),
                        headers: {"Content-Type": "application/x-www-form-urlencoded"}
                    }).then (function (result)
                        {
                            alert("record updated: " + result.data);
                            $scope.init();
                        },
                        function(result){
                            alert("Error adding record");
                        });
                };
                $scope.addPostTabeScores = function addPostTabeScores(addPos){
                    var post = {};
                    post.ClassDetailID = $scope.ClassDetailID;
                    post.SubTest = addPos.SubTest;
                    post.SubmitDate = addPos.SubmitDate;
                    post.ScaledScore = addPos.ScaledScore;
                    convertDatesInObjectToSql(post);
                    $http({
                        method: "POST",
                        url: "php/test-createPostTabeScores.php",
                        data: Object.toparams(post),
                        headers: {"Content-Type": "application/x-www-form-urlencoded"}
                    }).then (function (result)
                        {
                            alert("record updated: " + result.data);
                            $scope.init();
                        },
                        function(result){
                            alert("Error adding record");
                        });
                };
                $scope.addGedScores = function addGedScores(addGed){
                    var post = {};
                    post.ClassDetailID = $scope.ClassDetailID;
                    post.Subject = addGed.Subject;
                    post.Date = addGed.Date;
                    post.Score = addGed.Score;
                    convertDatesInObjectToSql(post);
                    $http({
                        method: "POST",
                        url: "php/test-createGedScores.php",
                        data: Object.toparams(post),
                        headers: {"Content-Type": "application/x-www-form-urlencoded"}
                    }).then (function (result)
                        {
                            alert("record updated: " + result.data);
                            $scope.init();
                        },
                        function(result){
                            alert("Error adding record");
                        });
                };
                $scope.addTests = function addTests(addPractice){
                    var post = {};
                    post.ClassDetailID = $scope.ClassDetailID;
                    post.TestType = addPractice.TestType;
                    post.SubTest = addPractice.SubTest;
                    post.TestDate = addPractice.TestDate;
                    post.TestScore = addPractice.TestScore;
                    convertDatesInObjectToSql(post);
                    $http({
                        method: "POST",
                        url: "php/test-createTestScores.php",
                        data: Object.toparams(post),
                        headers: {"Content-Type": "application/x-www-form-urlencoded"}
                    }).then (function (result)
                        {
                            alert("record updated: " + result.data);
                            $scope.init();
                        },
                        function(result){
                            alert("Error adding record");
                        });
                };



                var post={};
                post.ClassDetailID=$scope.ClassDetailID;


                $http({
                    method:"POST",
                    url:"./php/test-getGedScores.php",
                    data:Object.toparams(post),
                    headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (result) {

                        $scope.ged=result.data;
                        convertDatesInArrayToHtml($scope.ged);

                    },
                    function (result) {

                        alert("Error adding Record");

                    });

                $http({
                    method:"POST",
                    url:"./php/test-getFullPreTABEMath.php",
                    data:Object.toparams(post),
                    headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (result) {

                        $scope.PreListMath=result.data;


                    },
                    function (result) {

                        alert("Error adding Record");

                    });

                $http({
                    method:"POST",
                    url:"./php/test-getFullPreTABEReading.php",
                    data:Object.toparams(post),
                    headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (result) {

                        $scope.PreListReading=result.data;


                    },
                    function (result) {

                        alert("Error adding Record");

                    });

                $http({
                    method:"POST",
                    url:"./php/test-getFullPreTABELanguage.php",
                    data:Object.toparams(post),
                    headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (result) {

                        $scope.PreListLanguage=result.data;


                    },
                    function (result) {

                        alert("Error adding Record");

                    });

                $http({
                    method:"POST",
                    url:"./php/test-getFullPostTABEReading.php",
                    data:Object.toparams(post),
                    headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (result) {

                        $scope.PostListReading=result.data;


                    },
                    function (result) {

                        alert("Error adding Record");

                    });

                $http({
                    method:"POST",
                    url:"./php/test-getFullPostTABEMath.php",
                    data:Object.toparams(post),
                    headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (result) {

                        $scope.PostListMath=result.data;


                    },
                    function (result) {

                        alert("Error adding Record");

                    });

                $http({
                    method:"POST",
                    url:"./php/test-getFullPostTABELanguage.php",
                    data:Object.toparams(post),
                    headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (result) {

                        $scope.PostListLanguage=result.data;


                    },
                    function (result) {

                        alert("Error adding Record");

                    });

                $http({
                    method:"POST",
                    url:"./php/test-getFullGedMath.php",
                    data:Object.toparams(post),
                    headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (result) {

                        $scope.gedMath=result.data;


                    },
                    function (result) {

                        alert("Error adding Record");

                    });

                $http({
                    method:"POST",
                    url:"./php/test-getFullGedLanguage.php",
                    data:Object.toparams(post),
                    headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (result) {

                        $scope.gedLanguage=result.data;


                    },
                    function (result) {

                        alert("Error adding Record");

                    });

                $http({
                    method:"POST",
                    url:"./php/test-getFullGedSS.php",
                    data:Object.toparams(post),
                    headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (result) {

                        $scope.gedSS=result.data;


                    },
                    function (result) {

                        alert("Error adding Record");

                    });

                $http({
                    method:"POST",
                    url:"./php/test-getFullGedScience.php",
                    data:Object.toparams(post),
                    headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }).then(function (result) {

                        $scope.gedScience=result.data;


                    },
                    function (result) {

                        alert("Error adding Record");

                    });



            };



            //Receives an reloadApplicantIDEvent from  the "search"-panel-component
            //when a new applicant has been sected.
            //source: http://www.binaryintellect.net/articles/5d8be0b6-e294-457e-82b0-ba7cc10cae0e.aspx
            $scope.$on("reloadClassDetailIDEvent", function (evt, data) {

                $scope.init();

            });

            $scope.init();

        }

    ]);
