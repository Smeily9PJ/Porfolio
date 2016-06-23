function ContactController($scope) {
    $scope.Menu.Change(4);
    $scope.Corp = "";
    $scope.Nom = "";
    $scope.Mail = "";

    $scope.SendMail = function () {
        if ($scope.Nom == null || $scope.Nom == undefined || $scope.Nom == "") {
            alert("Vous devez renseigner un nom.");
        } else if ($scope.Mail == null || $scope.Mail == undefined || $scope.Mail == "") {
            alert("Vous devez renseigner un mail.");
        } else if ($scope.Corp == null || $scope.Corp == undefined || $scope.Corp == "") {
            alert("Vous devez renseigner un message dans le corps du mail.");
        } else {
            //window.location.href = 'mailto:' + $scope.Mail + '@juliepelissou@laposte.net\?Subject=mail Portfolio de ' + $scope.Nom + '&body=' + $scope.Corp;
            /* mandrill('/messages/send', {
                 message: {
                     to: [{ email: _email, name: _name }],
                     from_email: 'noreply@yourdomain.com',
                     subject: _subject,
                     text: _message
                 }
             }, function (error, response) {
                 if (error) console.log(error);
                 else console.log(response);
             });*/
            /*  $.ajax({
                  type: 'POST',
                  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
                  data: {
                      'key': 'Portfolio',
                      'message': {
                          'from_email': 'juliepelissou@laposte.net',
                          'to': [
                              {
                                  'email': $scope.Mail,
                                  'name': $scope.Nom,
                                  'type': 'to'
                              }
                          ],
                          'autotext': 'true',
                          'subject': 'Mail Portfolio ',
                          'html': $scope.Corp
                      }
                  }
              }).done(function (response) {
                  console.log(response); // if you're into that sorta thing
              });*/
            
            var nodemailer = require("nodemailer");

            // create reusable transport method (opens pool of SMTP connections)
            var smtpTransport = nodemailer.createTransport("SMTP", {
                service: "Gmail",
                auth: {
                    user: "pelissou.julie@gmail.com",
                    pass: "PourToujours99"
                }
            });

            // setup e-mail data with unicode symbols
            var mailOptions = {
                from: $scope.Nom + "<" + $scope.Mail + ">", // sender address
                to: "juliepelissou@laposte.net", // list of receivers
                subject: "Mail portfolio", // Subject line
                text: $scope.Corp, // plaintext body
                html: $scope.Corp // html body
            }

            // send mail with defined transport object
            smtpTransport.sendMail(mailOptions, function (error, response) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Message sent: " + response.message);
                }

                // if you don't want to use this transport object anymore, uncomment following line
                //smtpTransport.close(); // shut down the connection pool, no more messages
            });
        }
    }
}