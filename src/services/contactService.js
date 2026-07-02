export async function contactService(formData) {
    const API_URL = "http://localhost:3000";

    const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    return {ok: response.ok, 
        ...result
    };
}