///This file is for everything email

///Libraries -->
import nodemailer from "nodemailer"
import { IAccount, IInquiry, ITransaction } from "./interfaces"
import { companyName, SUPPORT_EMAIL, SUPPORT_PASSWORD, domainName } from "./utils"

///Commencing the code


/**
 * @notice This sends an email, works with gmail account for now
 * @param senderEmail The email address of the sender
 * @param senderPassword The password for the email address of the sender
 * @param recipientEmail The recipient's email address
 * @param subject The subject of the email to be sent
 * @param body The body message of the email to be sent
 * @returns The status of the sent email, whether successful or not
 */
export const sendEmail = async (
    senderName: string,
    senderEmail: string, 
    senderPassword: string, 
    recipientEmail: string, 
    subject: string,
    body: string | undefined,
    template: string | undefined,
    context: Object | undefined
    ): Promise<string | void> => {
        let transporter = nodemailer.createTransport({
          // host: 'smtp.privateemail.com', // Replace with your SMTP host
          // port: 465, // Replace with your SMTP port
          // secure: true, // Set to true if using a secure connection (e.g., port 465)
          //host: "smtp.titan.email",
          host: "smtp-mail.outlook.com",
          port: 587,
          secure: false,
            //service: 'gmail',
            //providerAuth
            //authMethod: 'PLAIN',
            auth: {
              user: senderEmail,
              pass: senderPassword
            },
            tls: {
              ciphers:'SSLv3'
          }
          });


        // point to the template folder
        // const handlebarOptions: NodemailerExpressHandlebarsOptions = {
        //   extName: '.hbs',
        //   viewEngine: {
        //       partialsDir: path.resolve('./src/utils/emails/'),
        //       defaultLayout: false,
        //   },
        //   viewPath: path.resolve('./src/utils/emails/'),
        // };
        console.log("Credentials: ", SUPPORT_EMAIL, SUPPORT_PASSWORD)
        // // use a template file with nodemailer
        // transporter.use('compile', hbs(handlebarOptions))

          let mailOptions = {
            from: `${senderName} Support <${senderEmail}>`,
            to: recipientEmail,
            subject: subject,
            text: body,
            template: template,
            context: context
          };
          
          await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
                  reject(error)
                return error.message
              } else {
                console.log('Email sent: ' + info.response);
                  resolve(info)
                return info.response
              }
            });
          })
    }


/**
 * @notice This sends a subnewsletter email to a customer
 * @param recipientEmail The recipient's email address
 * @param recipientName The name of the recipient
 * @param subject The subject of the email to be sent
 * @param body The body message of the email to be sent
 * @returns The status of the sent email, whether successful or not
 */
export const sendSubnewsletterEmail = async (recipientEmail: string): Promise<any> => {
  const template: string = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title></title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
  
      <style type="text/css">
        @import url('https://fonts.googleapis.com/css?family=Inter');
        
        html {
          padding: 0px;
          overflow-x: hidden;
          /* border: 2px solid yellow; */
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          font-family: 'Inter';
        }
  
        body {
          /* align-items: center; */
          position: absolute;
          /* border: 2px solid blue; */
          width: 95%;
          height: 95%;
        }
  
        main {
          /* align-items: center; */
          position: relative;
          border: 2px solid blue;
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 95%;
          height: 100%;
          padding: 1% 2.5%;
        }
  
        .logo {
          position: relative;
          border: 2px solid blue;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 95%;
          height: 7%;
          margin-bottom: 20px;
          top: 5%;
        }
  
        .logo img {
          position: relative;
          object-fit: contain;
          /* border: 2px solid blue; */
          width: 7%;
          height: 60%;
        }
  
        .message {
          border: 2px solid red;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 5%;
          height: 30%;
          top: 10%;
          font-size: 14px;
          line-height: 22px;
        }
  
        #body {
          border: 2px solid blue;
          position: relative;
          display: flex;
          flex-direction: column;
        }
  
      /* This is for mobile */
      @media (min-width: 550px) and (max-width: 1024px) {
        .logo img {
          width: 15%;
        }
      }
  
        /* This is for mobile */
        @media (min-width: 0px) and (max-width: 550px) {
  
          .logo {
            margin-bottom: 0px;
          }
  
          .logo img {
              /* border: 1px solid red; */
              width: 25%;
          }
  
          .brief {
            font-size: 18px;
            flex-direction: column;
          }
  
          .message {
            top: 20%;
            height: 40%;
          }
  
          #body {
            top: 5%;
          }
        }
  
        /* This is for mobile */
        @media (min-width: 0px) and (max-width: 300px) {
  
          .message {
            height: 50%;
          }
  
          #body {
            top: 5%;
          }
        }
      </style>
    </head>
  
    <body>
      <main>
        <header class="logo">
          <img 
              src="https://drive.google.com/uc?export=download&id=1RbUo9BSAyxfNmzVV_dzjC7E4nT9ZtbnV"
              alt="test"
          />
        </header>
        <div class="message">
          <span id="body">
            Hey,
          <br />
          <br />
              Thank you for subscribing to our newsletter! We are delighted to have you on board. Rest assured, you will be the first to receive updates whenever a new product is listed. Stay tuned for exciting news and offers! 
          <br />
          <br />
          Best regards, <br />
          Dr Ritany Customer Care
          </span>
        </div>
      </main>
      <script>
        
      </script>
    </body>
  </html>
  `
  const body = `
