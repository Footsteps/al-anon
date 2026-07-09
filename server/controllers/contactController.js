import { validateSubmission } from "../validators/contactValidator.js"
import { sendMail } from "../services/mailService.js";

export async function submitContactForm(req,res) {
    const validation = validateSubmission(req.body, req.file);

    if (validation.spam) {
        return res.json({
            success: true
        })
    }

    if(!validation.success) {
        return res.status(400).json(validation);
    }

    try {
        await sendMail({
        body: req.body,
        file: req.file
    })
    
    return res.json({
        success: true,
    })
    } catch(err) {
        console.log(err);

        return res.status(500).json({
            success: false,
            error: "mail_failed"
        })
    }
    
}