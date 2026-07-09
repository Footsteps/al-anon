export async function contactService(formData) {

    const API_URL = import.meta.env.VITE_API_URL;

    if(!API_URL) {
        throw new Error ("VITE_API_URL ist nicht gesetzt");
    }

    const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    return {ok: response.ok, 
        ...result
    };
}