Hey,
  
Thank you for subscribing to our newsletter! 
We are delighted to have you on board. Rest assured, you will be among the first to receive our latest news, promotions and exclusive offers right in your inbox. We're excited to have you as part of our community.
  
If you ever have any questions, concerns or just want to chat, feel free to reply to this email. We value your feedback immensely.

Warmest regards, 

Customer Support Team
${companyName}
  `
  const status = await sendEmail(`${companyName}`, SUPPORT_EMAIL, SUPPORT_PASSWORD, recipientEmail, `Successful Newsletter Subscription`, body, undefined, undefined)
  return status
}

/**
 * @notice This sends a successful inquiry email to a customer
 * @param recipientEmail The recipient's email address
 * @param recipientName The name of the recipient
 * @param subject The subject of the email to be sent
 * @param body The body message of the email to be sent
 * @returns The status of the sent email, whether successful or not
 */
 export const sendInquiryEmail = (inquiry: IInquiry): any => {
  const template: string = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <style type="text/css">
    @import url('https://fonts.googleapis.com/css?family=Inter');
      html {
        padding: 0px;
        overflow-x: hidden;
        /* border: 2px solid yellow; */
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        font-family: 'Inter';
      }

      body {
        /* align-items: center; */
        position: absolute;
        /* border: 2px solid blue; */
        width: 95%;
        height: 95%;
      }

      main {
        /* align-items: center; */
        position: relative;
        border: 2px solid blue;
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 95%;
        height: 100%;
        padding: 1% 2.5%;
      }

      .logo {
        position: relative;
        border: 2px solid blue;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        width: 95%;
        height: 7%;
        margin-bottom: 20px;
        top: 5%;
      }

      .logo img {
        position: relative;
        object-fit: contain;
        /* border: 2px solid blue; */
        width: 7%;
        height: 60%;
      }

      .message {
        border: 2px solid blue;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 5%;
        top: 10%;
        font-size: 16px;
        line-height: 22px;
      }

      #salute {

      }

      #body {
        border: 2px solid blue;
        position: relative;
        display: flex;
        flex-direction: column;
        top: 15%;
      }

    /* This is for mobile */
    @media (min-width: 550px) and (max-width: 1024px) {
      .logo img {
        width: 15%;
      }
    }

      /* This is for mobile */
      @media (min-width: 0px) and (max-width: 550px) {

        .logo {
          margin-bottom: 0px;
        }

        .logo img {
            /* border: 1px solid red; */
            width: 25%;
        }

        .brief {
          font-size: 18px;
          flex-direction: column;
        }

        .message {
          font-size: 16px;
        }

        #body {
          top: 5%;
        }
      }
    </style>
  </head>

  <body>
    <main>
      <header class="logo">
        <img 
            src="https://drive.google.com/uc?export=download&id=1RbUo9BSAyxfNmzVV_dzjC7E4nT9ZtbnV"
            alt="test"
        />
      </header>
      <div class="message">
        <span id="salute">Dear,</span>
        <span id="body">
            Thank you for reaching out to us. We have received your message and our team will respond to you promptly. 
        <br />
        <br />
        Best regards, <br />
        Dr Ritany Customer Care
        </span>
      </div>
    </main>
    <script>
      
    </script>
  </body>
</html>
  `

  const body = `
Dear ${inquiry.fullName},

Thank you for reaching out to us. We have received your inquiry and appreciate the time you took to contact us. Your questions are important to us and we want to assure you that we are working on providing you with a comprehensive response.

Our team is reviewing your inquiry, and we will get back to you as soon as possible. Please expect to hear from us within the next 24 hours with the information you require.

If you have any further questions or concerns in the meantime, please do not hesitate to contact us. We appreciate your patience and look forward to assisting you.

Warmest regards, 

Customer Support Team
${companyName}
  `
  
  const status = sendEmail(`${companyName}`, SUPPORT_EMAIL, SUPPORT_PASSWORD, inquiry.emailAddress, ` Acknowledgment of your Inquiry`, body, undefined, undefined)
  return status
}

/**
 * @notice This sends an email for dividend record date to a customer
 * @param recipientEmail The recipient's email address
 * @param recipientName The name of the recipient
 * @param subject The subject of the email to be sent
 * @param body The body message of the email to be sent
 * @returns The status of the sent email, whether successful or not
 */
// export const sendDividendRecordDateEmail = (name: string, recipientEmail: string, recordDate: string): any => {
//     const template: string = `
//     <!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <title></title>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
  
//       <style type="text/css">
//       @import url('https://fonts.googleapis.com/css?family=Inter');
//         html {
//           padding: 0px;
//           overflow-x: hidden;
//           /* border: 2px solid yellow; */
//           width: 100%;
//           height: 100%;
//           position: relative;
//           display: flex;
//           justify-content: center;
//           font-family: 'Inter';
//         }
  
//         body {
//           /* align-items: center; */
//           position: absolute;
//           /* border: 2px solid blue; */
//           width: 95%;
//           height: 95%;
//         }
  
//         main {
//           /* align-items: center; */
//           position: relative;
//           border: 2px solid blue;
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//           width: 95%;
//           height: 100%;
//           padding: 1% 2.5%;
//         }
  
//         .logo {
//           position: relative;
//           border: 2px solid blue;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           gap: 5px;
//           width: 95%;
//           height: 7%;
//           margin-bottom: 20px;
//           top: 5%;
//         }
  
