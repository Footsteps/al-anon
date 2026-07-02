import { validateSubmission } from "../validators/contactValidator.js"

export function submitContactForm(req,res) {
    const validation = validateSubmission(req.body, req.file);

    if(!validation.success) {
        return res.status(400).json(validation);
    }

    res.json({
        success: true,
        message: "Anfrage erhalten"
    })
}