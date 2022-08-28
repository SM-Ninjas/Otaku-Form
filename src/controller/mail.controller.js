/* eslint-disable no-useless-concat */
const nodemailer = require('nodemailer')

const receiveRequest = async(req, res) => {
    try {
        const {email, name, phone, address, graduated, qualification} = req.body;
        
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'somit409@gmail.com',
                pass:'spprtvextnqhittp'
            }
        })
        
        const mailOptions = {
            from :'somit409@gmail.com',
            to : 'nimesh.ffxiv@gmail.com',
            subject : name + ' is requesting for a ticket',
            text : 'From: ' + email + '\n' + 'Phone: ' + phone + '\n' + 'Address: ' + address + '\n' + 'Graduated In: ' + graduated + '\n' + 'Latest Qualification: ' + qualification
        }
        
        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                console.log(err)
            }
            else {
                console.log("Email sent: " + info.response)
            }
        } )

        res.status(200).json({
            message: "Request sent successfully"
        })
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = { receiveRequest }