//         .logo img {
//           position: relative;
//           object-fit: contain;
//           /* border: 2px solid blue; */
//           width: 7%;
//           height: 60%;
//         }
  
//         .message {
//           border: 2px solid blue;
//           position: relative;
//           display: flex;
//           flex-direction: column;
//           gap: 5%;
//           top: 10%;
//           font-size: 16px;
//           line-height: 22px;
//         }
  
//         #salute {
  
//         }
  
//         #body {
//           border: 2px solid blue;
//           position: relative;
//           display: flex;
//           flex-direction: column;
//           top: 15%;
//         }
  
//       /* This is for mobile */
//       @media (min-width: 550px) and (max-width: 1024px) {
//         .logo img {
//           width: 15%;
//         }
//       }
  
//         /* This is for mobile */
//         @media (min-width: 0px) and (max-width: 550px) {
  
//           .logo {
//             margin-bottom: 0px;
//           }
  
//           .logo img {
//               /* border: 1px solid red; */
//               width: 25%;
//           }
  
//           .brief {
//             font-size: 18px;
//             flex-direction: column;
//           }
  
//           .message {
//             font-size: 16px;
//           }
  
//           #body {
//             top: 5%;
//           }
//         }
//       </style>
//     </head>
  
//     <body>
//       <main>
//         <header class="logo">
//           <img 
//               src="https://drive.google.com/uc?export=download&id=1RbUo9BSAyxfNmzVV_dzjC7E4nT9ZtbnV"
//               alt="test"
//           />
//         </header>
//         <div class="message">
//           <span id="salute">Dear,</span>
//           <span id="body">
//               Thank you for reaching out to us. We have received your message and our team will respond to you promptly. 
//           <br />
//           <br />
//           Best regards, <br />
//           Dr Ritany Customer Care
//           </span>
//         </div>
//       </main>
//       <script>
        
//       </script>
//     </body>
//   </html>
//     `
  
//     const body = `
//         Dear ${name},
        
//         We are pleased to inform you that the record date for our upcoming dividend distribution has been officially declared. The record date, which determines shareholders of our tokenized mutual funds eligible to receive dividends, has been set for ${recordDate}.

//         We understand the importance of dividends in your investment journey and we strive to keep you informed at every step. If you have any questions regarding this announcement or your dividend payout, please feel free to reach out to our customer support team. They are available to assist you.

//         Thank you for your continued trust in our services. We appreciate your business and look forward to serving you in the future.
    
//         Warmest regards, 
  
//         Customer Support Team
//         ${companyName}
//         ${companyEmail}
//     `
    
//     const status = sendEmail(`${companyName} Support`, SUPPORT_EMAIL, SUPPORT_PASSWORD, recipientEmail, `Dividend Record Date Declaration`, body, undefined, undefined)
//     return status
//   }

/**
 * @notice This sends an email for dividend successful payment to customer
 * @param recipientEmail The recipient's email address
 * @param recipientName The name of the recipient
 * @param paymentDate The date the payment was made
 * @param amount The amount that was paid
 * @returns The status of the sent email, whether successful or not
 */
export const sendDividendPaymentEmail = (account: IAccount, transaction: ITransaction): any => {
//     const template: string = `
//     <!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <title></title>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
  
//       <style type="text/css">
//       @import url('https://fonts.googleapis.com/css?family=Inter');
//         html {
//           padding: 0px;
//           overflow-x: hidden;
//           /* border: 2px solid yellow; */
//           width: 100%;
//           height: 100%;
//           position: relative;
//           display: flex;
//           justify-content: center;
//           font-family: 'Inter';
//         }
  
//         body {
//           /* align-items: center; */
//           position: absolute;
//           /* border: 2px solid blue; */
//           width: 95%;
//           height: 95%;
//         }
  
//         main {
//           /* align-items: center; */
//           position: relative;
//           border: 2px solid blue;
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//           width: 95%;
//           height: 100%;
//           padding: 1% 2.5%;
//         }
  
//         .logo {
//           position: relative;
//           border: 2px solid blue;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           gap: 5px;
//           width: 95%;
//           height: 7%;
//           margin-bottom: 20px;
//           top: 5%;
//         }
  
//         .logo img {
//           position: relative;
//           object-fit: contain;
//           /* border: 2px solid blue; */
//           width: 7%;
//           height: 60%;
//         }
  
//         .message {
//           border: 2px solid blue;
//           position: relative;
//           display: flex;
//           flex-direction: column;
//           gap: 5%;
//           top: 10%;
//           font-size: 16px;
//           line-height: 22px;
//         }
  
//         #salute {
  
//         }
  
//         #body {
//           border: 2px solid blue;
//           position: relative;
//           display: flex;
//           flex-direction: column;
//           top: 15%;
//         }
  
//       /* This is for mobile */
//       @media (min-width: 550px) and (max-width: 1024px) {
//         .logo img {
//           width: 15%;
//         }
//       }
  
//         /* This is for mobile */
//         @media (min-width: 0px) and (max-width: 550px) {
  
//           .logo {
//             margin-bottom: 0px;
//           }
  
//           .logo img {
//               /* border: 1px solid red; */
//               width: 25%;
//           }
  
//           .brief {
//             font-size: 18px;
//             flex-direction: column;
//           }
  
//           .message {
//             font-size: 16px;
//           }
  
//           #body {
//             top: 5%;
//           }
//         }
//       </style>
//     </head>
  
//     <body>
//       <main>
//         <header class="logo">
//           <img 
//               src="https://drive.google.com/uc?export=download&id=1RbUo9BSAyxfNmzVV_dzjC7E4nT9ZtbnV"
//               alt="test"
//           />
//         </header>
//         <div class="message">
//           <span id="salute">Dear ,</span>
//           <span id="body">
//               Thank you for reaching out to us. We have received your message and our team will respond to you promptly. 
//           <br />
//           <br />
//           Best regards, <br />
//           Dr Ritany Customer Care
//           </span>
//         </div>
//       </main>
//       <script>
        
//       </script>
//     </body>
//   </html>
//     `
  
    const body = `
Dear ${account.fullName},

We are pleased to inform you that your dividend payment has been successfully processed. You will be glad to know that a sum of ${transaction.amount.toLocaleString("en-US")} has been credited to your account on ${transaction.date}.

Thank you for choosing us as your investment partner. If you have any further questions or require assistance, please do not hesitate to contact our customer support team. We are here to help.

Warmest regards, 

Customer Support Team
${companyName}
    `
    
    const status = sendEmail(`${companyName}`, SUPPORT_EMAIL, SUPPORT_PASSWORD, account.emailAddress, `Confirmation of Dividend Payment`, body, undefined, undefined)
    return status
  }

/**
 * @notice This sends an email for referral bonus to customer
 * @param recipientEmail The recipient's email address
 * @param recipientName The name of the recipient
 * @param amount The amount for the referral bonus
 * @returns The status of the sent email, whether successful or not
 */
export const sendReferralBonusEmail = (account: IAccount, amount: number): any => {
//     const template: string = `
//     <!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <title></title>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
  
//       <style type="text/css">
//       @import url('https://fonts.googleapis.com/css?family=Inter');
//         html {
//           padding: 0px;
//           overflow-x: hidden;
//           /* border: 2px solid yellow; */
//           width: 100%;
//           height: 100%;
//           position: relative;
//           display: flex;
//           justify-content: center;
//           font-family: 'Inter';
//         }
  
//         body {
//           /* align-items: center; */
//           position: absolute;
//           /* border: 2px solid blue; */
//           width: 95%;
//           height: 95%;
//         }
  
//         main {
//           /* align-items: center; */
//           position: relative;
//           border: 2px solid blue;
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//           width: 95%;
//           height: 100%;
//           padding: 1% 2.5%;
//         }
  
//         .logo {
//           position: relative;
//           border: 2px solid blue;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           gap: 5px;
//           width: 95%;
//           height: 7%;
//           margin-bottom: 20px;
//           top: 5%;
//         }
  
//         .logo img {
//           position: relative;
//           object-fit: contain;
//           /* border: 2px solid blue; */
//           width: 7%;
//           height: 60%;
//         }
  
//         .message {
//           border: 2px solid blue;
//           position: relative;
//           display: flex;
//           flex-direction: column;
//           gap: 5%;
//           top: 10%;
//           font-size: 16px;
//           line-height: 22px;
//         }
  
//         #salute {
  
//         }
  
//         #body {
//           border: 2px solid blue;
//           position: relative;
//           display: flex;
//           flex-direction: column;
//           top: 15%;
//         }
  
//       /* This is for mobile */
//       @media (min-width: 550px) and (max-width: 1024px) {
//         .logo img {
//           width: 15%;
//         }
//       }
  
//         /* This is for mobile */
//         @media (min-width: 0px) and (max-width: 550px) {
  
//           .logo {
//             margin-bottom: 0px;
//           }
  
//           .logo img {
//               /* border: 1px solid red; */
//               width: 25%;
//           }
  
//           .brief {
//             font-size: 18px;
//             flex-direction: column;
//           }
  
//           .message {
//             font-size: 16px;
//           }
  
//           #body {
//             top: 5%;
//           }
//         }
//       </style>
//     </head>
  
//     <body>
//       <main>
//         <header class="logo">
//           <img 
//               src="https://drive.google.com/uc?export=download&id=1RbUo9BSAyxfNmzVV_dzjC7E4nT9ZtbnV"
//               alt="test"
//           />
//         </header>
//         <div class="message">
//           <span id="salute">Dear ,</span>
//           <span id="body">
//               Thank you for reaching out to us. We have received your message and our team will respond to you promptly. 
//           <br />
//           <br />
//           Best regards, <br />
//           Dr Ritany Customer Care
//           </span>
//         </div>
//       </main>
//       <script>
        
//       </script>
//     </body>
//   </html>
//     `
  
    const body = `
Dear ${account.fullName},

We are thrilled to inform you that your referral bonus has been successfully credited to your account. A total amount of $${amount.toLocaleString("en-US")} has been transferred to you as a token of our appreciation for your valuable referral.

Thank you for being a part of our referral program. Should you have any questions or need further assistance, please feel free to reach out to our customer support team. We're here to help!

Warmest regards, 

Customer Support Team
${companyName}
    `
    
    const status = sendEmail(`${companyName}`, SUPPORT_EMAIL, SUPPORT_PASSWORD, account.emailAddress, `Referral Bonus Payment Confirmation`, body, undefined, undefined)
    return status
  }

/**
 * @notice This sends an email for verification to customer
 * @param recipientEmail The recipient's email address
 * @param recipientName The name of the recipient
 * @param idVerificationLink The link for verifying email address and identity
 * @returns The status of the sent email, whether successful or not
 */
export const sendEmailVerificationEmail = (account: IAccount): any => {
    //     const template: string = `
    //     <!DOCTYPE html>
    //   <html lang="en">
    //     <head>
    //       <title></title>
    //       <meta charset="UTF-8" />
    //       <meta name="viewport" content="width=device-width, initial-scale=1" />
      
    //       <style type="text/css">
    //       @import url('https://fonts.googleapis.com/css?family=Inter');
    //         html {
    //           padding: 0px;
    //           overflow-x: hidden;
    //           /* border: 2px solid yellow; */
    //           width: 100%;
    //           height: 100%;
    //           position: relative;
    //           display: flex;
    //           justify-content: center;
    //           font-family: 'Inter';
    //         }
      
    //         body {
    //           /* align-items: center; */
    //           position: absolute;
    //           /* border: 2px solid blue; */
    //           width: 95%;
    //           height: 95%;
    //         }
      
    //         main {
    //           /* align-items: center; */
    //           position: relative;
    //           border: 2px solid blue;
    //           display: flex;
    //           flex-direction: column;
    //           gap: 5px;
    //           width: 95%;
    //           height: 100%;
    //           padding: 1% 2.5%;
    //         }
      
    //         .logo {
    //           position: relative;
    //           border: 2px solid blue;
    //           display: flex;
    //           flex-direction: column;
    //           justify-content: center;
    //           gap: 5px;
    //           width: 95%;
    //           height: 7%;
    //           margin-bottom: 20px;
    //           top: 5%;
    //         }
      
    //         .logo img {
    //           position: relative;
    //           object-fit: contain;
    //           /* border: 2px solid blue; */
    //           width: 7%;
    //           height: 60%;
    //         }
      
    //         .message {
    //           border: 2px solid blue;
    //           position: relative;
    //           display: flex;
    //           flex-direction: column;
    //           gap: 5%;
    //           top: 10%;
    //           font-size: 16px;
    //           line-height: 22px;
    //         }
      
    //         #salute {
      
    //         }
      
    //         #body {
    //           border: 2px solid blue;
    //           position: relative;
    //           display: flex;
    //           flex-direction: column;
    //           top: 15%;
    //         }
      
    //       /* This is for mobile */
    //       @media (min-width: 550px) and (max-width: 1024px) {
    //         .logo img {
    //           width: 15%;
    //         }
    //       }
      
    //         /* This is for mobile */
    //         @media (min-width: 0px) and (max-width: 550px) {
      
    //           .logo {
    //             margin-bottom: 0px;
    //           }
      
    //           .logo img {
    //               /* border: 1px solid red; */
    //               width: 25%;
    //           }
      
    //           .brief {
    //             font-size: 18px;
    //             flex-direction: column;
    //           }
      
    //           .message {
    //             font-size: 16px;
    //           }
      
    //           #body {
    //             top: 5%;
    //           }
    //         }
    //       </style>
    //     </head>
      
    //     <body>
    //       <main>
    //         <header class="logo">
    //           <img 
    //               src="https://drive.google.com/uc?export=download&id=1RbUo9BSAyxfNmzVV_dzjC7E4nT9ZtbnV"
    //               alt="test"
    //           />
    //         </header>
    //         <div class="message">
    //           <span id="salute">Dear ,</span>
    //           <span id="body">
    //               Thank you for reaching out to us. We have received your message and our team will respond to you promptly. 
    //           <br />
    //           <br />
    //           Best regards, <br />
    //           Dr Ritany Customer Care
    //           </span>
    //         </div>
    //       </main>
    //       <script>
            
    //       </script>
    //     </body>
    //   </html>
    //     `
      
    const body = `
Dear ${account.fullName},

Thank you for choosing ${companyName}!

To complete your registration and access all the exciting features our platform has to offer, we kindly ask you to verify your email address. Click on the link below to verify your email and continue with the registration process:

${domainName}/verify-identity/${account._id}

If you encounter any issues or need assistance, don't hesitate to reach out to our support team. We appreciate your cooperation and look forward to welcoming you officially to our community.

Warmest regards, 

Customer Support Team
${companyName}
    `
    
    const status = sendEmail(`${companyName}`, SUPPORT_EMAIL, SUPPORT_PASSWORD, account.emailAddress, `Verify Your Email Address to Complete Registration`, body, undefined, undefined)
    return status
}

/**
 * @notice This sends an email for id under review to customer
 * @param account The details of the user as regards IAccount Interface
 * @returns The status of the sent email, whether successful or not
 */
export const sendIdUnderReviewEmail = (account: IAccount): any => {
    //     const template: string = `
    //     <!DOCTYPE html>
    //   <html lang="en">
    //     <head>
    //       <title></title>
    //       <meta charset="UTF-8" />
    //       <meta name="viewport" content="width=device-width, initial-scale=1" />
      
    //       <style type="text/css">
    //       @import url('https://fonts.googleapis.com/css?family=Inter');
    //         html {
    //           padding: 0px;
    //           overflow-x: hidden;
    //           /* border: 2px solid yellow; */
    //           width: 100%;
    //           height: 100%;
    //           position: relative;
    //           display: flex;
    //           justify-content: center;
    //           font-family: 'Inter';
    //         }
      
    //         body {
    //           /* align-items: center; */
    //           position: absolute;
    //           /* border: 2px solid blue; */
    //           width: 95%;
    //           height: 95%;
    //         }
      
    //         main {
    //           /* align-items: center; */
    //           position: relative;
    //           border: 2px solid blue;
    //           display: flex;
    //           flex-direction: column;
    //           gap: 5px;
    //           width: 95%;
    //           height: 100%;
    //           padding: 1% 2.5%;
    //         }
      
    //         .logo {
    //           position: relative;
    //           border: 2px solid blue;
    //           display: flex;
    //           flex-direction: column;
    //           justify-content: center;
    //           gap: 5px;
    //           width: 95%;
    //           height: 7%;
    //           margin-bottom: 20px;
    //           top: 5%;
    //         }
      
    //         .logo img {
    //           position: relative;
    //           object-fit: contain;
    //           /* border: 2px solid blue; */
    //           width: 7%;
    //           height: 60%;
    //         }
      
    //         .message {
    //           border: 2px solid blue;
    //           position: relative;
    //           display: flex;
    //           flex-direction: column;
    //           gap: 5%;
    //           top: 10%;
    //           font-size: 16px;
    //           line-height: 22px;
    //         }
      
    //         #salute {
      
    //         }
      
    //         #body {
    //           border: 2px solid blue;
    //           position: relative;
    //           display: flex;
    //           flex-direction: column;
    //           top: 15%;
    //         }
      
    //       /* This is for mobile */
    //       @media (min-width: 550px) and (max-width: 1024px) {
    //         .logo img {
    //           width: 15%;
    //         }
    //       }
      
    //         /* This is for mobile */
    //         @media (min-width: 0px) and (max-width: 550px) {
      
    //           .logo {
    //             margin-bottom: 0px;
    //           }
      
    //           .logo img {
    //               /* border: 1px solid red; */
    //               width: 25%;
    //           }
      
    //           .brief {
    //             font-size: 18px;
    //             flex-direction: column;
    //           }
      
    //           .message {
    //             font-size: 16px;
    //           }
      
    //           #body {
    //             top: 5%;
    //           }
    //         }
    //       </style>
    //     </head>
      
    //     <body>
    //       <main>
    //         <header class="logo">
    //           <img 
    //               src="https://drive.google.com/uc?export=download&id=1RbUo9BSAyxfNmzVV_dzjC7E4nT9ZtbnV"
    //               alt="test"
    //           />
    //         </header>
    //         <div class="message">
    //           <span id="salute">Dear ,</span>
    //           <span id="body">
    //               Thank you for reaching out to us. We have received your message and our team will respond to you promptly. 
    //           <br />
    //           <br />
    //           Best regards, <br />
    //           Dr Ritany Customer Care
    //           </span>
    //         </div>
    //       </main>
    //       <script>
            
    //       </script>
    //     </body>
    //   </html>
    //     `
      
    const body = `
Dear ${account.fullName},

Thank you for submitting your ID document for verification with ${companyName}. We appreciate your cooperation.

We want to inform you that your document is currently under review. Our team is diligently working on verifying it and you can expect the process to be completed soon. We understand the importance of this verification and we assure you that we are doing everything we can to expedite the process.

Once your document is verified, you will receive a confirmation email from us. If you have any questions or concerns during this process, feel free to reach out to our support team, we are here to assist you.

Thank you for your patience and understanding.

Warmest regards, 

Customer Support Team
${companyName}
    `
    
    const status = sendEmail(`${companyName}`, SUPPORT_EMAIL, SUPPORT_PASSWORD, account.emailAddress, `ID Document Under Review`, body, undefined, undefined)
    return status
}

/**
 * @notice This sends an email for welcoming a customer
 * @param account The details of the user as regards IAccount Interface
 * @returns The status of the sent email, whether successful or not
 */
export const sendWelcomeEmail = (account: IAccount): any => {
    //     const template: string = `
    //     <!DOCTYPE html>
    //   <html lang="en">
    //     <head>
    //       <title></title>
    //       <meta charset="UTF-8" />
    //       <meta name="viewport" content="width=device-width, initial-scale=1" />
      
    //       <style type="text/css">
    //       @import url('https://fonts.googleapis.com/css?family=Inter');
    //         html {
    //           padding: 0px;
    //           overflow-x: hidden;
    //           /* border: 2px solid yellow; */
    //           width: 100%;
    //           height: 100%;
    //           position: relative;
    //           display: flex;
    //           justify-content: center;
    //           font-family: 'Inter';
    //         }
      
    //         body {
    //           /* align-items: center; */
    //           position: absolute;
    //           /* border: 2px solid blue; */
    //           width: 95%;
    //           height: 95%;
    //         }
      
    //         main {
    //           /* align-items: center; */
    //           position: relative;
    //           border: 2px solid blue;
    //           display: flex;
    //           flex-direction: column;
    //           gap: 5px;
    //           width: 95%;
    //           height: 100%;
    //           padding: 1% 2.5%;
    //         }
      
    //         .logo {
    //           position: relative;
    //           border: 2px solid blue;
    //           display: flex;
    //           flex-direction: column;
    //           justify-content: center;
    //           gap: 5px;
    //           width: 95%;
    //           height: 7%;
    //           margin-bottom: 20px;
    //           top: 5%;
    //         }
      
    //         .logo img {
    //           position: relative;
    //           object-fit: contain;
    //           /* border: 2px solid blue; */
    //           width: 7%;
    //           height: 60%;
    //         }
      
    //         .message {
    //           border: 2px solid blue;
    //           position: relative;
    //           display: flex;
    //           flex-direction: column;
    //           gap: 5%;
    //           top: 10%;
    //           font-size: 16px;
    //           line-height: 22px;
    //         }
      
    //         #salute {
      
    //         }
      
    //         #body {
    //           border: 2px solid blue;
    //           position: relative;
    //           display: flex;
    //           flex-direction: column;
    //           top: 15%;
    //         }
      
    //       /* This is for mobile */
    //       @media (min-width: 550px) and (max-width: 1024px) {
    //         .logo img {
    //           width: 15%;
    //         }
    //       }
      
    //         /* This is for mobile */
    //         @media (min-width: 0px) and (max-width: 550px) {
      
    //           .logo {
    //             margin-bottom: 0px;
    //           }
      
    //           .logo img {
    //               /* border: 1px solid red; */
    //               width: 25%;
    //           }
      
    //           .brief {
    //             font-size: 18px;
    //             flex-direction: column;
    //           }
      
    //           .message {
    //             font-size: 16px;
    //           }
      
    //           #body {
    //             top: 5%;
    //           }
    //         }
    //       </style>
    //     </head>
      
    //     <body>
    //       <main>
    //         <header class="logo">
    //           <img 
    //               src="https://drive.google.com/uc?export=download&id=1RbUo9BSAyxfNmzVV_dzjC7E4nT9ZtbnV"
    //               alt="test"
    //           />
    //         </header>
    //         <div class="message">
    //           <span id="salute">Dear ,</span>
    //           <span id="body">
    //               Thank you for reaching out to us. We have received your message and our team will respond to you promptly. 
    //           <br />
    //           <br />
    //           Best regards, <br />
    //           Dr Ritany Customer Care
    //           </span>
    //         </div>
    //       </main>
    //       <script>
            
    //       </script>
    //     </body>
    //   </html>
    //     `
      
    const body = `
Dear ${account.fullName},

We are thrilled to welcome you to ${companyName}! You are now officially part of our family.

We are pleased to inform you that your ID verification process has been successfully completed. This important step ensures the security of your account and allows you to access all the exciting features and benefits our platform has to offer.

Please be warned, every transaction is done on the site and not through any third party institution or individual.

If you have any questions, concerns or need assistance, please don't hesitate to reach out to our dedicated customer support team, we're here to help you every step of the way.

Thank you for choosing ${companyName}. We appreciate your trust in us and we look forward to serving and providing you with an exceptional experience.

Warmest regards, 

Customer Support Team
${companyName}
    `
    
    const status = sendEmail(`${companyName}`, SUPPORT_EMAIL, SUPPORT_PASSWORD, account.emailAddress, `Welcome to ${companyName}!`, body, undefined, undefined)
    return status
}

/**
 * @notice This sends an email for resetting password to customer
 * @param recipientEmail The recipient's email address
 * @param recipientName The name of the recipient
 * @param resetLink The password reset link
 * @returns The status of the sent email, whether successful or not
 */
export const sendResetPasswordEmail = (account: IAccount): any => {
    const body = `
Dear ${account.fullName},

We wanted to inform you that a request has been made to change the password associated with your account at ${companyName}. If you initiated this request, please click the link below to reset your password:

${domainName}/reset-password/${account._id}

If you did not request this change or are unaware of it, please ignore this email. Your account is secure; no changes have been made.

If you need any assistance or have questions, please don't hesitate to contact our customer support team.

Warmest regards, 

Customer Support Team
${companyName}
    `
    
    const status = sendEmail(`${companyName}`, SUPPORT_EMAIL, SUPPORT_PASSWORD, account.emailAddress, `Password Reset Request`, body, undefined, undefined)
    return status
}

/**
 * @notice This sends an email for resetting password to customer
 * @param recipientEmail The recipient's email address
 * @param recipientName The name of the recipient
 * @param resetLink The password reset link
 * @returns The status of the sent email, whether successful or not
 */
export const sendSuccessResetPasswordEmail = (account: IAccount): any => {
    const body = `
Dear ${account.fullName},

We wanted to inform you that the password for your account with ${companyName} has been successfully reset. If you initiated this action, you can disregard this email.

If you did not request this password change, please secure your account by reaching out to our customer support team immediately.

If you need any assistance or have questions, please don't hesitate to contact our customer support team.

Warmest regards, 

Customer Support Team
${companyName}
    `
    
    const status = sendEmail(`${companyName}`, SUPPORT_EMAIL, SUPPORT_PASSWORD, account.emailAddress, `Password Reset Request`, body, undefined, undefined)
    return status
}

/**
 * @notice This sends an email for successful investment payment by customer
 * @param recipientEmail The recipient's email address
 * @param recipientName The name of the recipient
 * @param subject The subject of the email to be sent
 * @param body The body message of the email to be sent
 * @returns The status of the sent email, whether successful or not
 */
export const sendInvestmentPaymentEmail = (account: IAccount, amount: number): any => {
    const body = `
Dear ${account.fullName},

We are thrilled to inform you that your investment payment of ${amount.toLocaleString("en-US")} has been successfully received. You are an esteemed shareholder in our tokenized mutual funds.

At ${companyName}, we are committed to helping you achieve your financial goals. With your investment, you have taken a significant step toward securing your future. Thank you for choosing us as your investment partner.

If you have any questions, need assistance or want to explore more about your investment, please don't hesitate to contact our customer support team. We're here to support you in your investment journey.

Warmest regards, 

Customer Support Team
${companyName}
    `
    
    const status = sendEmail(`${companyName}`, SUPPORT_EMAIL, SUPPORT_PASSWORD, account.emailAddress, `Investment Payment Received`, body, undefined, undefined)
    return status
}

/**
 * @notice This sends an email fwhen a customer initializes an investment
 * @param account The details of the user as regards IAccount Interface
 * @returns The status of the sent email, whether successful or not
 */
export const sendInvestmentInitEmail = (account: IAccount, transaction: ITransaction): any => {
  const body = `
Dear ${account.fullName},

We would like to inform you that we have received the initiation for a payment of $${transaction.amount.toLocaleString("en-US")} from your account. We appreciate your prompt action in this matter.

To ensure the successful completion of this transaction, we kindly request that you complete the payment process within the next 3 business days. This timeframe is crucial to avoid any potential disruptions.

Here are the details of the payment;

- Transaction ID: ${transaction.txId}
- Amount: $${Number(transaction.amount.toFixed(2)).toLocaleString("en-US")}
- Currency: ${transaction.currency}
- Recipient Wallet Address: ${transaction.recipient}
- Date: ${transaction.date}
- Time: ${transaction.time}

If you have any questions, need assistance or want to explore more about your investment, please don't hesitate to contact our customer support team. We're here to support you in your investment journey.

Warmest regards, 

Customer Support Team
${companyName}
  `
  
  const status = sendEmail(`${companyName}`, SUPPORT_EMAIL, SUPPORT_PASSWORD, account.emailAddress, `Investment Payment Initiation`, body, undefined, undefined)
  return status
}

/**
 * @notice This sends an email for initiated withdrawal by customer
 * @param recipientEmail The recipient's email address
 * @param recipientName The name of the recipient
 * @param amount The withdrawal amount
 * @returns The status of the sent email, whether successful or not
 */
export const sendWithdrawalInitEmail = (account: IAccount, amount: number): any => {
    const body = `
Dear ${account.fullName},

We hope this message finds you well.

We want to inform you that a withdrawal request of ${amount.toLocaleString("en-US")} has been initiated from your account. If you have initiated this withdrawal, kindly ignore this email; your request is being processed.

However, if you did not authorize this withdrawal, please reach out to our customer support team immediately, we take the security of your account seriously and will investigate this matter promptly.

Thank you for your prompt attention to this issue. Your security is our priority.

Warmest regards, 

Customer Support Team
${companyName}
    `
    
    const status = sendEmail(`${companyName}`, SUPPORT_EMAIL, SUPPORT_PASSWORD, account.emailAddress, `Withdrawal Initiated`, body, undefined, undefined)
    return status
}

/**
 * @notice This sends an email for successful investment payment by customer
 * @param recipientEmail The recipient's email address
 * @param recipientName The name of the recipient
 * @param subject The subject of the email to be sent
 * @param body The body message of the email to be sent
 * @returns The status of the sent email, whether successful or not
 */
export const sendWithdrawalPaymentEmail = (account: IAccount, transaction: ITransaction): any => {
  const body = `
Dear ${account.fullName},

We are pleased to inform you that your recent withdrawal request has been successfully processed. The funds have been transferred to your designated account and you should see the transaction reflected in your account shortly.

Transaction Details;

Transaction ID: ${transaction.txId}
Amount: ${transaction.amount.toLocaleString("en-US")}
Currency: ${transaction.currency}
Date: ${transaction.date}
Time: ${transaction.time}

If you have any questions or concerns regarding this transaction, please feel free to reach out to our customer support team. We are here to assist you.

Thank you for choosing ${companyName}. We appreciate your trust in our services, and we look forward to serving you in the future.

Warmest regards, 

Customer Support Team
${companyName}
  `
  
  const status = sendEmail(`${companyName}`, SUPPORT_EMAIL, SUPPORT_PASSWORD, account.emailAddress, `Withdrawal Payment Sent`, body, undefined, undefined)
  return status
}

/**
 * @notice This sends an email for notification to customer
 * @param recipientEmail The recipient's email address
 * @param subject The subject of the email to be sent
 * @param body The body message of the email to be sent
 * @returns The status of the sent email, whether successful or not
 */
export const sendCustomEmail = async (body: string, recipientEmail: string, subject: string) => {
  // const body = `
  //     Dear ${name},
      
  //     We hope this message finds you well.

  //     We want to inform you that a withdrawal request of ${amount} has been initiated from your account. If you have initiated this withdrawal, kindly ignore this email; your request is being processed.

  //     However, if you did not authorize this withdrawal, please reach out to our customer support team immediately, we take the security of your account seriously and will investigate this matter promptly.

  //     Thank you for your prompt attention to this issue. Your security is our priority.

  //     Warmest regards, 
  
  //     Customer Support Team
  //     ${companyName}
  //     ${companyEmail}
  // `
  
  const status = await sendEmail(`${companyName}`, SUPPORT_EMAIL, SUPPORT_PASSWORD, recipientEmail, subject, body, undefined, undefined)
  return status
}